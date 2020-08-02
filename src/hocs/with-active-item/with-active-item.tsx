import React from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemId: -1,
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
