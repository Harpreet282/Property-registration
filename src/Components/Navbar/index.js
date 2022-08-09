import React,{useEffect} from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";

const Navbar = () => {

  const userType = useSelector((state) => state.loginState.userType);
  // console.log(userType,"usertype")
  useEffect(()=>{
  },[userType])

  return (
    <div className='navbarComponent'>
<nav className="navbar navbar-expand-lg fixed-top">
  <NavLink className="navbar-brand mx-5" to="/">
    <img src="https://propertified.com/assets/css/frontend/images/authorizedlogo.png" alt="logo" />
    </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link"to="/">View</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/ownership'>Ownership</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/addRecords'>Add-Record</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/createUser'>Create-User</NavLink>
      </li>
{
  userType==="super-admin"?
  <li className="nav-item">
  <NavLink className="nav-link" to='/addAdmin'>Add-Admin</NavLink>
</li>
:
""
}
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar