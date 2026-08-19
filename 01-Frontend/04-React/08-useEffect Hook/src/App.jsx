import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text , setText] = useState('');
  const[name , setName] = useState('')


  // Use Effect variation number # 1
  useEffect( () => {
    console.log('This works on every render')
  })

  // Use Effect variation # 2
  useEffect(() =>{
    console.log('This workd only on the first render')
  },[])

  // Use Effect variation # 3
  useEffect(() => {
    console.log('This runs on first render and when the dependency list updated');
  },[name])

  // Use Effect variation # 4

  useEffect( () => {
    console.log('Listener added')

    return ( () =>{
      console.log('Listener Removed');
    })
  },[text])




  function changeHandler(event){
    console.log(event.target.value)
    setText(event.target.value)
  }

  return (
    <div>
      <input type="text" name="" id="" onChange={changeHandler} />
    </div>
  )
}

export default App
