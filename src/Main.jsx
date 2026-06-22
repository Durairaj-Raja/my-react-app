import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Child from './components/Child.jsx'
import Test from './components/Test.jsx'
import Counter from './components/Counter.jsx'
import OnClick from './components/OnClick.jsx'
import OnChange from './components/OnChange.jsx'
import OnSubmit from './components/OnSubmit.jsx'
import OnMouseEnter from './components/OnMouseEnter.jsx'
import KeyDemo from './components/KeyDemo.jsx'
import EmployeeDetails from './components/EmployeeDetails.jsx'
import TernaryOperator from './components/TernaryOperator.jsx'
import IfElseDemo from './components/IfElseDemo.jsx'
import LogicalOperator from './components/LogicalOperator.jsx'
import ControlledComponent from './components/ControlledComponent.jsx'
import ControlledForm from './components/ControlledForm.jsx'
import UseEffect from './components/UseEffect.jsx'
import ApiDemo from './components/ApiDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  {/* <App /> */}

  {/* <Child name = "Durairaj R" age = "25"/> */}

  {/* <Test degree = "Cumputer Science"/> */}

  {/* <Counter /> */}

  {/* <OnClick /> */}

  {/* <OnChange /> */}

  {/* <OnSubmit /> */}

  {/* <OnMouseEnter /> */}

  {/* <KeyDemo /> */}

  {/* <EmployeeDetails /> */}

  {/* <TernaryOperator /> */}

  {/* <IfElseDemo /> */}

  {/* <LogicalOperator /> */}

  {/* <ControlledComponent /> */}

  {/* <ControlledForm /> */}

  <UseEffect />

  <ApiDemo />

  </StrictMode>,
)
