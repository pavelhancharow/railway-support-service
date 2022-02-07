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
          distance: 713,
        },
        {
          city: 'berlin',
          distance: 1108,
        },
      ],
    },
    {
      from: 'moscow',
      to: [
        {
          city: 'minsk',
          distance: 713,
        },
        {
          city: 'berlin',
          distance: 1817,
        },
      ],
    },
    {
      from: 'berlin',
      to: [
        {
          city: 'minsk',
          distance: 1108,
        },
        {
          city: 'moscow',
          distance: 1817,
        },
      ],
    },
  ],
};
