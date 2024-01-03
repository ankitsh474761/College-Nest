import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Style.css";

const AdminPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  //-----------------------------------------------------------------------------------------------------------------------
  // to add admin data
  async function handleform(e) {
    e.preventDefault();
    const data = await axios.post("/register", {
      email: email,
      password: pass,
    });
    localStorage.setItem("adminemail", email);
    console.log(data);
    alert("data added successfully");
    navigate("/adminform");
    setEmail("");
    setPass("");
  }
  //------------------------------------------to login admin-----------------------------------------------------------------------------
  async function handlelogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/loginadmin", {
        email: email,
        password: pass,
      });
      // alert(res.data.message);
      alert("login successfully");
      localStorage.setItem("adminemail", email);
      navigate("/adminform");
    } catch (e) {
      console.log(e);
      alert("enter detail correctly");
    }
  }
  return (
    <div>
      <Navbar />
      <div className="Adminp">
        <h1> Admin Page</h1>
        <div className="Admincontainer">
          <form onSubmit={handlelogin}>
            <label htmlFor="">Username</label>
            <input
              type="email"
              placeholder="enter your email here"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="enter your password here"
              name="pass"
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
