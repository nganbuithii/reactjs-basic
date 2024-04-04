import React from 'react';

// const prop= {
//     value,
//     onClick
// }

const Cell = (props) => {
    // obj destructuring
    // const studen = {
    //     name:"ngan",
    //     age:28
    // }
    // const name = studen.name;
    // consts age = studen.age
    // // tương đuowng
    // const {name, age} = studen
    // const {value, onClick} = props;
    // console.log(value, onClick);

    const Cell = ({value, onClick})=> {
        return (
    
    
            <div className='game-cell' onClick={onClick}>
                {props.value}
            </div>
        );
    }
    
};

export default Cell;