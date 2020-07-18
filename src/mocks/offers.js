const TYPES = {
  apartment: `apartment`,
  room: `room`,
  house: `house`,
  hotel: `hotel`
};

export default [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    title: `Beautiful & luxurious apartment at great location`,
    pictures: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 120,
    type: TYPES.apartment,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    bedrooms: 2,
    descriptions: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    guests: 3,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    hostId: 1,
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Very good`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    title: `Wood and stone place`,
    pictures: [`img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 80,
    type: TYPES.room,
    rating: 4.2,
    isPremium: false,
    isFavorite: true,
    bedrooms: 1,
    descriptions: [`Large wood and stone place in Amsterdam`],
    guests: 2,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`],
    hostId: 3,
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Very good`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
  {
    id: 3,
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    title: `Canal View Prinsengracht`,
    pictures: [`img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 132,
    type: TYPES.apartment,
    rating: 4,
    isPremium: false,
    isFavorite: false,
    bedrooms: 2,
    descriptions: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`],
    guests: 1,
    features: [`Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    hostId: 4,
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Very good`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
  {
    id: 4,
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    title: `Nice, cozy, warm big bed apartment`,
    pictures: [`img/apartment-03.jpg`, `img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    price: 180,
    type: TYPES.apartment,
    rating: 5,
    isPremium: true,
    isFavorite: false,
    bedrooms: 4,
    descriptions: [
      `The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera.`
    ],
    guests: 3,
    features: [`Wi-Fi`, `Washing machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    hostId: 1,
    coordinates: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Very good`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
  {
    id: 5,
    city: {
      name: `Paris`,
      coordinates: [48.855931, 2.350962]
    },
    title: `Not bad!`,
    pictures: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    price: 999,
    type: TYPES.hotel,
    rating: 3.2,
    isPremium: false,
    isFavorite: false,
    bedrooms: 1,
    descriptions: [
      `An independent House.`
    ],
    guests: 1,
    features: [`Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    hostId: 4,
    coordinates: [48.854082, 2.350379],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Very good`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
  {
    id: 6,
    city: {
      name: `Paris`,
      coordinates: [48.855931, 2.350962]
    },
    title: `So good!`,
    pictures: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    price: 156,
    type: TYPES.apartment,
    rating: 3.2,
    isPremium: true,
    isFavorite: false,
    bedrooms: 1,
    descriptions: [
      `An independent House.`
    ],
    guests: 1,
    features: [`Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    hostId: 4,
    coordinates: [48.856906, 2.353950],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Very good`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
  {
    id: 7,
    city: {
      name: `Hamburg`,
      coordinates: [53.547699, 9.996888]
    },
    title: `Not bad!`,
    pictures: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    price: 50,
    type: TYPES.apartment,
    rating: 3.8,
    isPremium: false,
    isFavorite: false,
    bedrooms: 1,
    descriptions: [
      `An independent House.`
    ],
    guests: 1,
    features: [`Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    hostId: 3,
    coordinates: [53.548738, 9.996824],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.0,
        date: `2020-04-24`
      }
    ]
  },
];
