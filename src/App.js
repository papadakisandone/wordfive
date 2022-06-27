import React, { useEffect, useState } from "react";
import Line from "./components/Line";
import Modal from "./components/Modal";
import styles from "./app.module.css";
import Keyboard from "./components/Keyboard";

const API_URL = "https://random-word-api.herokuapp.com/word?length=5&number=10";

function App() {
  const [solution, setSolution] = useState(""); // correct word
  const [guesses, setGuesses] = useState(Array(6).fill(null)); // total guesses
  const [currentGuess, setCurrentGuess] = useState(""); //user current guess
  const [isSolved, setIsSolved] = useState(false);
  const [giveup, setGiveup] = useState(false);
  const [tries, setTries] = useState(0); // how many tries can do, max 6
  // const [showModal, setShowModal] = useState(false);

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
      if (isSolved) {
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
          // found solution before the game ends
          setIsSolved(true);
          // setShowModal(!showModal);
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
  }, [currentGuess, isSolved, solution]);

  const showAnswerHandler = () => { // when press buttton give up
    setGiveup(true);
    // setShowModal(!showModal);
        
  };

  const triesHandler = () => { // count tries
    setTries(prevValue => prevValue+1) 
         
  }; // triesHandler

  // chck this close modal

  // const showModalHandler = () => {
  //   setShowModal(!showModal);
        
  //   // window.location.reload(); // refresh page to get new word
  // };
  const startNewGameHandler = () => {
    window.location.reload(); // refresh page to get new word
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
              key={i}
              guess={isCurrentGuess ? currentGuess : guess ?? ""}
              isFinal={!isCurrentGuess && guess != null}
              solution={solution}/>
          );
        })}
      </div>
        
      
      <div className={styles.bntContainer}>
        {!isSolved && <button className={styles.btnGiveUp} onClick={showAnswerHandler}>
          Give Up
        </button>}
        <button className={styles.btnGiveUp} onClick={startNewGameHandler}>
          New Game
        </button>
      </div>
      
       <Keyboard 
        solution={solution}
        guesses={guesses} />    

        {/* give up or did 6 tries with out found the solution */}
      {((giveup || tries === 6) && !isSolved ) && (
        <Modal
          title="Try Again"
          message={`The Word it was: `}
          solution={`${solution}`}
          showModal="true"
        />
      )}

      {isSolved && (
        <Modal
          title="You Won"
          message="Great Guess, you are Good!"
          showModal="true"
        />
      )}

      <div className={styles.rulesContainer}>
        <div className={styles.rulesText}>
          <h4>The rules are very simple:</h4>
          <p>
            You need to guess the five-letter hidden word in 6 tries. 
            <p>To get started, just type any word on the first line. If the letter is
            guessed correctly and is in the correct place, it will be
            highlighted in green, if the letter is in the word, but in the wrong
            place - in yellow, and if the letter is not in the word, it will
            remain gray.</p> 
            <p><em>Can you guess the hidden 5 letter word in six tries?</em></p>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
