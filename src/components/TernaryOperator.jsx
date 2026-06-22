
const TernaryOperator = ()=>{

    const students = [
        {id: 1, name: "durai", passed: true},
        {id: 2, name: "Kamal", passed: false},
        {id: 3, name: "Rohini", passed: true }
    ];
    return(
        <>
        {students.map((student)=>(
            <div key={student.id}>
                <h2>{student.name}</h2>

                <h3>
                    {student.passed ? "Pass" : "Fail"};
                </h3>
            </div>
        ))}
        </>
    )
}

export default TernaryOperator;