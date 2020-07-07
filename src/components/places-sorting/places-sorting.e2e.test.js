import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlacesSorting} from "./places-sorting.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test PlacesSorting component items clicks and return value`, () => {
  it(`Should first item to be pressed and return correct value`, () => {
    const onSortMenuItemClick = jest.fn();

    const placesSorting = shallow(
        <PlacesSorting
          onSortMenuItemClick={onSortMenuItemClick}
          sortType={`popular`}
          onMenuClose={() => {}}
          onMenuClick={() => {}}
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
          sortType={`popular`}
          onMenuClose={() => {}}
          onMenuClick={() => {}}
          isOpen={false}
        />
    );

    const placesSortingItem = placesSorting.find(`.places__option`).at(2);
    placesSortingItem.simulate(`click`);

    expect(onSortMenuItemClick).toHaveBeenCalledTimes(1);
    expect(onSortMenuItemClick).toHaveBeenCalledWith(`priceHighLow`);
  });
});
