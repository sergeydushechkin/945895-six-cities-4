import * as React from "react";
import * as renderer from "react-test-renderer";

import {SortTypes} from "../../types";
import {noop} from "../../utils";
import {PlacesSorting} from "./places-sorting";

it(`Render PlacesSorting`, () => {
  const tree = renderer
    .create(
        <PlacesSorting
          sortType={SortTypes.POPULAR}
          onSortMenuItemClick={noop}
          onMenuClose={noop}
          onMenuClick={noop}
          isOpen={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
