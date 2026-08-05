import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName,  setLastName] = useState('')

  // function firstNameChangeHandler(event) {
  //   console.log(event.target.value)
  //   setFirstName(event.target.value)
  // }

  // function lastNameChangeHandler(event){
  //   console.log(event.target.value)
  //   setLastName(event.target.value)
  // }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(formData);
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={changeHandler}
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="enter your email"
          onChange={changeHandler}
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          name="comments"
          placeholder="Enter your comments"
          value={formData.comments}
          onChange={changeHandler}
        ></textarea>

        <br />
        <br />
        <input
          type="checkbox"
          name="isVisible"
          checked={formData.isVisible}
          onChange={changeHandler}
        />
        <label htmlFor="isVisible" id="isVisible">
          Am I visible
        </label>
        <br />
        <br />

        <fieldset>
          <legend>Mode : </legend>
          <label htmlFor="online-mode">Online Mode : </label>
        <input
          type="radio"
          name="mode"
          id="online-mode"
          value="online-mode"
          checked = {formData.mode === "online-mode"}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label htmlFor="offline-mode">Offline Mode : </label>
        <input
          type="radio"
          name="mode"
          id="offline-mode"
          value="offline-mode"
          checked={formData.mode === "offline-mode"}
          onChange={changeHandler}
        />
        </fieldset>
        
      </form>
    </div>
  );
}

export default App;
