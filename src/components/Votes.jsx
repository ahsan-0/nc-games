import { useState } from "react";
import { patchCommentVotes } from "../api";

function Votes({ singleReviewVotes, commentVoteData, id, setVotes }) {
  const [commentVotes, setCommentVotes] = useState(commentVoteData);
  const [upVote, setUpVote] = useState(1);
  const patchData = {
    inc_votes: 1,
  };
  return (
    <div>
      {commentVotes ? <p>Votes: {commentVotes}</p> : <p>Votes: {singleReviewVotes}</p>}
      <button
        id={commentVotes ? commentVotes : singleReviewVotes}
        onClick={(event) => {
          setUpVote((curr) => curr + 1);
          if (parseInt(event.target.id) === singleReviewVotes) {
            patchCommentVotes(id, patchData).then(({ data }) => {
              setVotes(singleReviewVotes + 1);
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
