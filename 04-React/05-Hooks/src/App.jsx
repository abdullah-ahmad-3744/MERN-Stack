
import './App.css'
import Card from './components/Card'
import Cart from './components/Cart'
import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0)

  return (
    <div className="main-container">
      <Card count={count} setCount={setCount}/>
      <Cart count={count} setCount={setCount}/>
    </div>
  )
}

export default App
