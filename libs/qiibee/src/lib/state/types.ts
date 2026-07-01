// Domain model for the qiibee loyalty-points feature.
// The `reedeem`/`reedeemed` misspellings are intentional — the reducer, the
// dummy data, and the connected components all rely on them.

export type UserType = 'customer' | 'brand';

export interface BrandFollowing {
  brand_id: string;
  reedeem_points_provided: number;
}

export interface Customer {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  reedeemed_points: number;
  brands_following: BrandFollowing[];
}

export interface Brand {
  id: string;
  title: string;
  description: string | null;
  created_at: string | null;
  total_loyalty_points: number;
  icon: string;
  username?: string;
  password?: string;
  followers?: string[];
  // Added when a brand registers via SIGN_UP:
  reedeemed_points?: number;
  brands_following?: BrandFollowing[];
}

export type CurrentUser = Customer | Brand;

export interface SignInPayload {
  type: UserType;
  currentUser: CurrentUser;
}

// Registration form values — the user_type discriminator plus dynamic fields.
export interface SignUpValues {
  user_type: UserType;
  firstname?: string;
  lastname?: string;
  username?: string;
  password?: string;
  title?: string;
  [key: string]: unknown;
}
