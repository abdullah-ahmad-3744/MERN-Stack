import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
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
  return (
    <div>
      {/* Student Instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      {/* Sing Up form */}
      <form action="">
        {/* First Name and Last Name */}
        <div>
          <label htmlFor="">
            <p>
              First Name <sup>*</sup>
            </p>
            <input
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

          <label htmlFor="">
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
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
        <label htmlFor="">
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
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

        <div>
          <label htmlFor="">
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
            />

            <span onClick={showPasswordHandler}>
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </label>

          {/* Confirm Password */}
          <label htmlFor="">
            <p>Confirm Password <sup>*</sup></p>
            <input
            type={showPassword ? ('text') : ('password')}
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            required
            placeholder="Confirm Password"
            onChange={changeHandler} />

             <span onClick={showPasswordHandler}>
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
}
export default SignupForm;
