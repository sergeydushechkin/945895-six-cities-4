import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation, ActionCreator} from "./data.js";

const offersRaw = [
  {
    bedrooms: 1,
    city: {name: `Dusseldorf`, location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}},
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    goods: [`Air conditioning`, `Towels`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Breakfast`],
    host: {id: 25, name: `Angelina`, [`is_pro`]: true, [`avatar_url`]: `img/avatar-angelina.jpg`},
    id: 1,
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
    [`is_favorite`]: false,
    [`is_premium`]: false,
    location: {latitude: 51.217402, longitude: 6.7693140000000005, zoom: 16},
    [`max_adults`]: 3,
    [`preview_image`]: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
    price: 282,
    rating: 5,
    title: `Wood and stone place`,
    type: `room`,
  }
];

const offersResult = [
  {
    bedrooms: 1,
    city: {name: `Dusseldorf`, coordinates: [51.225402, 6.776314], zoom: 13},
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    features: [`Air conditioning`, `Towels`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Breakfast`],
    guests: 3,
    host: {avatarUrl: `img/avatar-angelina.jpg`, id: 25, isPro: true, name: `Angelina`},
    id: 1,
    isFavorite: false,
    isPremium: false,
    location: {coordinates: [51.217402, 6.7693140000000005], zoom: 16},
    pictures: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
    previewImage: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
    price: 282,
    rating: 5,
    title: `Wood and stone place`,
    type: `room`,
  }
];

const commentsRaw = [
  {
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
  }
];

const commentsResult = [
  {
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
  }
];

const api = createAPI(() => {});

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: ``,
      offers: [],
      activeOfferId: -1,
      comments: [],
    });
  });

  it(`Reducer should update offers by load offers`, () => {
    expect(reducer({
      city: ``,
      offers: [],
      activeOfferId: -1,
      comments: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offersRaw,
    })).toEqual({
      city: ``,
      offers: offersRaw,
      activeOfferId: -1,
      comments: [],
    });
  });

  it(`Reducer should change city name by a given value`, () => {
    expect(reducer({
      city: ``,
      offers: [],
      activeOfferId: -1,
      comments: [],
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    })).toEqual({
      city: `Paris`,
      offers: [],
      activeOfferId: -1,
      comments: [],
    });
  });

  it(`Reducer should change active offer id by a given value`, () => {
    expect(reducer({
      city: ``,
      offers: [],
      activeOfferId: -1,
      comments: [],
    }, {
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: 2,
    })).toEqual({
      city: ``,
      offers: [],
      activeOfferId: 2,
      comments: [],
    });
  });

  it(`Reducer should change comments by a given value`, () => {
    expect(reducer({
      city: ``,
      offers: [],
      activeOfferId: -1,
      comments: [],
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: commentsRaw,
    })).toEqual({
      city: ``,
      offers: [],
      activeOfferId: -1,
      comments: commentsRaw,
    });
  });

  it(`Reducer should change comments by a given value`, () => {
    expect(reducer({
      city: ``,
      offers: offersResult,
      activeOfferId: -1,
      comments: [],
    }, {
      type: ActionType.UPDATE_FAVORITE,
      payload: offersResult[0],
    })).toEqual({
      city: ``,
      offers: offersResult,
      activeOfferId: -1,
      comments: [],
    });
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    });
  });

  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.loadOffers(offersResult)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offersResult,
    });
  });

  it(`Action creator for changing offer id returns correct action`, () => {
    expect(ActionCreator.changeActiveOfferId(3)).toEqual({
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: 3,
    });
  });

  it(`Action creator for changing offer id returns correct action`, () => {
    expect(ActionCreator.changeActiveOfferId(commentsResult)).toEqual({
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: commentsResult,
    });
  });

  it(`Action creator for changing offer id returns correct action`, () => {
    expect(ActionCreator.updateFavorite(offersResult[0])).toEqual({
      type: ActionType.UPDATE_FAVORITE,
      payload: offersResult[0],
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [...offersRaw]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [...offersResult],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_CITY,
          payload: `Dusseldorf`,
        });
      });
  });

  it(`Should make a correct API call to /comments/1`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postComment = Operation.postComment(1, {comment: `test`, rating: `5`});

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [...commentsRaw]);

    return postComment(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [...commentsResult],
        });
      });
  });

  it(`Should make a correct API call to /comments/1`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postFavorite = Operation.postFavorite(1, false);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, offersRaw[0]);

    return postFavorite(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITE,
          payload: offersResult[0],
        });
      });
  });
});
