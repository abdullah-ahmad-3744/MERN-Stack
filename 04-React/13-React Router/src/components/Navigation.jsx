import { Link, NavLink} from "react-router-dom";

function Navigation(){
    return (
        <div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li> <NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/support'>Support</NavLink></li>
                <li><NavLink to='/labs'>Labs</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    )
}
export default Navigation