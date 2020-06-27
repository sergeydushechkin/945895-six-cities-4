import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

import offers from "../../mocks/tests_offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card header to be pressed`, () => {
  const onPlaceCardHeaderClick = jest.fn();

  const card = shallow(
      <Card
        key={offers[0].id}
        offer={offers[0]}
        isNearPlaces={false}
        onPlaceCardHeaderClick={onPlaceCardHeaderClick}
      />
  );

  const placeCardHeader = card.find(`.place-card__name a`);

  placeCardHeader.props().onClick();

  expect(onPlaceCardHeaderClick.mock.calls.length).toBe(1);
  expect(onPlaceCardHeaderClick.mock.calls[0][0]).toBe(offers[0].id);
});
