const TYPES = {
  apartment: `Apartment`,
  room: `Private room`,
  house: `House`,
  hotel: `Hotel`
};

export default [
  {
    id: 1,
    city: `Amsterdam`,
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
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    city: `Amsterdam`,
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
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    city: `Amsterdam`,
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
    coordinates: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 4,
    city: `Amsterdam`,
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
    coordinates: [52.3809553943508, 4.939309666406198]
  },
];
