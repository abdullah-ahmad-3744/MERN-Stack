import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from '../../src/public/logo.png'
import { useSelector } from "react-redux";
function Navbar() {
  const {cart} = useSelector((state) => state)
  return (
    <div className="">
      <nav className="flex justify-between items-center h-18 max-w-6xl mx-auto px-10">
       <div className="ml-5">
         <NavLink to="/">
        <img className="h-9"
          src={logo}
          alt=""
          srcSet=""
        />
      </NavLink>
       </div>
      <div className="flex justify-center items-center text-lg text-slate-100 space-x-4">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <div className="relative">
          <NavLink to="/cart">
            <FaShoppingCart  className="text-2xl"/>
            {
              cart.length > 0 &&
            
          <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full animate-bounce">
            { 
            cart.length
            }
            </span>
}
          </NavLink>
        </div>
      </div>
      </nav>
    </div>
  );
}
export default Navbar;
