import * as React from "react";
import {Offer, CardType} from "../../types";
import Card from "../card/card";

interface Props {
  offers: Array<Offer>,
  onActiveItemChange: () => void,
  cardType: CardType,
};

const CardsList: React.FunctionComponent<Props> = (props) => {
  const {offers, onActiveItemChange, cardType} = props;

  return (
    <React.Fragment>
      {offers.map((offer) => {
        return (
          <Card
            key={offer.id}
            offer={offer}
            onActiveItemChange={onActiveItemChange}
            cardType={cardType}
          />
        );
      })}
    </React.Fragment>
  );
};

export default CardsList;
