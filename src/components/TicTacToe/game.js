// Game.js
import React, { useState } from 'react';
import Board from './Board';
import './GameStyle.css'
import { CalculatorWinner } from '../../helper';

const Game = () => {
    const [board, setBoard ] = useState(Array(9).fill(null));

    const handerClick = (index) => {
        const boardCopy = [...board];
        // kiểm tra đã có người chieen thawg chưa, hay ô đó đã nhấn chưa
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setIsNext((xIsNext) => !xIsNext); // set trạng thái ngược truwocs đó
    };
    const handerResetGame = () => {
        setBoard(Array(9).fill(null));
    }
    // Khi nhấn x o
    const [xIsNext, setIsNext] = useState(true);
    const winner = CalculatorWinner(board);

    return (
        <div>
            {/* Thay đổi props.Cell thành props.cell */}
            <Board cell={board} onClick={handerClick}></Board>

            {/* Nếu có winner */}
            

            {/* Reset game */}
            <button type="button" onClick={handerResetGame}>Reset</button>
        </div>
    );
};

export default Game;
