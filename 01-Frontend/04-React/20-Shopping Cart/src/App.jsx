
import './App.css'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import {Routes} from 'react-router'
import { Route } from 'react-router'
function App() {
  return (
    <div>
      <div className='bg-slate-900 text-white'>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path='/cart' element = {<Cart/>} />

      </Routes>

    </div>
  )
}

export default App
