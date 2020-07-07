import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {SortTypes} from "../../const.js";

const SortTypeTexts = {
  [SortTypes.POPULAR]: `Popular`,
  [SortTypes.PRICE_LOW_HIGH]: `Price: low to high`,
  [SortTypes.PRICE_HIGH_LOW]: `Price: high to low`,
  [SortTypes.TOP_RATED_FIRST]: `Top rated first`,
};

class PlacesSorting extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {isOpen: false};

    this._handleMenuClick = this._handleMenuClick.bind(this);
    this._handleOptionClick = this._handleOptionClick.bind(this);
  }

  _handleMenuClick() {
    this.setState((state) => ({isOpen: !state.isOpen}));
  }

  _handleOptionClick(sortType) {
    const {onSortMenuItemClick} = this.props;
    this.setState({isOpen: false});
    onSortMenuItemClick(sortType);
  }

  _getMenuClass(type) {
    const {sortType} = this.props;
    return `places__option${type === sortType ? ` places__option--active` : ``}`;
  }

  render() {
    const {sortType} = this.props;
    const isOpen = this.state.isOpen;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={this._handleMenuClick} className="places__sorting-type" tabIndex="0">
          {SortTypeTexts[sortType]}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          <li onClick={() => this._handleOptionClick(SortTypes.POPULAR)} className={this._getMenuClass(SortTypes.POPULAR)} tabIndex="0">Popular</li>
          <li onClick={() => this._handleOptionClick(SortTypes.PRICE_LOW_HIGH)} className={this._getMenuClass(SortTypes.PRICE_LOW_HIGH)} tabIndex="0">Price: low to high</li>
          <li onClick={() => this._handleOptionClick(SortTypes.PRICE_HIGH_LOW)} className={this._getMenuClass(SortTypes.PRICE_HIGH_LOW)} tabIndex="0">Price: high to low</li>
          <li onClick={() => this._handleOptionClick(SortTypes.TOP_RATED_FIRST)} className={this._getMenuClass(SortTypes.TOP_RATED_FIRST)} tabIndex="0">Top rated first</li>
        </ul>
      </form>
    );
  }
}

PlacesSorting.propTypes = {
  sortType: PropTypes.oneOf([SortTypes.POPULAR, SortTypes.PRICE_LOW_HIGH, SortTypes.PRICE_HIGH_LOW, SortTypes.TOP_RATED_FIRST]).isRequired,
  onSortMenuItemClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    sortType: state.sortType
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSortMenuItemClick(sortType) {
    dispatch(ActionCreator.changeSort(sortType));
  }
});

export {PlacesSorting};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
