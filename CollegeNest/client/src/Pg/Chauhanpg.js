import axios from "axios";
import React, { useEffect, useState } from "react";
import Chauhanpgreview from "../AccomodationReviews/Chauhanpgreview";
import Navbar from "../components/Navbar";
import "./Chauhan.css";

const Chauhanpg = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofchauhanpg");

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
            <div>
              <div className="Chauhancontainer">
                <div className="Chauhansection">
                  <div className="Chauhandescription">
                    <h1>Chauhan PG</h1>
                  </div>
                </div>

                <div className="Chauhansection">
                  <div className="Chauhancard">
                    <div className="Chauhancard-body">
                      <div className="Chauhanimage-container">
                        <img src="/images/Chauhan1.jpg" alt="PG Image" />
                        <img src="/images/Chauhan2.jpg" alt="PG Image" />
                        <img src="/images/Chauhan3.jpg" alt="PG Image" />
                      </div>
                      <div className="Chauhanroom-description">
                        <p>
                          The {e.accomodation} is located at the end of college
                          campus and is available for both boys and girls. This
                          pg also have an inbuilt gym.
                        </p>

                        <h3>Rooms Description:</h3>

                        <ul>
                          <li>
                            Single room with 2-3 beds, 1 Cupboard, 1 Almirah and
                            an attached washroom.
                          </li>
                          <li>Total Number of Rooms : {e.rooms}</li>
                        </ul>
                      </div>

                      <div className="Chauhanfacilities">
                        <h3>Facilities:</h3>
                        <ul>
                          <li>Fans</li>
                          <li>Electricity bill (included in the rent)</li>
                          <li>24/7 water supply</li>
                          <li>
                            Beds provided (according to the number of room
                            partners)
                          </li>
                          <li>Sun-facing rooms available</li>
                          <li>Solar geysers available</li>
                          <li>Gym is also available in this building</li>

                          {/* <li>Cameras at each floor</li> */}

                          <li>Washing machine 1 for boys and 1 for girls.</li>
                        </ul>

                        <br />
                        <h3>Rules: </h3>
                        <ul>
                          <li>
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
                            Rs. 5000 security deposit taken at admission and
                            returned upon leaving the PG
                          </li>
                          <li>
                            Gate Opening Time is 06:00 A.M. Gate Closing Time is
                            09:00 P.M.
                            <br />
                            After the gate is closed, no one will be allowed
                            inside the pg.
                          </li>
                        </ul>
                        <br />

                        <p>
                          <strong>Number of Vacancies available: </strong>{" "}
                          {e.vacant}
                        </p>
                        <p>
                          <strong>Rent Description:</strong> Rent for the
                          building is fixed at Rs. {e.rentG} for girls and Rs.{" "}
                          {e.rentB} for boys. (non-sharable between roommates)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Chauhansection">
                  <div className="Chauhangymdetails">
                    <h2>Gym Details</h2>
                    This building have a gym for both boys and girls at the top
                    floor. <br />
                    <strong>Gym facilities available are as follows:</strong>
                    <ul>
                      <li>Attached washroom</li>
                      <li>Fans</li>
                      <li>Appropriate Lighting and wall mirrors.</li>
                    </ul>
                    <strong> Available Machines and Equipments are: </strong>
                    <ul>
                      <li>Dumbells(with good weigh range)</li>
                      <li>Smith Machine</li>
                      <li>Treadmill</li>
                      <li>Bench Press</li>
                      <li>Leg Pull Down Machine</li>
                      <li>Incline Bench Machine</li>
                      <li>Squat Machine</li>
                      <li>Flying Machine </li>
                    </ul>
                    <strong>Gym Fee:</strong> Rs.800 (for Both boys and girls)
                    <br />
                    <strong>Gym Timings: </strong>{" "}
                    <ul>
                      {" "}
                      <li> Morning: 5:00-9:00 A.M </li>
                      <li> Evening: 3:00-9:00 P.M </li>
                    </ul>
                  </div>
                </div>
                <div className="Chauhansection">
                  <Chauhanpgreview />
                </div>

                <div className="Chauhanfooter">
                  <p>
                    <h3>Contact Details</h3>
                    Owner's Name: Mr.Kunal Chauhan
                    <br />
                    Owner's Number:7876075231(Also available on WhatsApp)
                    <br />
                  </p>
                  <p style={{ textAlign: "center" }}>
                    &copy; 2023 Chauhan PG . All rights reserved.
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

export default Chauhanpg;
