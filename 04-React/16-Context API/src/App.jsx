
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import ParentRoute from './components/ParentRoute'
import Contact from './components/Contact'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home.jsx'

function App() {

  return (
    <div className='w-full h-screen flex flex-col items-center justify-between'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ParentRoute/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
      <div> </div>
    </div>
  )
}

export default App
