import React from "react";
import renderer from "react-test-renderer";

import {PlacesSorting} from "./places-sorting.jsx";

it(`Render PlacesSorting`, () => {
  const tree = renderer
    .create(
        <PlacesSorting
          sortType={`popular`}
          onSortMenuItemClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
