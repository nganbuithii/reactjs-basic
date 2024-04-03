// //  Tìm hiểu về STATE

import { useState } from "react"
import "./ToggleStyle.css";
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
    
    

    //SetOn ở đây là CALLBACK

    //RE RENDER:
    return (
        <div>
            <div className={`toggle   ${on ? "active":""}`}>
                <div className={`spinner ${on? "active":""}`}></div>
            </div>
            {on ? "on":"off"}
            <div className="toggle-control">
                <div className="toggle-on" onClick={() => {setOn(true)}}>on</div>
                <hr></hr>
                <div className="toggle-off" onClick={() => {setOn(false)}}>off</div>
            </div>
            
        </div>
        
    )
}


export default Toggle;