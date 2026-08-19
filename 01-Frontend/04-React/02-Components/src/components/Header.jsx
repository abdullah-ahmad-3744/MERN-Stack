import './Header.css'
function Header(){
    return(
        <>
        <div className="header-container">
            <div className="logo">
                <h3>ReactRoutine</h3>
            </div>

            <div className="navigation-menu">
                <ul>
                    <li>Home |</li>
                    <li>About |</li>
                    <li>Services |</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="buttons">
                <button>Login</button>
                <button>Sign-Up</button>
            </div>
        </div>
        </>
    )
}
export default Header