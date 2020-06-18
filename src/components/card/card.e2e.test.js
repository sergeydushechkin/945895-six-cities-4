import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

import offers from "../../mocks/tests_offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card header to be pressed`, () => {
  const onPlaceCardMouseEnter = jest.fn();

  const card = shallow(
      <Card
        offer={offers[0]}
        onPlaceCardMouseEnter={onPlaceCardMouseEnter}
      />
  );

  card.props().onMouseEnter();

  expect(onPlaceCardMouseEnter.mock.calls[0][0]).toBe(offers[0].id);
});
