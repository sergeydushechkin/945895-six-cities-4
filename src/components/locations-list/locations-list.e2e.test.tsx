import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {LocationsList} from "./locations-list";
import {noop} from "../../utils";

configure({
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
    preventDefault: noop
  });

  expect(onCityChange.mock.calls.length).toBe(1);
  expect(onCityChange.mock.calls[0][0]).toBe(`London`);
});
