import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  // Initialize board as an array of 9 empty strings.
  const [board, setBoard] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);

  // Winning combinations.
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check for a win.
  const checkWin = (newBoard) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  // Handle cell click.
  const handleClick = (index) => {
    if (lock || board[index] !== "") return;
    const newBoard = [...board];
    newBoard[index] = count % 2 === 0 ? "bus" : "cap";
    setBoard(newBoard);
    setCount(count + 1);
    const win = checkWin(newBoard);
    if (win) {
      setLock(true);
      setWinner(win);
    }
    
  };

  // Reset the game.
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setWinner(null);
  };

  // Render symbol based on cell value.
  const renderSymbol = (value) => {
    if (value === "bus") {
      return <i className="fa fa-css3"></i>;
    } else if (value === "cap") {
      return <i className="fa fa-css3 fa-css5"></i>;
    }
    return null;
  };



  return (
    <div className="tic-tac-toe-container">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {renderSymbol(cell)}
          </div>
        ))}
      </div>
      {winner && (
        <p className="winner-message">
          Player {winner === "bus" ? "1" : "2"} wins!
        </p>
      )}
      <button className="reset-button" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
