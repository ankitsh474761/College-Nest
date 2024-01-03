import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LoginGoogle.css'

const LoginGoogle = () => { 
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [data,setData] = useState('');
    const [dbemail,setDbemail] = useState("");
    // console.log("email: ", email);
    const navigate = useNavigate();
     localStorage.setItem("email", email);
     localStorage.setItem("name", name);
     localStorage.setItem("dbemail",dbemail);


    // async function getLoginData(e){
    //   e.preventDefault();
    //   try{
    //     const data = await axios.post("/")
    //   }catch(e){
    //     console.log(e);
    //   }
    // }

     async function handleLoginSubmit(e){
        e.preventDefault();
        getFetchData();
        console.log(dbemail);
          const emailID = localStorage.getItem("email");
          if(data || emailID){
        try{
             if(emailID == dbemail){
                navigate("/");
             }
              else if(email) {
                const data = await axios.post("/login", {
                  email: email,
                  name: name,
                });
            await getFetchData();
            if(dbemail==null){
            getFetchData();
            alert("Login Successfully");
            navigate("/");
            }
              }else{
                alert("try to login first");
              }
          }
          catch(e){
          console.error(e);
        }
        }else{
          alert("Please enter your details");
        } 
      }
      

    const getFetchData = async () => {
      const data = await axios.get("/logindata");
      // console.log(email);
      // console.log(data.data.count);
      // console.log(data.data.data[0].email);
      // console.log(data.data.data[1].email);
        for (let i = 0; i < data.data.count; i++) {
         if (data.data.data[i].email == email) {
         setDbemail(data.data.data[i].email);
          }
  }
      }
    useEffect(() => {
      getFetchData();
    });

  return (
    <div className="google">
      {/* <Navbar /> */}
      <GoogleOAuthProvider
        clientId="749327529019-9ki8i7llnjbltp3ebh7rmdkqhhqcqjb7.apps.googleusercontent.com"
      >
        <GoogleLogin
          width={300}
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            // console.log(decoded.email);
            setEmail(decoded.email);
            setName(decoded.name);
            setData(true);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
      <br></br>

      <button
        style={{ width: "200px", height: "50px" }}
        onClick={handleLoginSubmit}
      >
        Click here to Login
      </button>
    </div>
  );
  }
export default LoginGoogle;
