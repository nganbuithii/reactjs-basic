
import React from 'react';
import Cell from './Cell';
const Board = () => {
    //Arrray(9).fill()
    return (
        <div className='game-board'>
            {
                Array(9).fill().map((item, index) => {
                    return <Cell key={index}></Cell>
                })
            }
        </div>
    );
};

export default Board;