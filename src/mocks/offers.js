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
    picture: `img/apartment-01.jpg`,
    price: 120,
    type: TYPES.apartment,
    rating: 4.8,
    isPremium: true,
    isFavorite: false
  },
  {
    id: 2,
    city: `Amsterdam`,
    title: `Wood and stone place`,
    picture: `img/room.jpg`,
    price: 80,
    type: TYPES.room,
    rating: 4.2,
    isPremium: false,
    isFavorite: true
  },
  {
    id: 3,
    city: `Amsterdam`,
    title: `Canal View Prinsengracht`,
    picture: `img/apartment-02.jpg`,
    price: 132,
    type: TYPES.apartment,
    rating: 4,
    isPremium: false,
    isFavorite: false
  },
  {
    id: 4,
    city: `Amsterdam`,
    title: `Nice, cozy, warm big bed apartment`,
    picture: `img/apartment-03.jpg`,
    price: 180,
    type: TYPES.apartment,
    rating: 5,
    isPremium: true,
    isFavorite: false
  },
];
