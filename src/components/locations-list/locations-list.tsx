import * as React from "react";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/data/data";
import {getLocations, getCity} from "../../reducer/data/selectors";

interface Props {
  locations: Array<string>;
  city: string;
  onCityChange: (city: string) => void;
}

const LocationsList: React.FunctionComponent<Props> = (props: Props) => {
  const {locations, onCityChange, city} = props;

  return (
    <ul className="locations__list tabs__list">
      {locations.map((it) => {
        return (
          <li key={it} className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                onCityChange(it);
              }}
              className={`locations__item-link tabs__item${it === city ? ` tabs__item--active` : ``}`}
              href="#"
            >
              <span>{it}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    city: getCity(state),
    locations: getLocations(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => dispatch(ActionCreator.changeCity(city)),
});

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
