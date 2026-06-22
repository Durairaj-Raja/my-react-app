import { useEffect, useState } from "react";

const UseEffect = ()=>{

    // useEffect(()=> {
    //     console.log("Component Loaded..."); 
    // },[]);  //Dependencies

    // return(
    //     <>
    //     <h1>This is example component of UseEffect...</h1>
    //     </>
    // )

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Count Changed: ", count);
    },[count]);

    return(
        <>
        <h1>Count: {count}</h1>
        <br />
        <button onClick={()=> setCount(count + 1)}>
            Increase
        </button>
        </>
    )
}

export default UseEffect;