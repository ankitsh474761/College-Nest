import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./Update.css";

const UpdateForm = () => {
  const [rentG, setRentG] = useState(0);
  const [rentB, setRentB] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [vacant, setVacant] = useState(0);
  const [email, setEmail] = useState("");
  const [accomodation, setAccomodation] = useState("");
  const navigate = useNavigate("");

  const [data, setData] = useState([]);

  const adminemail = localStorage.getItem("adminemail");

  async function handleForm(e) {
    e.preventDefault();
    try {
      const data = axios.post("/adddetails", {
        rentG: rentG,
        rentB: rentB,
        rooms: rooms,
        vacant: vacant,
        email: adminemail,
        accomodation: accomodation,
      });

      alert("added succesfully");
      navigate("/");
    } catch (e) {
      alert("not added");
      console.log(e);
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();
    getFetchData();
    const _id = localStorage.getItem("id");
    try {
      const data = await axios.put("/updatedetails", {
        rentG: rentG,
        rentB: rentB,
        rooms: rooms,
        vacant: vacant,
        email: adminemail,
        accomodation: accomodation,
      });
      console.log(_id);
      alert("updated successfully");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  const getFetchData = async () => {
    const data = await axios.get("/alldetialsofaccomodation");
    console.log(data);
    // console.log(data.data.data[0]._id);
    if (data.data.success) {
      setData(data.data.data[0]._id);
    }
    localStorage.setItem("id", data.data.data[0]._id);
  };
  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="Update">
        <h1> Enter Details</h1>
        <div className="container">
          <form>
            <label htmlFor=""> Rent of Girls: </label>
            <input
              type="number"
              placeholder="enter rent here"
              onChange={(e) => setRentG(e.target.value)}
            />

            <label htmlFor=""> Rent of Boys: </label>
            <input
              type="number"
              placeholder="enter rent here"
              onChange={(e) => setRentB(e.target.value)}
            />

            <label htmlFor=""> Total Rooms : </label>
            <input
              type="number"
              placeholder="enter no of rooms here"
              onChange={(e) => setRooms(e.target.value)}
            />

            <label htmlFor=""> Vacant: </label>
            <input
              type="number"
              placeholder="enter here"
              onChange={(e) => setVacant(e.target.value)}
            />

            <label htmlFor=""> Email : </label>
            <input
              type="text"
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor=""> Name of accomodation: </label>
            <input
              type="text"
              placeholder="enter your accomodation name"
              onChange={(e) => setAccomodation(e.target.value)}
            />

            <button onClick={handleUpdate}>Update Data</button>

            {/* <button onClick={handleForm}>Add Data</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
