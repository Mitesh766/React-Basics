import { useState } from "react";
import {LOGO_URL} from "../utils/constants"
const Header = () => {
  const [status,setStatus]=useState("Login")
  // const [count,setCount]=useState(1)
  
  return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About</li>
            <li>Cart</li>
            <button className="login-btn"  onClick={()=>{
            if(status=="Login"){
              setStatus("Logout")
            }
            else{
             setStatus("Login")
            }
            }}>{status}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header