import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>New React Project</h1>
    <h3>React is used create a Spa application using the component based approach</h3>
    <button>save and reload</button>
    <div>
      <h3>React uses virtual dom for rendering
      </h3>
    </div>
    </>
  )
}

export default App
