
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div className='w-full h-screen bg-black text-white flex flex-col justify-around items-center'>
      <h1 className='text-3xl font-semibold mb-5'>Counter App with Redux</h1>
      <Counter/>
      <div></div>
      </div>
  )
}

export default App
