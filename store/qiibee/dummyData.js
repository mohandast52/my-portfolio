/**
 * USERS
 */
export const CUSTOMERS = [
  {
    id: 'customer-id-1',
    firstname: 'Mohan',
    lastname: 'Das',
    username: 'abcd@gmail.com',
    password: '1234',
    reedeemed_points: 0,
    brands_following: [
      {
        brand_id: 'brand-id-1',
        reedeem_points_provided: 20,
      },
      {
        brand_id: 'brand-id-2',
        reedeem_points_provided: 40,
      },
    ],
  },
  {
    id: 'customer-id-2',
    firstname: 'Tony',
    lastname: 'Stark',
    username: 'tonystark@gmail.com',
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
    total_loyalty_points: 100,
    icon: 'https://i.ibb.co/0nJsFH3/1.png',
    username: 'brandone@gmail.com',
    password: '1234',
    followers: ['abcd@gmail.com', 'tonystark@gmail.com'],
  },
  {
    id: 'brand-id-2',
    title: 'Aesthetic',
    description:
      'Brand which can help you redesign your room right from placements to product allocation from amazon, Pepperfry, etc',
    created_at: '29/05/2020',
    total_loyalty_points: 500,
    icon: 'https://i.ibb.co/zhjNFTv/2.png',
    // tags: ['App', 'AI', 'Innovation'],
  },
  {
    id: 'brand-id-3',
    title: 'Oh so EASY',
    description: 'Voice Recording in slack, no more long writeups needed.',
    created_at: '29/05/2020',
    total_loyalty_points: 0,
    icon: 'https://i.ibb.co/VjFrY8C/3.png',
    // tags: ['AI', 'Bot'],
  },
  {
    id: 'brand-id-4',
    title: 'Fakogenic',
    description:
      'App that can detect fake news on WhatsApp and prevent future circulation. Need I say more',
    created_at: '29/05/2020',
    total_loyalty_points: 0,
    icon: 'https://i.ibb.co/F8RZXJ5/4.png',
    // tags: ['Innovation', 'App', 'AI'],
  },
  {
    id: 'brand-id-5',
    title: 'Jockify',
    description:
      'Test your jokes with all other comedians helping you twist them into that perfect joke. ',
    created_at: '29/05/2020',
    total_loyalty_points: 0,
    icon: 'https://i.ibb.co/YX8XLgJ/10.png',
    // tags: ['Innovation'],
  },
  {
    id: 'brand-id-6',
    title: 'Gambol',
    description:
      "App for investing in new ideas, the returns could be free subscription, etc. C'mon, Let the ideas fly.",
    icon: 'https://i.ibb.co/gwt9fHk/6.png',
    created_at: '29/05/2020',
    total_loyalty_points: 0,
    // tags: ['Innovation'],
  },
];
