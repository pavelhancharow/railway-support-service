export const RailwayDB = {
  administrator: false,
  trains: {
    passenger: 0.1,
    express: 0.2,
    freight: 0.25,
  },
  directions: ['from', 'to'],
  routes: [
    {
      from: 'minsk',
      to: [
        {
          city: 'moscow',
          distance: 800,
        },
        {
          city: 'berlin',
          distance: 1100,
        },
      ],
    },
    {
      from: 'moscow',
      to: [
        {
          city: 'minsk',
          distance: 800,
        },
        {
          city: 'berlin',
          distance: 1900,
        },
      ],
    },
    {
      from: 'berlin',
      to: [
        {
          city: 'minsk',
          distance: 1100,
        },
        {
          city: 'moscow',
          distance: 1900,
        },
      ],
    },
  ],
};
