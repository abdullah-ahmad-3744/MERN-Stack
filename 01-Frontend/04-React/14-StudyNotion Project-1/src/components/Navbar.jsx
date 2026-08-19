import {toast} from "react-hot-toast";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
function Navbar(props) {
  let isLoggedIn = props.isLoggedIn
  let setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className="flex justify-between items-center w-11/12 max-w[1160px] py-4 mx-auto">
      {/* Logo part */}
      <div className="">
        <Link to="/">
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
        <ul className="flex gap-x-6 text-gray-50">
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

      <div className="flex items-center">
        { !isLoggedIn &&
          <Link to="/login">
            <button className="bg-gray-900 text-gray-50 py-[4px] px-[11px] mx-2 rounded-[5px] border border-gray-700 cursor-pointer">Log in</button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/signup">
            <button className="bg-gray-900 text-gray-50 py-[4px] px-[11px] rounded-[5px] border border-gray-700 cursor-pointer">Sign up</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard">
            <button className="bg-gray-900 text-gray-50 py-[4px] px-[11px] rounded-[5px] border border-gray-700 cursor-pointer">Dashboard</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/">
            <button className="bg-gray-900 text-gray-50 py-[4px] px-[11px] rounded-[5px] border border-gray-700 cursor-pointer "
            onClick={() => {
              setIsLoggedIn(false)
              toast.success("Logged Out")
            }}>Logout</button>
          </Link>
        }
      </div>
    </div>
  );
}
export default Navbar;
