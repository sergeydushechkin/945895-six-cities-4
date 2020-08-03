import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlacesSorting from "./with-places-sorting.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withPlacesSorting(MockComponent);

it(`Should menu state init with correct value, menu click open it and correct menu close`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().isOpen).toEqual(false);

  wrapper.props().onMenuClick();
  expect(wrapper.props().isOpen).toEqual(true);

  wrapper.props().onMenuClose();
  expect(wrapper.props().isOpen).toEqual(false);
});
