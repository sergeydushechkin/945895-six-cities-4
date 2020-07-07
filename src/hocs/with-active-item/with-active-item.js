import React from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemId: this.props.initActiveItemId
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

  WithActiveItem.propTypes = {
    initActiveItemId: PropTypes.any.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
