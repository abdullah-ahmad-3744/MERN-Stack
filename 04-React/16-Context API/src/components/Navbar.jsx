import {Link} from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

function Navbar(){
   
    return (
        <div className='w-full bg-black text-white flex items-center justify-center h-16'>
            <ul className='flex gap-4 font-bold'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                
            </ul>
        </div>
    )
}
export default Navbar