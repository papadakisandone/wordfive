import React, {useState} from 'react';
import "./line.css"

const WORD_LENGTH = 5; // all the words are 5 letters

const Line = (props) => {
    const guess = props.guess;
    const isFinal = props.isFinal;
    const solution = props.solution;
    
    
    const tiles = [];

    // split the letters of the quess word into the tiles array
    // check each letter from the guess if is equal with the soloution letter

    for (let i=0; i<WORD_LENGTH;i++){
        // let char = guess[i];

        let className = "tile";
        if (isFinal){
            if (guess[i]===solution[i]){
                className += " correct";
            }else if(solution.includes(guess[i])) { // && guess[i]!=solution[i])
                className += " almost";
            }else {
                className += " incorrect";
            }
        }
        
        tiles.push(
            <div key={i}
            className={className}> {guess[i]} </div>);
    }
    

    return (
        <div className="line">
            {tiles}
        </div>
    );
};

export default Line;