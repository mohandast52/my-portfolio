/**
 * USERS
 */
export const CUSTOMERS = [
  {
    firstName: 'Mohan',
    LastName: 'Das',
    username: 'abcd@gmail.com',
    password: '1234',
    reedeemed_points: 0,
    brands_following: [
      {
        brand_id: 'brand-id-1',
        reedeem_points_provided: 0,
      },
    ],
  },
];

/**
 * BRANDS
 */
export const BRANDS = [
  {
    id: 'brand-id-1',
    title: 'Reflection bot',
    description:
      'This brand will analyze your personality, based on the way you chat ',
    created_at: '29/05/2020',
    max_loyalty_points: 100,
    icon: 'https://i.ibb.co/0nJsFH3/1.png',
    tags: ['Bot', 'AI'],
  },
  {
    id: 'brand-id-2',
    title: 'Aesthetic',
    description:
      'Brand which can help you redesign your room right from placements to product allocation from amazon, Pepperfry, etc',
    created_at: '29/05/2020',
    max_loyalty_points: 500,
    icon: 'https://i.ibb.co/zhjNFTv/2.png',
    tags: ['App', 'AI', 'Innovation'],
  },
];
