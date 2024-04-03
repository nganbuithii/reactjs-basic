import { useState } from "react";


// STALE STATE
function Counter(){
    const [count, setCount] = useState(0);
    const handleIncre = () => {
        setTimeout(function delay (){
            setCount((count) => count +1)
        },1000);
    };
    return (
        <div onClick={handleIncre}>Increment {count}</div>
    )
}

export default Counter;
