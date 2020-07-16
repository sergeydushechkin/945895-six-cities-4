import {extend} from "../../utils.js";
import offerAdapter from "../../adapters/offer.js";

const initialState = {
  offers: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
};

const ActionCreator = {
  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const loadedOffers = response.data.map((offer) => offerAdapter(offer));
        dispatch(ActionCreator.loadOffers(loadedOffers));
        return loadedOffers;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
