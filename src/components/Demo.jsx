import { useState } from "react";

const Demo = () => {
    const name = "Durairaj R";
    const [count, setCount] = useState(0);

    return(
        <>
            <h1> Hello, {name}</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=> setCount(count+1)}>
                Click Me
            </button>
        </>
    )
}

export default Demo