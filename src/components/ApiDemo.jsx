import { useEffect, useState } from "react";

const ApiDemo = ()=>{
    
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((data)=> setUsers(data))
        .catch((error)=> console.log(error));
    },[])

    return(
        <>
        <h1>User List</h1>

        <ul>
            {users.map((user)=> (
                <li key={user.id}>
                    <h2>
                    Name: {user.name} 
                    <br />
                    Email: {user.email}
                    </h2>  
                </li>
            ))}
        </ul>
        </>
    )
}

export default ApiDemo;