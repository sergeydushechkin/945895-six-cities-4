import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

import offers from "../../mocks/tests_offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Card mouse input testing`, () => {
  it(`Should card header to be pressed, mouse enter registered, value is correct`, () => {
    const onActiveItemChange = jest.fn();
    const onPlaceCardHeaderClick = jest.fn();

    const card = shallow(
        <Card
          key={offers[0].id}
          offer={offers[0]}
          isNearPlaces={false}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick}
          onActiveItemChange={onActiveItemChange}
        />
    );

    const placeCardHeader = card.find(`.place-card__name a`);

    placeCardHeader.props().onClick();
    card.props().onMouseEnter();

    expect(onActiveItemChange.mock.calls.length).toBe(1);
    expect(onActiveItemChange.mock.calls[0][0]).toBe(offers[0].id);

    expect(onPlaceCardHeaderClick.mock.calls.length).toBe(1);
    expect(onPlaceCardHeaderClick.mock.calls[0][0]).toBe(offers[0].id);
  });

  it(`Should mouse leave registered, value is correct`, () => {
    const onActiveItemChange = jest.fn();
    const onPlaceCardHeaderClick = jest.fn();

    const card = shallow(
        <Card
          key={offers[0].id}
          offer={offers[0]}
          isNearPlaces={false}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick}
          onActiveItemChange={onActiveItemChange}
        />
    );

    const placeCardHeader = card.find(`.place-card__name a`);

    placeCardHeader.props().onClick();
    card.props().onMouseLeave();

    expect(onActiveItemChange.mock.calls.length).toBe(1);
    expect(onActiveItemChange.mock.calls[0][0]).toBe(-1);
  });
});
