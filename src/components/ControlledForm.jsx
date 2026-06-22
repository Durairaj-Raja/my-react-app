import { useState } from "react";

const ControlledForm = ()=>{

    const [name, setName] = useState("");

    const handleChange = (event)=>{
        setName(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        alert(`Welcome ${name}`);

        setName(" ");
    }

    return(
        <>
        <h1>Registration Form </h1>
        <br />

        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Enter Your Name "
            value={name}
            onChange={handleChange}
            />

            <button type="submit"> Submit </button>
        </form>
        </>
    )
}

export default ControlledForm;