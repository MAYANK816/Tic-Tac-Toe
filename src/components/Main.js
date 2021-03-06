import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./GameBoard";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setstep] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[step]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, step + 1);
    const current = historyPoint[step];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setstep(historyPoint.length);
    setXisNext(!xIsNext);
  };



  return (
    <>
      <h1 className="header">Tic Tac Toe</h1>
      <Board squares={history[step]} onClick={handleClick} />
      <div className="info-data-wrapper">
        <div>

        </div>
        <h3>{winner ? "Winner" : "Next Player: " + xO}</h3>
        {

          winner && (xO === "O" ? alert("Winner X") : alert("Winner O"))
        }
      </div>
    </>
  );
};

export default Game;
