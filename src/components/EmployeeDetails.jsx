
const EmployeeDetails = ()=>{
    
    const employees = [
        {id: 1, name: "durai", dept: "IT"},
        {id: 2, name: "Kamal", dept: "HR"},
        {id: 3, name: "Rohini", dept: "Traning Dept"}
    ];

    return(
        <>
        <h1>Employee Details</h1>
        <br />

        {employees.map((employee) => (
            <>
                <h1 key={employee.id}>{employee.id}</h1> 
                <span>{employee.name}</span>
                <span>{employee.dept}</span>
           </>
        ))}
        </>
    )
}

export default EmployeeDetails;