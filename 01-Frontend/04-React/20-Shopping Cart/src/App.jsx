
import './App.css'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import {Routes} from 'react-router'
import { Route } from 'react-router'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path='/cart' element = {<Cart/>} />

      </Routes>

    </div>
  )
}

export default App
