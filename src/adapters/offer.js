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
    description: data.description,
    guests: data.max_adults,
    features: data.goods,
    host: {
      avatarUrl: data.host.avatar_url,
      id: data.host.id,
      isPro: data.host.is_pro,
      name: data.host.name
    },
    location: {
      coordinates: [data.location.latitude, data.location.longitude],
      zoom: data.location.zoom,
    },
  };
};

export default createOffer;
