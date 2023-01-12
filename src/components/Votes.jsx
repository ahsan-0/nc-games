import { useState } from "react";

function Votes({ voteData }) {
  const [upVote, setUpVote] = useState(0);
  return (
    <div>
      <p>Votes:{voteData + upVote}</p>
      <button
        onClick={() => {
          setUpVote((curr) => (curr += 1));
          console.log(upVote);
        }}
      >
        UpVote
      </button>
    </div>
  );
}

export default Votes;
