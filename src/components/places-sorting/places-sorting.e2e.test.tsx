import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import {noop} from "../../utils";
import {SortTypes} from "../../types";
import {PlacesSorting} from "./places-sorting";

configure({
  adapter: new Adapter(),
});

describe(`Test PlacesSorting component items clicks and return value`, () => {
  it(`Should first item to be pressed and return correct value`, () => {
    const onSortMenuItemClick = jest.fn();

    const placesSorting = shallow(
        <PlacesSorting
          onSortMenuItemClick={onSortMenuItemClick}
          sortType={SortTypes.POPULAR}
          onMenuClose={noop}
          onMenuClick={noop}
          isOpen={false}
        />
    );

    const placesSortingItem = placesSorting.find(`.places__option`).at(0);

    placesSortingItem.simulate(`click`);

    expect(onSortMenuItemClick).toHaveBeenCalledTimes(1);
    expect(onSortMenuItemClick).toHaveBeenCalledWith(`popular`);
  });

  it(`Should third item to be pressed and return correct value`, () => {
    const onSortMenuItemClick = jest.fn();

    const placesSorting = shallow(
        <PlacesSorting
          onSortMenuItemClick={onSortMenuItemClick}
          sortType={SortTypes.POPULAR}
          onMenuClose={noop}
          onMenuClick={noop}
          isOpen={false}
        />
    );

    const placesSortingItem = placesSorting.find(`.places__option`).at(2);
    placesSortingItem.simulate(`click`);

    expect(onSortMenuItemClick).toHaveBeenCalledTimes(1);
    expect(onSortMenuItemClick).toHaveBeenCalledWith(`priceHighLow`);
  });
});
