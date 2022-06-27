import React from 'react';
import styles from "./keyboard.module.css";

const keyboard = (props) => {
    const {solution, guesses} = props;
console.log(solution, guesses);


    return (
        <div className={styles.keyboard}>
            <div className={styles.keyboard__row}>
                <div id="q" className={`${styles.keyboard__button}`}>q</div>
                <div id="w" className={`${styles.keyboard__button}`}>w</div>
                <div id="e" className={`${styles.keyboard__button}`}>e</div>
                <div id="r" className={`${styles.keyboard__button}`}>r</div>
                <div id="t" className={`${styles.keyboard__button}`}>t</div>
                <div id="y" className={`${styles.keyboard__button}`}>y</div>
                <div id="u" className={`${styles.keyboard__button}`}>u</div>
                <div id="i" className={`${styles.keyboard__button}`}>i</div>
                <div id="o" className={`${styles.keyboard__button}`}>o</div>
                <div id="p" className={`${styles.keyboard__button}`}>p</div>
            </div>
            <div className={styles.keyboard__row}>
            <div></div>
                <div id="a" className={`${styles.keyboard__button}`}>a</div>
                <div id="s" className={`${styles.keyboard__button}`}>s</div>
                <div id="d" className={`${styles.keyboard__button}`}>d</div>
                <div id="f" className={`${styles.keyboard__button}`}>f</div>
                <div id="g" className={`${styles.keyboard__button}`}>g</div>
                <div id="h" className={`${styles.keyboard__button}`}>h</div>
                <div id="j" className={`${styles.keyboard__button}`}>j</div>
                <div id="k" className={`${styles.keyboard__button}`}>k</div>
                <div id="l" className={`${styles.keyboard__button}`}>l</div>
                
            </div>
            <div className={styles.keyboard__row}>
            <div></div>
                <div id="emptyLeft" className={styles.keyboard__button}></div>
                <div id="z" className={`${styles.keyboard__button}`}>z</div>
                <div id="x" className={`${styles.keyboard__button}`}>x</div>
                <div id="c" className={`${styles.keyboard__button}`}>c</div>
                <div id="v" className={`${styles.keyboard__button}`}>v</div>
                <div id="b" className={`${styles.keyboard__button}`}>b</div>
                <div id="n" className={`${styles.keyboard__button}`}>n</div>
                <div id="m" className={`${styles.keyboard__button}`}>m</div>
                <div id="emptyRight" className={`${styles.keyboard__button}`}></div>
            </div>
        </div>
    );
};

export default keyboard;