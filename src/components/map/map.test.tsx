import * as React from "react";
import * as renderer from "react-test-renderer";
import Main from "./map";

import offers from "../../mocks/tests-offers";

it(`Render Map`, () => {
  const tree = renderer
    .create(
        <Main
          city={[52.38333, 4.9]}
          offers={offers}
          activeOfferId={1}
          className={`cities__map map`}
          zoom={10}
        />,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
