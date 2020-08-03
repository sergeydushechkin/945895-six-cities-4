import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  activeItemId: number;
}

interface InjectedProps {
  onActiveItemChange: (id: number) => void;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItemId: null,
      };

      this.onActiveItemChange = this.onActiveItemChange.bind(this);
    }

    onActiveItemChange(id) {
      this.setState({activeItemId: id});
    }

    render() {
      const activeItemId = this.state.activeItemId;

      return (
        <Component
          {...this.props}
          activeItemId={activeItemId}
          onActiveItemChange={this.onActiveItemChange}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
