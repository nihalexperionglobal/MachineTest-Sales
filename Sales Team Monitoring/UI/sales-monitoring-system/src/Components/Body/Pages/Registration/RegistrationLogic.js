import axios from "axios";


function RegistrationLogic(email, password, role,  firstname, lastname, gender, age,  address, phone){

    var data = {
        
        "email": email, 
        "password": password,
        "role": role,
        "firstname": firstname,
        "lastname": lastname,
        "gender": gender,
        "age": age,
        "address": address,
        "phone": phone
        // "date_of_joining": "02-dsf02-2021"
      };
      
      var config = {
        method: 'post',
        url: 'http://localhost:3010/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      

      axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.user.id));

        let id = JSON.stringify(response.data.user.id);
       
       //alert(response.data.accessToken)
       if(role === response.data.user.role && role === 'Admin'){
       localStorage.setItem('mytoken', response.data.accessToken);
       localStorage.setItem('role', response.data.user.role)
       window.location = '/admin';
       return;
       }else if(role === response.data.user.role && role === 'Sales'){
        localStorage.setItem('mytoken', response.data.accessToken);
        localStorage.setItem('role', response.data.user.role)
        window.location = `/sales-coordinator/${id}`;
        return;
       }
       else{
         alert("Invalid role");
         window.location = '/login';
       }
        
        
        

        

      })
      .catch(function (error) {
        console.log(error);
      });



}

export default RegistrationLogic;