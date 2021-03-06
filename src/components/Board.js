import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onClick }) => (
    <div className="board">
        {cells.map((cell, i) => (
        <Cell key={i} value={cell} onClick={() => onClick(i)} />
        ))}
    </div>
);

export default Board;