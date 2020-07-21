import createCommentsGet from "./comment-get.js";

const commentsRaw = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    [`avatar_url`]: `img/1.png`,
    id: 4,
    [`is_pro`]: false,
    name: `Max`
  }
};

const commentsResult = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatarUrl: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`
  }
};

it(`Should comments adapter work correct`, () => {
  expect(createCommentsGet(commentsRaw)).toEqual(commentsResult);
});
