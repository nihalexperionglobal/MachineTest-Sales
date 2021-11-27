import './RegistrationForm.css';

import { useState } from "react";
import RegistrationLogic from './RegistrationLogic';
import axios from 'axios';

function RegistrationForm() {

  localStorage.clear();
  //initialize to empty
  const [inputs, setInputs] = useState({});

  //handle the change of form elements
  function handleChange(event) {
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values into the state
    setInputs(values => ({ ...values, [name]: value }))
  }


  async function handleSubmit() {

    console.log(inputs);


    await RegistrationLogic(inputs.email, inputs.password, inputs.role, inputs.firstname, inputs.lastname, inputs.gender, inputs.age, inputs.address, inputs.phone);
    console.log(inputs.id)
    //  window.location = `/staff-edit/${inputs.id}`;

  }

  return (
    <div className="mainBody">


      <div className="row">
        <label>Enter your User Email: </label>
        <input type="email" name="email" id="email" onChange={handleChange} value={inputs.email || ""} />
      </div>


      <div className="row">
        <label>Enter your password: </label>
        <input type="password" name="password" id="password" onChange={handleChange} value={inputs.password || ""} />
      </div>


      <div className="row">
        <label>Enter Your Role </label>
        <input type="text" name="role" onChange={handleChange} value={inputs.role || ""} />


      </div>

      <div className="row">
        <label>Enter your First Name: </label>
        <input type="text" name="firstname" onChange={handleChange} value={inputs.firstname || ""} />
      </div>

      <div className="row">
        <label>Enter your Last Name: </label>
        <input type="text" name="lastname" onChange={handleChange} value={inputs.lastname || ""} />
      </div>

      <div className="row">
        <label>Enter your Contact No: </label>
        <input type="number" name="phone" onChange={handleChange} value={inputs.phone || ""} />
      </div>

      <div className="row">
        <label>Age: </label>
        <input type="number" name="age" onChange={handleChange} value={inputs.age || ""} />
      </div>

      <div className="row">
        <label>Gender: </label>
        <input type="text" name="gender" onChange={handleChange} value={inputs.gender || ""} />
      </div>

      <div className="row">
        <label>Address: </label>
        <input type="text" name="address" onChange={handleChange} value={inputs.address || ""} />
      </div>

      <div className="row">
        <button onClick={() => handleSubmit()} className="btn">Register</button>
        <button className="btnCancel" onClick={() => { window.location = '/login' }}>Cancel</button>
      </div>


    </div>
  )
}

export default RegistrationForm;