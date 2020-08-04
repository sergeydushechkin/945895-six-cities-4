import * as React from "react";
import * as renderer from "react-test-renderer";
import {LocationsList} from "./locations-list";
import {noop} from "../../utils";

it(`Render LocationsList`, () => {
  const tree = renderer
    .create(
        <LocationsList
          locations={[`Amsterdam`, `Paris`, `London`]}
          city={`Paris`}
          onCityChange={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

