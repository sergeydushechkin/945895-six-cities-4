import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Card} from "./card.jsx";

import offers from "../../mocks/tests-offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Card mouse input testing`, () => {
  const onActiveItemChange = jest.fn();
  const onChangeActiveOfferId = jest.fn();
  const onFavoritesToggle = jest.fn();

  const card = shallow(
      <Card
        key={offers[0].id}
        offer={offers[0]}
        isNearPlaces={false}
        onChangeActiveOfferId={onChangeActiveOfferId}
        onActiveItemChange={onActiveItemChange}
        onFavoritesToggle={onFavoritesToggle}
      />
  );

  const placeCardHeader = card.find(`.place-card__name a`);
  const placeCardBookmark = card.find(`.place-card__bookmark-button`);

  it(`Should card header to be pressed, value is correct`, () => {
    placeCardHeader.props().onClick();
    expect(onChangeActiveOfferId.mock.calls.length).toBe(1);
    expect(onChangeActiveOfferId.mock.calls[0][0]).toBe(offers[0].id);
  });

  it(`Should bookmark button registered, value is correct`, () => {
    placeCardBookmark.props().onClick();
    expect(onFavoritesToggle.mock.calls.length).toBe(1);
    expect(onFavoritesToggle.mock.calls[0][0]).toBe(offers[0].id, !offers[0].isFavorite);
  });

  it(`Should mouse enter registered, value is correct`, () => {
    card.props().onMouseEnter();
    expect(onActiveItemChange.mock.calls.length).toBe(1);
    expect(onActiveItemChange.mock.calls[0][0]).toBe(offers[0].id);
  });

  it(`Should mouse leave registered, value is correct`, () => {
    card.props().onMouseLeave();
    expect(onActiveItemChange.mock.calls.length).toBe(2);
    expect(onActiveItemChange.mock.calls[1][0]).toBe(-1);
  });
});
