import { useState } from "react";
import { patchCommentVotes } from "../api";

function Votes({ singleReviewVotes, commentVoteData, setVotes, id }) {
  const [commentVotes, setCommentVotes] = useState(commentVoteData);
  const [upVote, setUpVote] = useState(1);
  const [error, setError] = useState(null);
  const patchData = {
    inc_votes: 1,
  };
  if (error) {
    return <h4>Error could not update votes</h4>;
  }
  return (
    <div>
      <p>Votes: {commentVotes ? commentVotes : singleReviewVotes}</p>
      <button
        id={commentVotes ? commentVotes : singleReviewVotes}
        onClick={(event) => {
          setUpVote((curr) => curr + 1);
          setVotes(singleReviewVotes + 1);
          if (parseInt(event.target.id) === singleReviewVotes) {
            patchCommentVotes(id, patchData)
              .then(() => {})
              .catch((err) => {
                setError(err);
              });
          }
          setCommentVotes(commentVoteData + upVote);
        }}
      >
        UpVote
      </button>
    </div>
  );
}

export default Votes;
