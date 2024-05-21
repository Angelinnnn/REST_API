
import React from 'react'
import './styling.css';

const Task7 = () => 
{
  return (
    <div class="login">
      {/* <center> */}
      
        <body>
        <fieldset>
          <br/>
          <div class="content">
    <p class="wel">LOGIN PAGE</p>
    <div><img src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" 
    alt="User Logo"/></div>
     <br/> 
     {/* <div class="txt"> */}
    <label class="txt">UserName</label><br/><br/> 
      {/* </div> */}
   <input type="text" class="ucls" placeholder=" User Name"></input><br/><br/>
   <label class="pwd">Password</label><br/><br/>
    <input type="password" class="pcls" placeholder=" Password" /> <br/><br/>
   <a href='#' class="fp">Forgot Password?</a><br/><br/>
    <input type="button" class="loginbutton" value="Login"/><br/><br/><br/> </div>
    </fieldset>
    </body>
</div>
  )
}

export default Task7
