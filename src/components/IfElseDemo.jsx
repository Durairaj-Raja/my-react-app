
const IfElseDemo = ()=>{

    const students = [
        {id: 1, name: "durai", passed: true},
        {id: 2, name: "Kamal", passed: false},
        {id: 3, name: "Rohini", passed: true }
    ];

    return(
        <>
        {
            students.map((student)=> {
                if(student.passed) {
                    return (
                        <h2 key={student.id}>
                            {student.name} - Pass
                        </h2>
                    );
                }
                else {
                    return(
                        <h2 key={student.id}>
                            {student.name} - Fail
                        </h2>
                    );
                }
            })
        }
        </>
    )
}

export default IfElseDemo;