import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters. 💖");
      return;
    }

    console.log({ guess });
    setGuess("");
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={handleGuessChange}
      />
    </form>
  );
}

export default GuessInput;
