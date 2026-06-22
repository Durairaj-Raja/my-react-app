import { useState } from "react";

const ControlledComponent = ()=>{

    const [name, setName] = useState("");

    return(
        <>
        <input 
        type="text" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        placeholder="Enter Your Name: "
        />

        <h2>Hello, {name}.</h2>
        </>
    )
}

export default ControlledComponent;