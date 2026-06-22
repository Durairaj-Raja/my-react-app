import { useState } from "react";

const OnChange = ()=>{

    const [name, setName] = useState('');

    return(
        <>
        <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
        <br />
        <h2>Name: {name}</h2>
        </>
    )
}

export default OnChange;