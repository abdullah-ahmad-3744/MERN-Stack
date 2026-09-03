import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router";
function Navbar() {
  return (
    <div className="flex justify-around">
      <NavLink to="/">
        <img height={50} width={50}
          src='https://play-lh.googleusercontent.com/LHuO24K8rzj0pdvwLTKlApnBp_IX1pBnfLskqmuh8okHGS0pCicRTX6BjMRyxgkxhdttbeEyi6evv33msqGU'
          alt=""
          srcSet=""
        />
      </NavLink>
      <div className="flex gap-4 justify-center items-center">
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
