import { Link } from "react-router-dom";

function Navigation(){
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li><Link to='/support'>Support</Link></li>
                <li><Link to='/labs'>Labs</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}
export default Navigation