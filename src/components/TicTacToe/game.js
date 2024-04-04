

import React, { useState } from 'react';
import Board from './Board';
import './GameStyle.css'
import { CalculatorWinner } from '../../helper';
const Game = () => {
    const [board, setBoard ] = useState(Array(9).fill(null));
    const handerClick = () => {};
    // Khi nhấn x o
    const [xIsNext, setIsNext] = useState(true);
    const winner = CalculatorWinner(board);
    return (
        <div>
            <Board cell ={board} onClick={handerClick}></Board>
        </div>
    );
};

export default Game;