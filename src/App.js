import React, { useEffect, useState } from "react";
import Line from "./components/Line";

import styles from "./app.module.css";

const API_URL = "https://random-word-api.herokuapp.com/word?length=5&number=10";

function App() {
  const [solution, setSolution] = useState(""); // correct word
  const [guesses, setGuesses] = useState(Array(6).fill(null)); // total guesses
  const [currentGuess, setCurrentGuess] = useState(""); //user current guess
  const [isGameOver, setIsGameOver] = useState(false);
  const [giveup, setGiveup] = useState(false);
  const [tries, setTries] = useState(0); // how many tries can do, max 6

  // API
  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(API_URL);
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord.toLowerCase());
    };

    fetchWord();
  }, []);

  // keybord
  useEffect(() => {
    const handleType = (e) => {
      if (isGameOver) {
        return;
      }

      if (e.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1)); // remove the last insert from the array
        return;
      }

      if (e.key === "Enter") {
        if (currentGuess.length !== 5) {
          return;
        }
        triesHandler();

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex((val) => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");

        const isCorrect = solution === currentGuess;
        if (isCorrect) {
          setIsGameOver(true);
        }
      }

      if (currentGuess.length >= 5) {
        return;
      }
      // check if user enter something exept letters. Allow only letters
      const isLetter = e.key.match(/^[a-z]{1}$/) != null;
      if (isLetter) {
        setCurrentGuess((prevGuess) => prevGuess + e.key);
      }
    };
    window.addEventListener("keydown", handleType);
    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess, isGameOver, solution]);

  const showAnswerHandler = () => {
    setGiveup(true);
  };

  const triesHandler = () => {
    setTries((prevValue) => prevValue + 1);
  };

  return (
    <>
      <div className={styles.title}>
        <h1>Word Five</h1>
      </div>

      <div className={styles.board}>
        {guesses.map((guess, i) => {
          const isCurrentGuess = i === guesses.findIndex((val) => val == null);
          return (
            <Line
              guess={isCurrentGuess ? currentGuess : guess ?? ""}
              isFinal={!isCurrentGuess && guess != null}
              solution={solution}
            />
          );
        })}
        <button className={styles.btnGiveUp} onClick={showAnswerHandler}>
          Give Up
        </button>
        {isGameOver && <h2>You Win!</h2>}
        {(giveup || tries === 6) && <p>The Word is: {solution}</p>}
      </div>
      <div className={styles.rulesContainer}>
        <div className={styles.rulesText}>
          <h4>The rules are very simple:</h4>
          <p>
            You need to guess the five-letter hidden word in 6 tries. To get
            started, just type any word on the first line. If the letter is
            guessed correctly and is in the correct place, it will be
            highlighted in green, if the letter is in the word, but in the wrong
            place - in yellow, and if the letter is not in the word, it will
            remain gray. Can you guess the hidden 5-letter word in six tries?
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
