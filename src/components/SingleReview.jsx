import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../api";
import moment from "moment";

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id).then(({ data }) => {
      setSingleReview(data.review);
      setIsLoading(false);
    });
  }, [review_id]);
  if (isLoading) {
    return <p>is Loading...</p>;
  }
  return (
    <div key={singleReview.review_id}>
      <li>Owner: {singleReview.owner}</li>
      <p>Review title: {singleReview.title}</p>
      <p>Content: {singleReview.review_body}</p>
      <p>Created at: {moment(singleReview.created_at).format("DD-MM-YYYY")}</p>
    </div>
  );
}

export default SingleReview;
