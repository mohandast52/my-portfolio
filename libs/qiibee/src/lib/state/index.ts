import { notification } from 'antd';
import { syncTypes } from './_types';
import { CUSTOMERS, BRANDS } from './dummyData';
import type {
  Brand, BrandFollowing, Customer, CurrentUser, SignInPayload, SignUpValues, UserType,
} from './types';

export interface QiibeeState {
  currentUserType: UserType | null;
  currentUser: CurrentUser | null;
  customers: Customer[];
  brands: Brand[];
}

// The reducer only reads `type` + `data`; `data` is cast to the per-action
// payload inside each case. `data?: unknown` keeps this a supertype of RTK's
// UnknownAction, so it's a valid reducer for configureStore.
interface QiibeeAction {
  type: string;
  data?: unknown;
}

const INIT_STATE: QiibeeState = {
  currentUserType: null,
  currentUser: null,
  customers: CUSTOMERS,
  brands: BRANDS,
};

const counterReducer = (
  state: QiibeeState = INIT_STATE,
  action: QiibeeAction,
): QiibeeState => {
  const { type, data } = action;
  switch (type) {
    case syncTypes.SIGN_IN: {
      const { type: userType, currentUser } = data as SignInPayload;
      return {
        ...state,
        currentUserType: userType,
        currentUser,
      };
    }

    case syncTypes.SIGN_UP: {
      const { user_type, ...rest } = data as SignUpValues;
      if (user_type === 'customer') {
        const copy = [...state.customers];
        copy.push({
          ...rest,
          id: `customer-id-${copy.length + 1}`,
          reedeemed_points: 0,
          brands_following: [],
        } as Customer);

        return {
          ...state,
          currentUserType: 'customer',
          currentUser: copy[copy.length - 1],
          customers: copy,
        };
      }

      if (user_type === 'brand') {
        const copy = [...state.brands];
        copy.push({
          ...rest,
          id: `brand-id-${copy.length + 1}`,
          description: null,
          created_at: null,
          reedeemed_points: 0,
          brands_following: [],
          // a newly-registered brand has no total_loyalty_points / icon yet
        } as unknown as Brand);

        return {
          ...state,
          currentUserType: 'brand',
          currentUser: copy[copy.length - 1],
          brands: copy,
        };
      }

      return { ...state };
    }

    case syncTypes.LOGOUT: {
      return { ...state, currentUserType: null };
    }

    case syncTypes.REDEEM_POINTS: {
      const brandId = data as string;
      // currentUser is a customer in this flow
      const copy = { ...state.currentUser } as Customer;
      const brand = copy.brands_following.find(
        ({ brand_id }) => brandId === brand_id,
      ) as BrandFollowing;
      copy.reedeemed_points += brand.reedeem_points_provided;
      brand.reedeem_points_provided = 0;
      copy.brands_following = copy.brands_following.map(item => {
        const { brand_id } = item;
        if (brandId !== brand_id) return item;
        return brand;
      });

      // update customers
      const customersCopy = state.customers.map(item => {
        if (item.id === copy.id) return copy;
        return item;
      });

      notification.success({
        placement: 'bottomLeft',
        message: 'Successfully redeemed',
      });

      return {
        ...state,
        currentUser: copy,
        customers: customersCopy,
      };
    }

    case syncTypes.FOLLOW_BRAND: {
      const brandId = data as string;
      const copy = { ...state.currentUser } as Customer;
      copy.brands_following.push({
        brand_id: brandId,
        reedeem_points_provided: 0,
      });

      // customers
      const customersCopy = state.customers.map(item => {
        if (item.id !== copy.id) return item;
        return copy;
      });

      // brand
      const brandsCopy = state.brands.map(item => {
        if (item.id !== brandId) return item;
        return {
          ...item,
          followers: [...(item.followers || []), copy.id],
        };
      });

      return {
        ...state,
        currentUser: copy,
        customers: customersCopy,
        brands: brandsCopy,
      };
    }

    case syncTypes.AWARDS_POINTS: {
      const customerIds = data as string[];
      // currentUser is a brand in this flow
      const currentUser = state.currentUser as Brand;

      if (currentUser.total_loyalty_points < 20 * customerIds.length) {
        notification.error({
          placement: 'bottomLeft',
          message: 'Sorry, you do not have enough points!',
        });
        return { ...state };
      }

      // update currentUser
      const currentUserCopy: Brand = {
        ...currentUser,
        total_loyalty_points:
          currentUser.total_loyalty_points - 20 * customerIds.length,
      };

      // update customers who can redeem points
      const customersCopy = state.customers.map(customer => {
        if (!customerIds.includes(customer.id)) return customer;

        const brandCopy = customer.brands_following.map(item => {
          const { brand_id, reedeem_points_provided } = item;
          if (brand_id !== currentUser.id) return item;

          return {
            ...item,
            reedeem_points_provided: reedeem_points_provided + 20,
          };
        });

        return {
          ...customer,
          brands_following: brandCopy,
        };
      });

      // update brands
      const brandsCopy = state.brands.map(item => {
        if (currentUser.id !== item.id) return item;
        return currentUserCopy;
      });

      notification.success({
        placement: 'bottomLeft',
        message: 'Successfully points allocated',
      });

      return {
        ...state,
        currentUser: currentUserCopy,
        customers: customersCopy,
        brands: brandsCopy,
      };
    }

    default:
      return { ...state };
  }
};

export default counterReducer;
