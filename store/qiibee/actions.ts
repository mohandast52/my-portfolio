import { syncTypes } from './_types';

export const handleSignIn = (type: string, currentUser: any) => ({
  type: syncTypes.SIGN_IN,
  data: { type, currentUser },
});

export const handleSignUp = (values: any) => ({
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

export const handleAwardPoints = (values: any) => ({
  type: syncTypes.AWARDS_POINTS,
  data: values,
});
