import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should active item change`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().activeItemId).toEqual(-1);

  wrapper.props().onActiveItemChange(3);
  expect(wrapper.props().activeItemId).toEqual(3);

  wrapper.props().onActiveItemChange(5);
  expect(wrapper.props().activeItemId).toEqual(5);
});
