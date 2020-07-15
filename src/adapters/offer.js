const createOffer = (data) => {
  return {
    id: data.id,
    city: {
      name: data.city.name,
      coordinates: [data.city.location.latitude, data.city.location.longitude],
      zoom: data.city.location.zoom,
    },
    title: data.title,
    previewImage: data.preview_image,
    pictures: data.images,
    price: data.price,
    type: data.type,
    rating: data.rating,
    isPremium: data.is_premium,
    isFavorite: data.is_favorite,
    bedrooms: data.bedrooms,
    description: data.description, // !!!!
    guests: data.max_adults,
    features: data.goods,
    hostId: 1, // !!!!
    host: { // !!!
      avatarUrl: data.host.avatar_url,
      id: data.host.id,
      isPro: data.host.is_pro,
      name: data.host.name
    },
    coordinates: [52.3909553943508, 4.85309666406198], // !!!
    location: {
      coordinates: [data.location.latitude, data.location.longitude],
      zoom: data.location.zoom,
    },
    // reviews: [
    //   {
    //     id: 1,
    //     userId: 2,
    //     text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    //     rating: 4.3,
    //     date: `2019-04-24`
    //   },
    //   {
    //     id: 2,
    //     userId: 3,
    //     text: `Very good`,
    //     rating: 3.2,
    //     date: `2019-04-25`
    //   }
    // ]
  };
};

export default createOffer;
