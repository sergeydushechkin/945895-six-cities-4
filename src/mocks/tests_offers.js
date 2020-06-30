const TYPES = {
  apartment: `Apartment`,
  room: `Private room`,
  house: `House`,
  hotel: `Hotel`
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
  }
];
