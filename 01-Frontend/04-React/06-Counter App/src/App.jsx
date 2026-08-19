
import './App.css'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0)

  return (
    <>
    <div className="main-container">
      <h1>Counter App</h1>
      <Counter count={count} setCount={setCount}/>
    </div>
    </>
  )
}

export default App
