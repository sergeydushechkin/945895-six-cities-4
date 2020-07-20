const createCommentsGet = (data) => {
  return {
    comment: data.comment,
    date: data.date,
    id: data.id,
    rating: data.rating,
    user: {
      avatarUrl: data.avatar_url,
      id: data.id,
      isPro: data.is_pro,
      name: data.name,
    },
  };
};

export default createCommentsGet;
