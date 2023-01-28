import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map(() => "     ")
  );
  const [currentTrial, setCurrentTrial] = React.useState(0);

  const addGuess = (guess) => {
    if (currentTrial >= 6) {
      return;
    }
    const nextGuesses = [...guesses];
    nextGuesses[currentTrial] = guess;
    setGuesses(nextGuesses);
    setCurrentTrial(currentTrial + 1);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
