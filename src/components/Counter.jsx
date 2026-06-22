import { useState } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(10);
    return(
        <>
        <h1>Count:{count}</h1>
        </>
    )
}
export default Counter;