import React, {useState} from "react";
import Board from "./Board";
import {findTheLines} from "../game-config";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsnext, setXisNext] = useState(true);
    const champion = findTheLines(history[stepNumber]);
    const xO = xIsnext ? "X" : "O";
    const championStyle = champion ? `champion-visible` : `champion`;

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const cells = [...current];

        // return if winner
        if (champion || cells[i]) return;
        // select the cell
        cells[i] = xO;
        setHistory([...historyPoint, cells]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsnext);
    };

    const aITurn = () => {
    }

    const reset = (i) => {
        setStepNumber(0);
    };

    return (
        <>
            <h1>Tic-tac Yo</h1>
            <div className="container">
                <Board cells={history[stepNumber]} onClick={handleClick}/>
                <button onClick={reset}>Start Fresh</button>
                <h3 className={championStyle}>{champion ? "Champion " + champion : ""}</h3>
            </div>
        </>
    );
}

export default Game;