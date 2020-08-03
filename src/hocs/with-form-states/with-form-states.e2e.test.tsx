import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withFormStates from "./with-form-states.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withFormStates(MockComponent);

it(`Should active item change`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().formStates).toEqual({rating: ``, review: ``, isFormDisabled: false, errorText: ``});

  wrapper.props().disableForm();
  expect(wrapper.props().formStates.isFormDisabled).toEqual(true);

  wrapper.props().enableForm();
  expect(wrapper.props().formStates.isFormDisabled).toEqual(false);

  wrapper.props().changeElementState(`errorText`, `test`);
  expect(wrapper.props().formStates.errorText).toEqual(`test`);
});
