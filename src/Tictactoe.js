import * as React from "react";
import { useState } from "react";

export function Tictactoe() {
  return <Game />;
}
function Game() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const decidewinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null &&
        board[a] === board[b] &&
        board[b] === board[c]) {
        console.log("winner", board[a]);
        return board[a];
      }
    }
  };

  const winner = decidewinner(board);

  const [isXturn, setXturn] = useState(true);
  const handleclick = (index) => {
    console.log(index);
    if (!winner && board[index] == null) {
      const boardcopy = [...board];
      boardcopy[index] = isXturn ? "X" : "O";
      setBoard(boardcopy);
      setXturn(!isXturn);
    }
  };
  const restart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setXturn(true);
  };
  const draw = () => {
    if (!setBoard && !winner) {
      return ("match is draw");
    }
  };
  return (<div>
    <div className="board">
      {board.map((val, index) => (<GameBox val={val} onplayerclick={() => handleclick(index)} />))}

    </div>
    <div className="otherbox">
    {winner ? <h1>The winner is {winner}</h1> : " "}<br/>
    <button onClick={restart}>Restart</button><br/>
    {draw ? <h1> {draw} </h1> : " "}
    </div>

  </div>

  );
}
function GameBox({ val, onplayerclick }) {
  // const [value,setvalue] = useState(val);
  const styles = { color: val == "X" ? "green" : "red" };
  return (
    <div style={styles}
      // onClick={()=> setvalue(value == "X" ? "O": "X")}
      onClick={onplayerclick}
      className="gamebox">
      {val}

    </div>
  );
}
