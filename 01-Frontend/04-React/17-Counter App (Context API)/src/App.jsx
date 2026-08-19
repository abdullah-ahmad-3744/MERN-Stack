
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div className='w-full h-screen flex flex-col justify-between items-center bg-mist-900'>
      <h1 className='h-18 w-full bg-gray-900 flex justify-center items-center text-xl font-semibold text-white'>Counter App with Context API</h1>
      <Counter/>
      <div></div>
    </div>
  )
}

export default App
