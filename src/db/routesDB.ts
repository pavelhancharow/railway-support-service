export const routesDB = [
  {
    from: 'minsk',
    to: [
      {
        city: 'moscow',
        distance: 800,
        price: 80,
      },
      {
        city: 'berlin',
        distance: 1100,
        price: 110,
      },
    ],
  },
  {
    from: 'moscow',
    to: [
      {
        city: 'minsk',
        distance: 800,
        price: 40,
      },
      {
        city: 'berlin',
        distance: 1900,
        price: 190,
      },
    ],
  },
  {
    from: 'berlin',
    to: [
      {
        city: 'minsk',
        distance: 1100,
        price: 110,
      },
      {
        city: 'moscow',
        distance: 1900,
        price: 190,
      },
    ],
  },
];
