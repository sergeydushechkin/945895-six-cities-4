import * as React from "react";
import {Subtract} from "utility-types";

interface InjectedProps {
  onMenuClick: () => void,
  onMenuClose: () => void,
}

interface State {
  isOpen: boolean,
};

const withPlacesSorting = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithPlacesSorting extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {isOpen: false};

      this.onMenuClick = this.onMenuClick.bind(this);
      this.onMenuClose = this.onMenuClose.bind(this);
    }

    onMenuClick() {
      this.setState((state) => ({isOpen: !state.isOpen}));
    }

    onMenuClose() {
      this.setState({isOpen: false});
    }

    render() {
      return (
        <Component
          {...this.props}
          onMenuClick={this.onMenuClick}
          onMenuClose={this.onMenuClose}
          isOpen={this.state.isOpen}
        />
      );
    }
  }

  return WithPlacesSorting;
};

export default withPlacesSorting;
