import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Card} from "./card.jsx";

import offers from "../../mocks/tests_offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card header to be pressed, mouse moves registered`, () => {
  const onPlaceCardMouseEnter = jest.fn();
  const onPlaceCardMouseLeave = jest.fn();
  const onPlaceCardHeaderClick = jest.fn();

  const card = shallow(
      <Card
        key={offers[0].id}
        offer={offers[0]}
        isNearPlaces={false}
        onPlaceCardHeaderClick={onPlaceCardHeaderClick}
        onPlaceCardMouseEnter={onPlaceCardMouseEnter}
        onPlaceCardMouseLeave={onPlaceCardMouseLeave}
      />
  );

  const placeCardHeader = card.find(`.place-card__name a`);

  placeCardHeader.props().onClick();
  card.props().onMouseEnter();
  card.props().onMouseLeave();

  expect(onPlaceCardMouseEnter.mock.calls.length).toBe(1);
  expect(onPlaceCardMouseEnter.mock.calls[0][0]).toBe(offers[0].id);

  expect(onPlaceCardMouseLeave.mock.calls.length).toBe(1);

  expect(onPlaceCardHeaderClick.mock.calls.length).toBe(1);
  expect(onPlaceCardHeaderClick.mock.calls[0][0]).toBe(offers[0].id);
});
