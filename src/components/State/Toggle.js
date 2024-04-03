//  Tìm hiểu về STATE

// STATELESS FUNCTIONAL COMPONENT: component nhưng KHÔNg sd STATE
import React, { useState } from "react";

function Toggle(){
    return <div className="toggle"></div>
}


//STATEFULL FUNCTIONAL COMPONENT: sử dụng STATE
function toggle2(){
    const [Count, setCount ] = useState();
    return (
        <div className="toggle"></div>
    )
}