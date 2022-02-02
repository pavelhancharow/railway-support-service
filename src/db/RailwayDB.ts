export const RailwayDB = {
  trains: ['passenger', 'express', 'freight'],
  directions: ['from', 'to'],
  routes: [
    {
      from: 'minsk',
      to: [
        {
          city: 'moscow',
          distance: 800,
          train: [
            {
              type: 'passanger',
              price: 80,
            },
            {
              type: 'express',
              price: 160,
            },
            {
              type: 'freight',
              price: 200,
            },
          ],
        },
        {
          city: 'berlin',
          distance: 1100,
          train: [
            {
              type: 'passanger',
              price: 110,
            },
            {
              type: 'express',
              price: 220,
            },
            {
              type: 'freight',
              price: 260,
            },
          ],
        },
      ],
    },
    {
      from: 'moscow',
      to: [
        {
          city: 'minsk',
          distance: 800,
          train: [
            {
              type: 'passanger',
              price: 80,
            },
            {
              type: 'express',
              price: 160,
            },
            {
              type: 'freight',
              price: 200,
            },
          ],
        },
        {
          city: 'berlin',
          distance: 1900,
          train: [
            {
              type: 'passanger',
              price: 190,
            },
            {
              type: 'express',
              price: 280,
            },
            {
              type: 'freight',
              price: 320,
            },
          ],
        },
      ],
    },
    {
      from: 'berlin',
      to: [
        {
          city: 'minsk',
          distance: 1100,
          train: [
            {
              type: 'passanger',
              price: 110,
            },
            {
              type: 'express',
              price: 220,
            },
            {
              type: 'freight',
              price: 260,
            },
          ],
        },
        {
          city: 'moscow',
          distance: 1900,
          train: [
            {
              type: 'passanger',
              price: 190,
            },
            {
              type: 'express',
              price: 280,
            },
            {
              type: 'freight',
              price: 320,
            },
          ],
        },
      ],
    },
  ],
};
