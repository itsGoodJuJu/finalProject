import React from 'react'
import './Registration.css'

function Registration() {
  return (
    <div id='regForm' >
      {/* <!-- Registration form --> */}
    <form action="http://localhost:3000/register" method="post"/>
      {/* <!--Container with inputs and labels(email,password,repeat password)and register submit button --> */}
        <div class="container">
          <h1>Register</h1>
           <p>Please fill in this form to create an account.</p>
             <hr/>
              <label for="Username"><b>Username</b></label>
              <input type="text" name="userName" class="form-control" id="username" minlength="8" maxlength="30" required/>

              <label for="Firstname"><b>First Name</b></label>
              <input type="text" name="firstname" class="form-control" id="firstname" minlength="8" maxlength="30" required/>

              <label for="Lastname"><b>Last Name</b></label>
              <input type="text" name="lastname" class="form-control" id="lastname" minlength="8" maxlength="30" required/>

              <label for="Password"><b>Password</b></label>
              <input type="password" name="password"  class="form-control" id="password" minlength="8" maxlength="30" required/>
          
              <label for="Email"><b>Email</b></label>
              <input type="email" name="email" class="form-control" id="email" minlength="10" maxlength="50" required/>

            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          {/* Register submit button  */}
          <button type="submit" class="registerbtn">Register</button>
        </div>
      {/* "Alreadly have an account?" with link to login page container  */}
        <div class="container login">
          <a class="home" href="../index.html">Home</a>
          <p id="regtx">Already have an account? <a href="../Login/logform.html">Login</a>.</p>
        </div>
      <form/> 
        
    </div>
  )
}

export default Registration