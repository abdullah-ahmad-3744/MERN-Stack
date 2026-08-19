import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
  function confirmPasswordHandler() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created successfully");
    navigate("/dashboard");
    const accoutData = {
      ...formData
    }
    const finalData = {
      ...accoutData,
      accountType
    }
    console.log('Printing Final Account Data');
    console.log(finalData);
  }


  return (
    <div className="">
      {/* Student Instructor tab */}
      <div className="flex bg-gray-800 p-1 gap-x-1 rounded-full max-w-max mt-2">
        <button
          className={`${
            accountType === "student"
              ? "bg-gray-900 text-gray-50"
              : "bg-transparent text-gray-200 "
          } py-1 px-3 rounded-full transition-all`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-gray-900 text-gray-50"
              : "bg-transparent text-richblack-200 "
          } py-1 px-3 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>
      {/* Sing Up form */}
      <form action="" onSubmit={submitHandler}>
        {/* First Name and Last Name */}
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full mt-1">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input className="bg-gray-800 rounded-[0.40rem] w-full p-[4px] text-richblack-5 mb-2"
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              placeholder="First Name"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
            />
          </label>

          <label htmlFor="" className="w-full mt-1">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input className="bg-gray-800 rounded-[0.40rem] w-full p-[4px] text-richblack-5"
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* Email address */}
        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-gray50 leading-[1.375rem] mb-1">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input className="bg-gray-800 rounded-[0.40rem] w-full p-[4px] text-richblack-5 mb-1"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Enter Email"
            onChange={changeHandler}
            required
          />
        </label>
        {/* password and confirm password */}

        <div  className="flex gap-x-4">
          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input className="bg-gray-800 rounded-[0.40rem] w-full p-[4px] text-gray-50"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              
            />

            <span  className="absolute right-3 top-[35px] cursor-pointer z-10"
            onClick={showPasswordHandler}>
              {showPassword ? <FaRegEye fontSize={19} fill="#AFB2BF" /> : <FaRegEyeSlash fontSize={19} fill="#AFB2BF" />}
            </span>
          </label>

          {/* Confirm Password */}
          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input className="bg-gray-800 rounded-[0.40rem] w-full p-[4px] text-gray-50"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
            />

            <span  className="absolute right-3 top-[35px] cursor-pointer z-10"
            onClick={confirmPasswordHandler}>
              {showConfirmPassword ? <FaRegEye fontSize={19} fill="#AFB2BF" /> : <FaRegEyeSlash  fontSize={19} fill="#AFB2BF"/>}
            </span>
          </label>
        </div>
        <button className="bg-yellow-200 py-[8px] px-[12px] rounded-[8px] mt-3 font-medium text-gray-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
}
export default SignupForm;
