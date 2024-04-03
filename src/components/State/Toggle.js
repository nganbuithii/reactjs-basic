// //  Tìm hiểu về STATE

import { useState } from "react"

// // STATELESS FUNCTIONAL COMPONENT: component nhưng KHÔNg sd STATE
// import React, { useState } from "react";

// function Toggle(){
//     return <div className="toggle"></div>
// }


// //STATEFULL FUNCTIONAL COMPONENT: sử dụng STATE
// function toggle2(){
//     const [Count, setCount ] = useState();
//     return (
//         <div className="toggle"></div>
//     )
// }


function Toggle(){
    // 1. enabel state : useState(...)
    // 2. init state: useState(true hay false), number(1,2,3,4), undefine, null, [1,2,3], {object}
    // 3.read state: 
    // 4. update
    // const a = useState(false);
    // console.log(a);

    const [on, setOn] = useState(false);
    // nên đặt tên như on và setOn
    // off, setOff
    //active, setActive
    console.log(on);
    

    //SetOn ở đây là CALLBACK

    //RE RENDER:
    return (
        <div className="toggle" onClick={() => setOn(true)}>Toggle{on ? "ON":"OFF"}</div>
    )
}


export default Toggle;