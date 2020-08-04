import * as React from "react";
import {Comment} from "../../types";
import Review from "../review/review";

const MAX_REVIEWS = 10;

interface Props {
  reviews: Array<Comment>;
}

const ReviewsList: React.FunctionComponent<Props> = (props: Props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.slice(0, MAX_REVIEWS).map((review) => {
        return (
          <Review
            key={review.id}
            review={review}
          />
        );
      })}
    </ul>
  );
};

export default ReviewsList;
