
import { useContext, useEffect } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Header from './components/Header'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'

function App() {

  const {fetchBlogsPosts} = useContext(AppContext)


  useEffect( () => {
    fetchBlogsPosts()
  },[])
  return (
    <div className='flex flex-col items-center'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
