import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../api";

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);
  useEffect(() => {
    getSingleReview(review_id).then(({ data }) => {
      setSingleReview(data.review);
    });
  }, [review_id]);
  return (
    <div key={singleReview.review_id}>
      <li>Review title: {singleReview.title}</li>
      <p>Owner: {singleReview.owner}</p>
      <p>Created at: {singleReview.created_at}</p>
    </div>
  );
}

export default SingleReview;
