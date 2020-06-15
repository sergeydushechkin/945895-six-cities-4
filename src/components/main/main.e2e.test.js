import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header to be pressed`, () => {
  const onPlaceCardHeaderClick = jest.fn();

  const main = mount(
      <Main
        rentsCount = {312}
        cardsNames = {[`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`]}
        onPlaceCardHeaderClick = {onPlaceCardHeaderClick}
      />
  );

  const placeCardHeader = main.find(`.place-card__name a`).at(1);

  placeCardHeader.props().onClick();

  expect(onPlaceCardHeaderClick.mock.calls.length).toBe(1);
});
