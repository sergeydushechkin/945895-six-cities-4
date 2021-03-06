import * as React from "react";
import {Subtract} from "utility-types";

interface FormStates {
  rating: string;
  review: string;
  isFormDisabled: boolean;
  errorText: string;
}

type State = FormStates;

interface InjectedProps {
  formStates: FormStates;
  resetFromState: () => void;
  disableForm: () => void;
  enableForm: () => void;
  changeElementState: (name: string, value: string) => void;
}

const withFormState = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithFormState extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``,
        isFormDisabled: false,
        errorText: ``,
      };

      this.resetFromState = this.resetFromState.bind(this);
      this.disableForm = this.disableForm.bind(this);
      this.enableForm = this.enableForm.bind(this);
      this.changeElementState = this.changeElementState.bind(this);
    }

    resetFromState() {
      this.setState({
        rating: ``,
        review: ``,
        errorText: ``,
      });
    }

    disableForm() {
      this.setState({isFormDisabled: true});
    }

    enableForm() {
      this.setState({isFormDisabled: false});
    }

    changeElementState(name: string, value: string | number | boolean) {
      this.setState((prevState) => ({...prevState, [name]: value}));
    }

    render() {
      const {rating, review, isFormDisabled, errorText} = this.state;

      return (
        <Component
          {...this.props}
          formStates={{rating, review, isFormDisabled, errorText}}
          resetFromState={this.resetFromState}
          disableForm={this.disableForm}
          enableForm={this.enableForm}
          changeElementState={this.changeElementState}
        />
      );
    }
  }

  return WithFormState;
};

export default withFormState;
