import React from "react";
import { Link } from "react-router-dom";
export default function Expenses() {
    return (
     
      <div>
            
      <form>
          <ul>
          
          </ul>
          <label>
fristName:
</label>
<input type="text"Name="name"  />
<label>
pasword:
</label>
<input type="text"pasword="pass" /> 


 <input type="Submit" value="SignIn"  />

</form>
      <Link to="/login"><button>newUser</button></Link>
  </div>
    );
  }