const createAuthInfo = (data) => {
  return {
    avatarUrl: data.avatar_url,
    email: data.email,
    id: data.id,
    isPro: data.is_pro,
    name: data.name,
  };
};

export default createAuthInfo;
