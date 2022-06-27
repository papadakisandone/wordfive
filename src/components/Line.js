import React from "react";
import "./line.css";

const WORD_LENGTH = 5; // all the words are 5 letters

const Line = (props) => {
  const guess = props.guess;
  const isFinal = props.isFinal;
  const solution = props.solution;

  const tiles = [];

  // split the letters of the quess word into the tiles array
  // check each letter from the guess if is equal with the soloution letter

  for (let i = 0; i < WORD_LENGTH; i++) {
    // let char = guess[i];

    let className = "tile";
    if (isFinal) {
      if (guess[i] === solution[i]) {
        className += " correct"; // for puzzle
        //for keyboard
        let elem = document.getElementById(guess[i]);
        elem.style.backgroundColor = "#79b851";
        //-------------------------------------
      } else if (solution.includes(guess[i])) {
        // && guess[i]!=solution[i])
        className += " almost";
        //for keyboard
        let elem = document.getElementById(guess[i]);
        elem.style.backgroundColor = "#f3c237";
        //-------------------------------------
      } else {
        className += " incorrect";
        //for keyboard
        let elem = document.getElementById(guess[i]);
        elem.style.backgroundColor = "#a4aec4";
        //-------------------------------------
      }
    }

    tiles.push(
      <div key={i} className={className}>
        {" "}
        {guess[i]}{" "}
      </div>
    );
  }

  return <div className="line">{tiles}</div>;
};

export default Line;
