import axios from "axios";
import React, { useEffect, useState } from "react";
import ShivShaktipgreview from "../AccomodationReviews/ShivShaktipgreview";
import Navbar from "../components/Navbar";
import "./ShivShakti.css";

const ShivShaktipg = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofshivshaktipg");

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
              <div className="ShivShakticontainer">
                <div className="ShivShaktisection">
                  <div className="ShivShaktidescription">
                    <h1>Shivshakti PG</h1>
                  </div>
                </div>

                <div className="ShivShaktisection">
                  <div className="ShivShakticard">
                    <div className="ShivShakticard-body">
                      <div className="ShivShaktiimage-container">
                        <img src="images/Shiv1.jpg" alt="PG Image" />
                        <img src="images/Shiv2.jpg" alt="PG Image" />
                      </div>

                      <div className="ShivShaktiroom-description">
                        <p>
                          The {e.accomodation} is the three-storey building
                          located near the college campus and is Exclusively for
                          boys.
                        </p>

                        <h3>Rooms Description:</h3>

                        <ul>
                          <li>
                            Single room with 2-3 beds, 3 Cupboars and an
                            attached washroom.
                          </li>
                          <li>Total Number of Rooms : {e.rooms}</li>
                        </ul>
                      </div>

                      <div className="ShivShaktifacilities">
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
                          <li>Two Chairs in each room.</li>
                          {/* <li>Cameras at each floor</li> */}

                          <li>Washing machine </li>
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
                            Gate Opening Time is 06:30 A.M. Gate Closing Time is
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
                          between roommates)
                        </p>
                        <p>
                          And it is Rs.5500 if milk is included in the diet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ShivShaktisection">
                  <h2 style={{ textAlign: "center", paddingTop: "5px" }}>
                    Mess Menu
                  </h2>
                  <table>
                    <tr>
                      <th>Day</th>
                      <th>Breakfast (08:00 A.M. to 09:00 A.M.)</th>
                      <th>Lunch (1:00 P.M. to 02:00 P.M.)</th>
                      <th>Tea/Snacks (05:00 P.M. to 05:30 P.M.)</th>
                      <th>Dinner (08:00 P.M. to 09:30 P.M.)</th>
                    </tr>
                    <tr>
                      <td>Monday</td>
                      <td>Aloo Parantha, Tea</td>
                      <td>Chana Dal, Kadhi, Rice</td>
                      <td>Tea</td>
                      <td>Subzi, Chapati</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>Bread toast, tea</td>
                      <td>Rajmah, Rice</td>
                      <td>Tea</td>
                      <td>Kofte subzi, Chapati</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>Aloo parantha, Tea</td>
                      <td>Mixed Dal, Rice</td>
                      <td>Tea</td>
                      <td>Subzi, Chapati</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>Onion Parantha, Tea</td>
                      <td>White Chane, Rice</td>
                      <td>Tea</td>
                      <td>Subzi, Chapati</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>Bread Toast, Tea</td>
                      <td>Malka or Maha Dal, Rice</td>
                      <td>Tea</td>
                      <td>Aloo Nutri, Aloo Sabzi, Chapati</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>Aloo Parantha,Tea</td>
                      <td>Black Channa, Rice</td>
                      <td>Tea</td>
                      <td>Subzi, Chapati</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>Chole poori</td>
                      <td>Pulaw, Dahi</td>
                      <td>Tea</td>
                      <td>Paneer/Mushroom, chapati</td>
                    </tr>
                  </table>
                </div>
                <div className="ShivShaktisection">
                  <ShivShaktipgreview />
                </div>
                <div className="ShivShaktifooter">
                  <p>
                    <h3>Contact Details</h3>
                    Owner's Name: Mr.Nikhil Chauhan
                    <br />
                    Owner's Number:7876457978(Also available on WhatsApp)
                    <br />
                  </p>
                  <p style={{ textAlign: "center" }}>
                    &copy; 2023 ShivShakti PG. All rights reserved.
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

export default ShivShaktipg;
