import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Ibydenereview from "../AccomodationReviews/Ibydenereview";
import  "./Ibydene.css";

const Ibydenepg = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofibydene");

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
              <div className="Ibydenecontainer">
                <div className="Ibydenesection">
                  <div className="Ibydenedescription">
                    <h1>Ibydene PG</h1>
                  </div>
                </div>

                <div className="Ibydenesection">
                  <div className="Ibydenecard">
                    <div className="Ibydenecard-body">
                      <div className="Ibydeneimage-container">
                        <img src="images/Ibydene1.jpg" alt="PG Image" />
                        <img src="images/Ibydene2.jpg" alt="PG Image" />
                        <img src="images/Ibydene3.jpg" alt="PG Image" />
                      </div>

                      <div className="Ibydeneroom-description">
                        <p>
                          The {e.accomodation} is located within 500m of college
                          Premises. This pg provides all the basic facilities
                          along with gym(for both boys and girls) and the pg is
                          only for boys.
                        </p>

                        <h3>Rooms Description:</h3>

                        <ul>
                          <li>
                            Single room with 2 beds, 1 Almirah, and an attached
                            washroom. The room also contain kitchen section.
                          </li>
                          <li>Total Number of Rooms : {e.rooms}</li>
                        </ul>
                      </div>

                      <div className="Ibydenefacilities">
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
                          <li>
                            Essential items provided (plate, spoon, mattress,
                            bucket, bathing jug, wiper, toilet brush, Harpic,
                            Vim at mess)
                          </li>

                          <li>Geysers Available</li>
                          <li>Washing machine per floor</li>
                          <li>
                            Shop for stationary and food items available near PG
                          </li>
                          <li> R.O for filtered water available</li>
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
                            Gate Opening Time is 05:00 A.M. Gate Closing Time is
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
                          building is fixed at Rs. {e.rentB} (non-sharable
                          between roommates and Gym fee is also included with it
                          and compulsory for all the students)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Ibydenesection">
                  <div className="Ibydenegymdetails">
                    <h2
                      style={{
                        textAlign: "center",
                        paddingTop: "5px",
                        backgrounColor: "#f8f8f8",
                      }}
                    >
                      Gym Details
                    </h2>
                    This building have a gym for both boys and girls at the top
                    floor.
                    <br />
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
                    <strong>Gym Fee:</strong> Rs.1000 (for Both boys and girls
                    that are not pg residents)
                    <br />
                    <strong>Gym Timings: </strong>
                    <ul>
                      <li> Morning: 6:00-10:00 A.M </li>
                      <li> Evening: 4:00-8:00 P.M </li>
                    </ul>
                  </div>
                </div>
                <div className="IbydeneIbydenesection">
                  <Ibydenereview />
                </div>
                <div className="Ibydenefooter">
                  <p>
                    <h3>Contact Details</h3>
                    Owner's Name: Mr.Sunil Chauhan
                    <br />
                    Owner's Number:9816171026(Also available on WhatsApp)
                    <br />
                  </p>
                  <p style={{ textAlign: "center" }}>
                    &copy; 2023 Ibydene PG. All rights reserved.
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

export default Ibydenepg;
