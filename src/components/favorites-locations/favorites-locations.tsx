import * as React from "react";

import {Offer, CardType} from "../../types";
import {noop} from "../../utils";
import CardsList from "../cards-list/cards-list";

interface Props {
  location: string;
  offers: Array<Offer>;
}

const FavoritesLocations: React.FunctionComponent<Props> = (props: Props) => {
  const {location, offers} = props;

  return (
    <li key={location} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <CardsList
          offers={offers}
          onActiveItemChange={noop}
          cardType={CardType.FAVORITES}
        />
      </div>
    </li>
  );
};

export default FavoritesLocations;

