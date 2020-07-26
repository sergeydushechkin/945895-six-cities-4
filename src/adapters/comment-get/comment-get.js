const createCommentsGet = (data) => {
  return {
    comment: data.comment,
    date: data.date,
    id: data.id,
    rating: data.rating,
    user: {
      avatarUrl: data.user.avatar_url,
      id: data.user.id,
      isPro: data.user.is_pro,
      name: data.user.name,
    },
  };
};

export default createCommentsGet;
