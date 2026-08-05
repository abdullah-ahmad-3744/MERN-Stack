import { useState } from 'react'
import './App.css'

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
  const [formData, setFormData] = useState(
    {
      firstName:'', lastName: '',email: ''
    }
  )

  function changeHandler(event) {
    setFormData(previousFormData => {
      return {
        ...previousFormData,
        [event.target.name] : event.target.value
      }
    })
  }
  console.log(formData.firstName);
  console.log(formData.lastName);
  console.log(formData.email);
  return (
    <div>
      <form action="">
        <input  type="text"  name="firstName"  placeholder='first name'  onChange={changeHandler} />
        <br />
        <br />
        <input  type="text"  name='lastName'   placeholder='last name'   onChange={changeHandler}/>
        <br />
        <br />
        <input type="email" name="email" id="" placeholder='enter your email' onChange={changeHandler}/>
      </form>
    </div>
  )
}

export default App
