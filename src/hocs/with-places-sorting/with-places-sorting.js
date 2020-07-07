import React from "react";

const withPlacesSorting = (Component) => {
  class WithPlacesSorting extends React.PureComponent {
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
