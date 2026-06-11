import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Child from './components/Child.jsx'
import Test from './components/Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  {/* <App /> */}

  {/* <Child name = "Durairaj R" age = "25"/> */}

  <Test degree = "Cumputer Science"/>

  </StrictMode>,
)
