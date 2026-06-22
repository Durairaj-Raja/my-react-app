
const KeyDemo = () =>{

    const students = ["Ajay", "surya", "kathir", "naveen"];

    return(
        <>
        <h2>Student List</h2>
        <br />

        <ul>
            {students.map((student, index)=>(
                <li key={index}>{student}</li>
            ))}
        </ul>
        </>
    )
}

export default KeyDemo;