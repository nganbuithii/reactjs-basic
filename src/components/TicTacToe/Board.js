
import React from 'react';
import Cell from './Cell';
import { CalculatorWinner } from '../../helper';
const Board = (props) => {
    //Arrray(9).fill()
    // const show = () => {
    //     console.log(props);
    //     CalculatorWinner();
    // }
    // Kiểm tra nếu props.Cell không tồn tại hoặc không phải là một mảng thì trả về null
    if (!props.Cell || !Array.isArray(props.Cell)) {
        return null;
    }

    return (
        <div className='game-board'>
            {
                props.Cell.map((item, index) => {
                    return <Cell key={index} value={item} onClick={() => props.onClick(index)}></Cell>
                })
            }
        </div>
    );
};

export default Board;