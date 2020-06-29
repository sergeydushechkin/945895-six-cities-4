const getRatingWidth = (rating) => {
  return Math.round(rating) * 20;
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {getRatingWidth, extend};
