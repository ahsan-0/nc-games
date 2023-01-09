import { useEffect, useState } from "react";
import { getReviews } from "../api";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    return getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);
  return reviews.map((review) => {
    return (
      <div>
        <li>Review title: {review.title}</li>
        <p>Owner: {review.owner}</p>
        <p>Created at: {review.created_at}</p>
      </div>
    );
  });
}

export default Reviews;
