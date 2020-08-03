import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {CardType} from "../../types";
import {Card} from "./card";

import offers from "../../mocks/tests-offers";

configure({
  adapter: new Adapter(),
});

describe(`Card mouse input testing`, () => {
  const onActiveItemChange = jest.fn();
  const onFavoritesToggle = jest.fn();

  const card = shallow(
      <Card
        key={offers[0].id}
        offer={offers[0]}
        onActiveItemChange={onActiveItemChange}
        onFavoritesToggle={onFavoritesToggle}
        cardType={CardType.MAIN}
      />
  );

  const placeCardBookmark = card.find(`.place-card__bookmark-button`);

  it(`Should bookmark button registered, value is correct`, () => {
    placeCardBookmark.props().onClick();
    expect(onFavoritesToggle.mock.calls.length).toBe(1);
    expect(onFavoritesToggle.mock.calls[0][0]).toBe(offers[0].id);
    expect(onFavoritesToggle.mock.calls[0][1]).toBe(!offers[0].isFavorite);
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
