import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LocationsList from "./locations-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should LocationsList item to be pressed and return proper value`, () => {
  const onCityChange = jest.fn();

  const locationList = shallow(
      <LocationsList
        locations={[`Amsterdam`, `Paris`, `London`]}
        city={`Paris`}
        onCityChange={onCityChange}
      />
  );

  const locationButton = locationList.find(`a.locations__item-link`).at(2);

  locationButton.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(onCityChange.mock.calls.length).toBe(1);
  expect(onCityChange.mock.calls[0][0]).toBe(`London`);
});
