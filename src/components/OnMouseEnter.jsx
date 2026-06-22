
const OnMouseEnter = ()=> {

    const handleMouseEnter = ()=>{
        alert("Mouse Entered...");
    }
    return(
    <div 
    onMouseEnter = {handleMouseEnter}
        style = {{
            width : "200px",
            height: "100px",
            border: "1px solid black"
        }}
    >
        Hover Here...
    </div>
    )
}

export default OnMouseEnter;