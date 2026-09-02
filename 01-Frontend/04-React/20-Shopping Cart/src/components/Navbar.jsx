import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router";
function Navbar() {
  return (
    <div className="flex justify-between">
      <NavLink to="/">
        <img
          src="https://t3.ftcdn.net/jpg/03/99/53/44/240_F_399534445_zG1tMcAn0q7bCaPw2Lp5ZWiBiBgQYxvN.jpg"
          alt=""
          srcSet=""
        />
      </NavLink>
      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <div>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
