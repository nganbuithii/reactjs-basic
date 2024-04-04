import React from 'react';

// const prop= {
//     value,
//     onClick
// }

const Cell = ({ value, onClick }) => {
    return (
        <div className='game-cell' onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;