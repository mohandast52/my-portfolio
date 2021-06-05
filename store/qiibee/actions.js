import { syncTypes } from './_types';

export const handleSignIn = (type, currentUser) => ({
  type: syncTypes.SIGN_IN,
  data: { type, currentUser },
});

export const handleSignUp = values => ({
  type: syncTypes.SIGN_UP,
  data: values,
});

export const handleLogout = () => ({
  type: syncTypes.LOGOUT,
  data: null,
});

export const reedeemPoints = brandId => ({
  type: syncTypes.REDEEM_POINTS,
  data: brandId,
});

export const followBrand = brandId => ({
  type: syncTypes.FOLLOW_BRAND,
  data: brandId,
});

export const handleAwardPoints = values => ({
  type: syncTypes.AWARDS_POINTS,
  data: values,
});
