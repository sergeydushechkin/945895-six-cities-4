import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {SortTypes} from "../../const.js";

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

  _handleOptionClick(evt) {
    evt.preventDefault();
    const {onSortMenuItemClick} = this.props;
    const sortType = evt.target.dataset.sortType;

    if (sortType) {
      this.setState({isOpen: false});
      onSortMenuItemClick(sortType);
    }
  }

  _getMenuClass(type) {
    const {sortType} = this.props;
    return `places__option${type === sortType ? ` places__option--active` : ``}`;
  }

  render() {
    const isOpen = this.state.isOpen;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={this._handleMenuClick} className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul onClick={(evt) => this._handleOptionClick(evt)} className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          <li data-sort-type={SortTypes.POPULAR} className={this._getMenuClass(SortTypes.POPULAR)} tabIndex="0">Popular</li>
          <li data-sort-type={SortTypes.PRICE_LOW_HIGH} className={this._getMenuClass(SortTypes.PRICE_LOW_HIGH)} tabIndex="0">Price: low to high</li>
          <li data-sort-type={SortTypes.PRICE_HIGH_LOW} className={this._getMenuClass(SortTypes.PRICE_HIGH_LOW)} tabIndex="0">Price: high to low</li>
          <li data-sort-type={SortTypes.TOP_RATED_FIRST} className={this._getMenuClass(SortTypes.TOP_RATED_FIRST)} tabIndex="0">Top rated first</li>
        </ul>
        {/* <!--
        <select class="places__sorting-type" id="places-sorting">
          <option class="places__option" value="popular" selected="">Popular</option>
          <option class="places__option" value="to-high">Price: low to high</option>
          <option class="places__option" value="to-low">Price: high to low</option>
          <option class="places__option" value="top-rated">Top rated first</option>
        </select>
        --> */}
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
