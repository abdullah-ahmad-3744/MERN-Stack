import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

function LoginForm() {
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
  return (
    <form action="">
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          type="email"
          name="firstName"
          id="firstName"
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
