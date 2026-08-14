import {Link} from 'react-router-dom'
function Navbar(){

    function clickHandler(){
        console.log('Theme toggle clicked');
    }
    return (
        <div className='w-full bg-black text-white flex items-center justify-center h-16'>
            <ul className='flex gap-4 font-bold'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <Link>
                <button className='cursor-pointer'
                onClick={clickHandler}>Toggle Theme</button>
                </Link>
            </ul>
        </div>
    )
}
export default Navbar