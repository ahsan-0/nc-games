import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getSingleReview } from "../api";
import moment from "moment";

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id).then(({ data }) => {
      setSingleReview(data.review);
      setIsLoading(false);
    });
    getComments(review_id).then(({ data }) => {
      setComments(data.comments);
    });
  }, [review_id]);
  if (isLoading) {
    return <p>is Loading...</p>;
  }
  return (
    <div key={singleReview.review_id}>
      <h3>Review</h3>
      <li>Owner: {singleReview.owner}</li>
      <p>Review title: {singleReview.title}</p>
      <p>Category: {singleReview.category}</p>
      <p>Content: {singleReview.review_body}</p>
      <p>Votes: {singleReview.votes}</p>
      <p>Created at: {moment(singleReview.created_at).format("DD-MM-YYYY")}</p>
      {comments.length === 0 ? <p>No comments available</p> : <h3>Comments:</h3>}
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <li>Author: {comment.author}</li>
            <p>Comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>Created at: {moment(comment.created_at).format("DD-MM-YYYY")}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SingleReview;
