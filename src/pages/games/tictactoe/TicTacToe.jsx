import React from "react";
import { useState } from "react";
const data = ["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);
  const won = (player) => {
    setLock(true);
    setWinner(player);
  };
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    }
  };
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<p class=
'fa fa-css3'></p>`;
      data[num] = "bus";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<p class=
'fa fa-css3 fa-css5'></p>`;
      data[num] = "cap";
      setCount(count + 1);
    }
    checkWin();
  };
  const resetGame = () => {
    setLock(false);
    setCount(0);
    setWinner(null);
    data.fill("");
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });
  };
  return (
    <div className="container cont-top">
      <h1>Game code</h1>
      <div className="board container p-4 m-4 center-block">
        <div className="row1">
          <div
            className="boxes C"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes D"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes A"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes E"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes F"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes G"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes H"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes I"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes B"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      {winner && (
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Player {winner === "bus" ? "1" : "2"} wins!
        </p>
      )}
      <button
        className="btn btn-outline-primary"
        onClick={resetGame}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "18px",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
