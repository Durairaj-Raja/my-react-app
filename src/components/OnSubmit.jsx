
const OnSubmit = ()=> {

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form Submitted Successfully...");
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name: "/>

        <br />
        
        <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default OnSubmit;
