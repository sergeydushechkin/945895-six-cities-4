import React from "react";

const withFormState = (Component) => {
  class WithFormState extends React.PureComponent {
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

    changeElementState(name, value) {
      this.setState({[name]: value});
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
