/* eslint-disable camelcase */
import { notification } from 'antd';
import { syncTypes } from './_types';
import { CUSTOMERS, BRANDS } from './dummyData';

const INIT_STATE = {
  currentUserType: null,
  currentUser: null,
  customers: CUSTOMERS,
  brands: BRANDS,
};

const counterReducer = (state = INIT_STATE, action) => {
  const { type, data } = action;
  switch (type) {
    case syncTypes.SIGN_IN: {
      return {
        ...state,
        currentUserType: data.type,
        currentUser: data.currentUser,
      };
    }

    case syncTypes.SIGN_UP: {
      const { user_type, ...rest } = data;
      if (user_type === 'customer') {
        const copy = [...state.customers];
        copy.push({
          ...rest,
          id: `customer-id-${copy.length + 1}`,
          reedeemed_points: 0,
          brands_following: [],
        });

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
        });

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
      // update currentUser
      const copy = { ...state.currentUser };
      const brand = copy.brands_following.find(
        ({ brand_id }) => data === brand_id,
      );
      copy.reedeemed_points += brand.reedeem_points_provided;
      brand.reedeem_points_provided = 0;
      copy.brands_following = copy.brands_following.map(item => {
        const { brand_id } = item;
        if (data !== brand_id) return item;
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
      const copy = { ...state.currentUser };
      copy.brands_following.push({
        brand_id: data,
        reedeem_points_provided: 0,
      });

      // customers
      const customersCopy = state.customers.map(item => {
        if (item.id !== copy.id) return item;
        return copy;
      });

      // brand
      const brandsCopy = state.brands.map(item => {
        if (item.id !== data) return item;
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
      const { currentUser } = state;

      if (currentUser.total_loyalty_points < 20 * data.length) {
        notification.error({
          placement: 'bottomLeft',
          message: 'Sorry, you do not have enough points!',
        });
        return { ...state };
      }

      // update currentUser
      const currentUserCopy = {
        ...state.currentUser,
        total_loyalty_points:
          currentUser.total_loyalty_points - 20 * data.length,
      };

      // update customer can redeem points!
      const copy = state.customers.map(customer => {
        if (!data.includes(customer.id)) return customer;

        const brandCopy = customer.brands_following.map(item => {
          const { brand_id, reedeem_points_provided } = item;
          if (brand_id !== state.currentUser.id) return item;

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

      // update brands!
      const brandsCopy = state.brands.map(item => {
        const { id } = item;
        if (state.currentUser.id !== id) return item;
        return currentUserCopy;
      });

      notification.success({
        placement: 'bottomLeft',
        message: 'Successfully points allocated',
      });

      return {
        ...state,
        currentUser: currentUserCopy,
        customers: copy,
        brands: brandsCopy,
      };
    }

    default:
      return { ...state };
  }
};

export default counterReducer;
