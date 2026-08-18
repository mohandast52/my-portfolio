import { syncTypes } from './_types';
import type { CurrentUser, SignUpValues, UserType } from './types';

export const handleSignIn = (type: UserType, currentUser: CurrentUser) => ({
  type: syncTypes.SIGN_IN,
  data: { type, currentUser },
});

export const handleSignUp = (values: SignUpValues) => ({
  type: syncTypes.SIGN_UP,
  data: values,
});

export const handleLogout = () => ({
  type: syncTypes.LOGOUT,
  data: null,
});

export const reedeemPoints = (brandId: string) => ({
  type: syncTypes.REDEEM_POINTS,
  data: brandId,
});

export const followBrand = (brandId: string) => ({
  type: syncTypes.FOLLOW_BRAND,
  data: brandId,
});

export const handleAwardPoints = (values: string[]) => ({
  type: syncTypes.AWARDS_POINTS,
  data: values,
});
