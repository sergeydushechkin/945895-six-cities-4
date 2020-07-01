import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {LocationsList} from "./locations-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should LocationsList item to be pressed and return proper value`, () => {
  const onLocationButtonClick = jest.fn();

  const locationList = shallow(
      <LocationsList
        locations={[`Amsterdam`, `Paris`, `London`]}
        city={`Paris`}
        onLocationButtonClick={onLocationButtonClick}
      />
  );

  const locationButton = locationList.find(`a.locations__item-link`).at(2);

  locationButton.props().onClick();

  expect(onLocationButtonClick.mock.calls.length).toBe(1);
  expect(onLocationButtonClick.mock.calls[0][1]).toBe(`London`);
});
