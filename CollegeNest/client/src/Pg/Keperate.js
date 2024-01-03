import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Keperatereview from "../AccomodationReviews/Keperatereview";
import "./Keperate.css";

const Keperate = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofkeperate");

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
              <div className="Keperatecontainer">
                <div className="Keperatesection">
                  <div className="Keperatedescription">
                    <h1>Keperate PG</h1>
                  </div>
                </div>

                <div className="Keperatesection">
                  <div className="Keperatecard">
                    <div className="Keperatecard-body">
                      <div className="Keperateimage-container">
                        <img src="images/Keperate1.jpg" alt="PG Image" />
                        <img src="images/Keperate2.jpg" alt="PG Image" />
                        <img src="images/Keperate3.jpg" alt="PG Image" />
                      </div>

                      <div className="Keperateroom-description">
                        <p>
                          The {e.accomodation} is a 3-storey building located
                          near the ABVGIET Campus. This PG provides all the
                          necessary facilities and is exclusively for BOYS.
                        </p>

                        <h3>Rooms Description:</h3>

                        <ul>
                          <li>
                            Single room with 2-3 beds, 1 Almirah, table, wifi,
                            shelf and an attached washroom.
                          </li>
                          <li>Total Number of Rooms : {e.rooms}</li>
                        </ul>
                      </div>

                      <div className="Keperatefacilities">
                        <h3>Facilities:</h3>
                        <ul>
                          <li>Fans</li>
                          <li>Electricity bill (included in the rent)</li>
                          <li>24/7 water supply</li>
                          <li>Wifi Facility</li>
                          <li>
                            Beds provided (according to the number of room
                            partners)
                          </li>
                          <li>Sun-facing rooms available</li>

                          <li>Electric Rods for hot water are provided</li>
                          <li>Washing machine available</li>
                          <li>Shop for stationary is available near pg</li>
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
                            10:00 P.M.
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
                          building is fixed at Rs.{e.rentB} (non-sharable
                          between roommates)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Keperatesection">
                  <h2 style={{ textAlign: "center", paddingTop: "5px" }}>
                    Mess Menu
                  </h2>
                  <table>
                    <tr>
                      <th>Day</th>
                      <th>Breakfast (08:00 A.M. to 09:30 A.M.)</th>
                      <th>Lunch (12:45 P.M. to 02:00 P.M.)</th>
                      <th>Tea/Snacks (05:00 P.M. to 06:00 P.M.)</th>
                      <th>Dinner (08:00 P.M. to 09:30 P.M.)</th>
                    </tr>
                    <tr>
                      <td>Monday</td>
                      <td>Aloo Zeera, Chapati, Dahi, Achaar, Tea</td>
                      <td>Rajma, Rice</td>
                      <td>Tea, Biscuit</td>
                      <td>Mix Veg, Rice, Chapati, Dal, Milk</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>Aloo Parantha, Butter, Achaar, Tea</td>
                      <td>White Chane, Rice</td>
                      <td>Tea, Sandwich</td>
                      <td>Rice, Sabzi, Chapati, Moong Dal, Sweet, Milk</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>Simple Parantha, Dahi, Achaar, Tea</td>
                      <td>Black Chane, Rice</td>
                      <td>Tea, Foolbadi</td>
                      <td>Fried Rice, Sabzi, Gravy, Milk</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>Aloo Zeera, Chapati, Dahi, Achaar, Tea</td>
                      <td>Kadi, Rice</td>
                      <td>Tea, Biscuit</td>
                      <td>Rice, Chapati, Chana Dal, Sabzi, Sweet, Milk</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>Aloo Parantha, Butter, Achaar, Tea</td>
                      <td>Rajma, Rice</td>
                      <td>Tea, Sandwich</td>
                      <td>
                        Chinese Bhel, Chapati, Manchurian Gravy, Sabzi, Milk
                      </td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>Mooli Parantha, Butter, Achaar, Tea</td>
                      <td>Black Chane, Rice</td>
                      <td>Tea, Biscuit</td>
                      <td>Rice, dal, Chapati, paneer, Milk</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>Chole Bhature, Tea</td>
                      <td>Raita,Pulaw</td>
                      <td>Tea, Maggi/Paasta/Macroni</td>
                      <td>Rice, Moong Dal, aloo sabzi, Chapati</td>
                    </tr>
                  </table>
                </div>
                <div className="Keperatesection">
                  <Keperatereview />
                </div>

                <div className="Keperatefooter">
                  <p>
                    <h3>Contact Details</h3>
                    Owner's Name: Mr.Vikrant keperate
                    <br />
                    Owner's Number: 9816400044(Also available on WhatsApp)
                    <br />
                  </p>
                  <p style={{ textAlign: "center" }}>
                    &copy; 2023 keperate PG. All rights reserved.
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

export default Keperate;
