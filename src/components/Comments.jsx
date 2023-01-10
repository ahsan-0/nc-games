import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import moment from "moment";

function Comments() {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then(({ data }) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [review_id]);
  if (isLoading) {
    return <p>is Loading...</p>;
  }
  if (comments.length === 0) {
    return <p>No comments avaliable for this user</p>;
  }
  return comments.map((comment) => {
    return (
      <div key={comment.comment_id}>
        <li>Author: {comment.author}</li>
        <p>Comment: {comment.body}</p>
        <p>Votes: {comment.votes}</p>
        <p>Created at: {moment(comment.created_at).format("DD-MM-YYYY")}</p>
      </div>
    );
  });
}

export default Comments;
