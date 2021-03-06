import * as React from "react";
import * as renderer from "react-test-renderer";
import PlacesEmpty from "./places-empty";

it(`Render PlacesEmpty`, () => {
  const tree = renderer
    .create(
        <PlacesEmpty city={`Dusseldorf`}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
