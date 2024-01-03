import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Greenreview from "../AccomodationReviews/Greenreview";
import "./GreenBuild.css";

const GreenBuild = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofgreen");

    console.log(data.data.data);
    if (data.data.success) {
      setData(data.data.data);
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {data.map((e, i) => {
        return (
          <>
            {/* <p>Name of Accomodation : {e.accomodation}</p>
            <p>Total No of Rooms : {e.rooms}</p>
            <p>Rent of Boys : {e.rentB}</p>
            <p>Rent of Girls: {e.rentG}</p>
            <p>Vacant Rooms: {e.vacant}</p> */}
            <div>
              <div className="GreenBuildcontainer">
                <div className="GreenBuildsection">
                  <div className="GreenBuilddescription">
                    <h1>Green Building</h1>
                  </div>
                </div>
                <div className="GreenBuildsection">
                  <div className="GreenBuildcard">
                    <div className="GreenBuildcard-body">
                      <div className="GreenBuildimage-container">
                        <img src="images/Green1.jpg" alt="Green Building" />
                      </div>

                      <div className="GreenBuildroom-description">
                        <p>
                          The {e.accomodation} is opposite to the barricade of
                          the college.
                          <br />
                          <strong> Rooms Description: </strong> Single room with
                          an open kitchen (within the room) and a washroom.
                          Total number of rooms in the Building: {e.rooms}
                        </p>
                        <br />
                      </div>
                      <div className="GreenBuildfacilities">
                        <h2>Facilities they Provide : </h2>
                        <ul>
                          <li> Fans </li>
                          <li>
                            {" "}
                            Electricity bill separately (based on units used){" "}
                          </li>
                          <li> Water supply is available 24/7 </li>
                          <li>
                            {" "}
                            Beds are provided (according to the number of room
                            partners){" "}
                          </li>
                          <li>
                            Shop for stationary and food items available near
                            the building
                          </li>
                        </ul>
                        <h2>Rules: </h2>
                        <ul>
                          <li>
                            {" "}
                            Smoking is usually prohibited within the premises of
                            the accommodation. This rule is in place to maintain
                            a healthy and smoke-free environment.
                          </li>
                          <li>
                            Consumption of alcohol is restricted or prohibited
                            within the PG facility. This is often done to
                            maintain a safe and peaceful living environment.
                          </li>
                          <li>
                            Establishing quiet hours ensures that all residents
                            have the opportunity to study and rest without
                            disturbance during specified times.
                          </li>
                          <li>
                            Rules regarding guests, especially overnight guests,
                            may be in place to ensure the safety and security of
                            all residents.
                          </li>
                          <li>
                            Residents may be required to contribute to the
                            cleanliness and maintenance of common areas such as
                            the kitchen, living room, and bathrooms.
                          </li>
                          <li>
                            There is no strict rule regarding the opening and
                            closing times of buildings, but you should not be
                            wandering around late at night.
                          </li>
                        </ul>
                        <h3> Rent Description:</h3>
                        Rent of This Building is {e.rentB} (Rent may be divided
                        according to the number of persons sharing the rooms).
                        <br />
                        Number of vacant Rooms: {e.vacant}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="GreenBuildsection">
                  <Greenreview />
                </div>
                <div className="GreenBuildfooter">
                  <h4>Contact details</h4>
                  <p>Owner's name: Mr.Muhammad Sttar</p>
                  <p>Contact Number: 9736185925</p>
                  <p>Contact Number: 8629830010 (Also Available on Whatsapp)</p>
                  <p style={{ textAlign: "center" }}>
                    &copy; 2023 Sttar Building. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GreenBuild;
