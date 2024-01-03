import React, { useEffect } from 'react'
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
 const email = localStorage.getItem("email");
 const username = localStorage.getItem("name");
 const dbemail =  localStorage.getItem("dbemail");


   function handleLogout(e){
    e.preventDefault();
     localStorage.removeItem("email");
     localStorage.removeItem("name");
     localStorage.removeItem("dbemail");
     alert("Logout Successfully");
     navigate("/");
   }

  return (
    <div className="nav">
      {/* <div className='img'>
            <img src="/images/logo.jpg" alt='logo' />
        </div> */}
      <div className="nav1">
        <ul>
          <Link to={"/"}>
            <li id="home">Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
      
        {/* make get request to check whether the the email during login is  present in db or not if present return something so that we can check taht thing on frontend*/}

          {email && email !== null && dbemail ? (
            <>
              <li >Welcome : {username}</li>
              <li onClick={handleLogout} >
                Logout
              </li>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <li >Login</li>
              </Link>
            </>
          )}
          <Link to={"/adminpage"}>
            <li>Admin</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar