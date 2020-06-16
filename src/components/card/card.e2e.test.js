import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card header to be pressed`, () => {
  const onPlaceCardHeaderClick = jest.fn();

  const card = shallow(
      <Card
        cardName={`Beautiful & luxurious apartment at great location`}
        onPlaceCardHeaderClick={onPlaceCardHeaderClick}
      />
  );

  const placeCardHeader = card.find(`.place-card__name a`);

  placeCardHeader.props().onClick();

  expect(onPlaceCardHeaderClick.mock.calls.length).toBe(1);
});
