import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex bg-black text-white">
      {/* Logo part */}
      <div className="">
        <Link to="/">
          {" "}
          <img
            src={Logo}
            alt="StudyNotion logo image"
            srcSet=""
            width={160}
            height={32}
            loading="lazy"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div>
        <ul className="flex gap-3 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Buttons */}

      <div className="flex ml-5 mr-3 gap-5">
        {
          <Link to="/login">
            <button>Login</button>
          </Link>
        }
        {
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        }
        {
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        }
        {
          <Link to="/">
            <button>Logout</button>
          </Link>
        }
      </div>
    </div>
  );
}
export default Navbar;
