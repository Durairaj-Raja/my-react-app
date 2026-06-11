import { useState } from 'react'

function App() {
 
  const a = 30, b = 20;
  const students = ["dhanam","dhivya","Kaviya"];
  const name = "sanjay";
  return(
    <>
    <h1>Sum of A & B is: { a + b }</h1>
    <br />

    <h1>{a>b ? "A value is bigger" : "B value is bigger"}</h1>
    <br />

    <h2>{students.map((student)=>(
      <h2>{student}</h2>
    ))}</h2>
    <br />

    <h1>{name.toUpperCase()}</h1>
    <h1>{name.length}</h1>
    </>
  )
}

export default App 
