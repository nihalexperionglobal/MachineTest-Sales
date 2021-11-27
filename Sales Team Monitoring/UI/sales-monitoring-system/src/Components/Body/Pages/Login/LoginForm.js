import { useState } from "react";
import axios from "axios";

import './LoginForm.css';


function LoginForm() {

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

  function handleSubmit(event) {
    //to prevent the default submit behaviour
    event.preventDefault();
    //printitng 
    console.log(inputs);

    axios
    .post('http://localhost:3010/login', inputs)
    .then(response => {
       alert(response.data.user.id)
       let id = JSON.stringify(response.data.user.id);
       
       //alert(response.data.accessToken)
       if(inputs.role === response.data.user.role && inputs.role === 'Admin'){
       localStorage.setItem('mytoken', response.data.accessToken);
       localStorage.setItem('role', response.data.user.role)
       window.location = '/admin';
       return;
       }else if(inputs.role === response.data.user.role && inputs.role === 'Sales'){
        localStorage.setItem('mytoken', response.data.accessToken);
        localStorage.setItem('sale', response.data.user.role)
        window.location = `/sales-coordinator/${id}`;
        return;
       }
       else{
         alert("Invalid role");
         window.location = '/login';
       }
       //navigate('/stafflist')
      
      
    })
    .catch(error => {
       localStorage.clear();
       //alert("got error with no data")
       if (error.response) {
         alert(error.response.data); // => the response payload
        
      }
      
    })

    
  }

  return (
    <div className="mainBody">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>Enter your Email: </label>
          <input type="email" name="email" onChange={handleChange} value={inputs.email || ""} />
        </div>


        <div className="row">
          <label>Enter password: </label>
          <input type="password" name="password" onChange={handleChange} value={inputs.password || ""} />
        </div>

        <div className="row">
          <label>Enter role: </label>
          <input type="text" name="role" onChange={handleChange} value={inputs.role || ""} />
        </div>

        <div className="row">
          <input type="submit" value="login" className="btn" onClick={() => console.log()} />
        </div>





      </form>
    </div>
  )
}


export default LoginForm;