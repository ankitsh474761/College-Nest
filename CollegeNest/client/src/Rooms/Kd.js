import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Kdreview from "../AccomodationReviews/Kdreview";
import "./Kd.css";

const Kd = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofkd");

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
              <div>
                <div className="Kdcontainer">
                  <div className="Kdsection">
                    <div className="Kddescription ">
                      <h1>KD Building</h1>
                    </div>
                  </div>

                  <div className="Kdsection">
                    <div className="Kdcard">
                      <div className="Kdcard-body">
                        <div className="Kdimage-container">
                          <img src="images/pg.png" alt="Kd Building" />
                          <img src="images/pg.png" alt="Kd Building" />
                          <img src="images/pg.png" alt="Kd Building" />
                        </div>
                        <div className="Kdroom-description">
                          <p>
                            <strong> {e.accomodation} </strong> is located near
                            to the college Campus. It provides rooms for both
                            boys and girls.
                          </p>
                          <br />
                          <strong> Rooms Description: </strong> Single room with
                          seperate kitchen and washrooms attached with each
                          room.
                          <br />
                          Total number of rooms in the Building are : {e.rooms}
                          <br />
                        </div>
                        <div className="Kdfacilities">
                          <h2>Facilities they Provide : </h2>
                          <ul>
                            <li> Fans </li>
                            <li>
                              {" "}
                              Electricity bill separately (based on units used){" "}
                            </li>
                            <li> Water supply is available 24/7 </li>
                            <li>
                              Beds are provided (according to the number of room
                              partners)
                            </li>

                            <li>Sun facing rooms are also available.</li>
                          </ul>
                          <h2>Rules: </h2>
                          <ul>
                            <li>
                              Smoking is usually prohibited within the premises
                              of the accommodation. This rule is in place to
                              maintain a healthy and smoke-free environment.
                            </li>
                            <li>
                              Consumption of alcohol is restricted or prohibited
                              within the PG facility. This is often done to
                              maintain a safe and peaceful living environment.
                            </li>
                            <li>
                              Establishing quiet hours ensures that all
                              residents have the opportunity to study and rest
                              without disturbance during specified times.
                            </li>

                            <li>
                              Residents may be required to contribute to the
                              cleanliness and maintenance of common areas such
                              as the kitchen, living room, and bathrooms.
                            </li>
                            <li>
                              There is no strict rule regarding the opening and
                              closing times of buildings, but you should not be
                              wandering around late at night.
                            </li>
                          </ul>
                          <h3> Rent Description:</h3>
                          Rent of This Building is {e.rentB} (Rent may be
                          divided according to the number of persons sharing the
                          rooms).
                          <br />
                          Number of vacant Rooms: {e.vacant}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Kdsection">
                    <Kdreview />
                  </div>

                  {/* Contact details */}
                  <div className="Kdfooter">
                    <h4>Contact details</h4>
                    <p>Owner's name: Mr.Kalimuddin</p>

                    <p>
                      Contact Number: 9418013618(Also Available on Whatsapp)
                    </p>

                    <p style={{ textAlign: "center" }}>
                      &copy; 2023 KD Building . All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Kd;
