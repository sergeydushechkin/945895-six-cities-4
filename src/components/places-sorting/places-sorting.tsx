import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data.js";
import {SortTypes, SortTypeTexts} from "../../const.js";
import {getSortType} from "../../reducer/data/selectors.js";

class PlacesSorting extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOptionClick(sortType) {
    const {onSortMenuItemClick, onMenuClose} = this.props;
    onMenuClose();
    onSortMenuItemClick(sortType);
  }

  _getMenuClass(type) {
    const {sortType} = this.props;
    return `places__option${type === sortType ? ` places__option--active` : ``}`;
  }

  render() {
    const {sortType, onMenuClick, isOpen} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={onMenuClick} className="places__sorting-type" tabIndex="0">
          {SortTypeTexts[sortType]}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          <li onClick={() => this.handleOptionClick(SortTypes.POPULAR)} className={this._getMenuClass(SortTypes.POPULAR)} tabIndex="0">Popular</li>
          <li onClick={() => this.handleOptionClick(SortTypes.PRICE_LOW_HIGH)} className={this._getMenuClass(SortTypes.PRICE_LOW_HIGH)} tabIndex="0">Price: low to high</li>
          <li onClick={() => this.handleOptionClick(SortTypes.PRICE_HIGH_LOW)} className={this._getMenuClass(SortTypes.PRICE_HIGH_LOW)} tabIndex="0">Price: high to low</li>
          <li onClick={() => this.handleOptionClick(SortTypes.TOP_RATED_FIRST)} className={this._getMenuClass(SortTypes.TOP_RATED_FIRST)} tabIndex="0">Top rated first</li>
        </ul>
      </form>
    );
  }
}

PlacesSorting.propTypes = {
  sortType: PropTypes.oneOf([SortTypes.POPULAR, SortTypes.PRICE_LOW_HIGH, SortTypes.PRICE_HIGH_LOW, SortTypes.TOP_RATED_FIRST]).isRequired,
  onSortMenuItemClick: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onMenuClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    sortType: getSortType(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSortMenuItemClick(sortType) {
    dispatch(ActionCreator.changeSort(sortType));
  }
});

export {PlacesSorting};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
