import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { Link } from "react-router-dom";
import moment from "moment";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getReviews().then(({ data }) => {
      setReviews(data.reviews);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>is Loading...</p>;
  }
  return reviews.map((review) => {
    return (
      <div className="reviews" key={review.review_id}>
        <li>
          Owner: <Link to={`/reviews/${review.review_id}`}>{review.owner}</Link>
        </li>
        <p>Review title: {review.title}</p>
        <p>Category: {review.category}</p>
        <p>Votes: {review.votes}</p>
        <p>Created at: {moment(review.created_at).format("DD-MM-YYYY")}</p>
      </div>
    );
  });
}

export default Reviews;
