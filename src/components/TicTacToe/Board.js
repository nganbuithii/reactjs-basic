// Board.js
import React from 'react';
import Cell from './Cell';
import { CalculatorWinner } from '../../helper';

const Board = (props) => {
    // Kiểm tra nếu props.cell không tồn tại hoặc không phải là một mảng thì trả về null
    if (!props.cell || !Array.isArray(props.cell)) {
        return null;
    }

    return (
        <div className='game-board'>
            {
                props.cell.map((item, index) => {
                    return <Cell key={index} value={item} onClick={() => props.onClick(index)}></Cell>
                })
            }
        </div>
    );
};

export default Board;
