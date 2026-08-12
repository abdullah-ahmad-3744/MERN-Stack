import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }
  function loginSubmitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true)
    toast.success('Logged In')
    navigate('/dashboard')
  }
  return (
    <form action="" onSubmit={loginSubmitHandler}>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          placeholder="Enter email id"
          onChange={changeHandler}
        />
      </label>

      <label htmlFor="">
        <p>
          Password <sup>*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={formData.password}
          placeholder="Enter password"
          onChange={changeHandler}
          required
        />
        <span onClick={showPasswordHandler}>
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>

        <Link to="#">
          <p> Forget Password </p>
        </Link>
      </label>

      <button>Sign In</button>
    </form>
  );
}
export default LoginForm;
