import React from "react";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        return <Guess key={index} guess={guess} />;
      })}
    </div>
  );
}

export default GuessResults;
