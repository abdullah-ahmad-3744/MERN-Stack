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
    <form action="" onSubmit={loginSubmitHandler} className="flex flex-col w-full gap-y-4 mt-3">
      <label className="w-full">
        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          placeholder="Enter email id"
          onChange={changeHandler}
          className="border rounded-[0.40rem] w-full p-[4px] text-gray-50"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={formData.password}
          placeholder="Enter password"
          onChange={changeHandler}
          required
          className="border rounded-[0.40rem] w-full p-[4px] text-gray-50"
        />
        <span onClick={showPasswordHandler}
        className="absolute right-3 top-[34px] cursor-pointer "
        >
          {showPassword ? <FaRegEye  fontSize={19} fill='#AFB2BF'/> : <FaRegEyeSlash fontSize={19} fill='#AFB2BF' />}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto"> Forget Password </p>
        </Link>
      </label>

      <button className="bg-yellow-200 py-[6px] px-[4px] rounded-[8px] font-medium text-gray-950">Sign In</button>
    </form>
  );
}
export default LoginForm;
