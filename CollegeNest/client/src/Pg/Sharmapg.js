import axios from "axios";
import React, { useEffect, useState } from "react";
import Sharmapgreview from "../AccomodationReviews/Sharmapgreview";
import Navbar from "../components/Navbar";
import "./Sharma.css";

const Sharmapg = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofsharmapg");

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
              <div className="Sharmacontainer">
                <div className="Sharmasection">
                  <div className="Sharmadescription">
                    <h1>Sharma PG</h1>
                  </div>
                </div>

                <div className="Sharmasection">
                  <div className="Sharmacard">
                    <div className="Sharmacard-body">
                      <div className="Sharmaimage-container">
                        <img src="/images/Sharma1.jpg" alt="PG Image" />
                        <img src="/images/Deepak3.jpg" alt="PG Image" />
                        <img src="/images/Deepak2.jpg" alt="PG Image" />
                      </div>

                      <div className="Sharmaroom-description">
                        <p>
                          The {e.accomodation} is the three-storey building
                          located within 100 meters of the college campus. This
                          pg is for both boys and girls.
                        </p>

                        <h3>Rooms Description:</h3>

                        <ul>
                          <li>
                            Single room with 3 beds, 1 Cupboard, 1 Wooden Rack
                            and an attached washroom.
                          </li>
                          <li>Total Number of Rooms : {e.rooms}</li>
                        </ul>
                      </div>

                      <div className="Sharmafacilities">
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

                          {/* <li>Cameras at each floor</li> */}
                          <li>common Washrooms with Geysers.</li>
                          <li>Washing machine per floor</li>

                          <li>
                            Shop for stationary and food items available near to
                            PG
                          </li>
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
                            09:30 P.M.
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

                <div className="Sharmasection">
                  <h2 style={{ textAlign: "center", paddingTop: "5px" }}>
                    Mess Menu
                  </h2>
                  <table>
                    <tr>
                      <th>Day</th>
                      <th>Breakfast (07:30 A.M. to 09:00 A.M.)</th>
                      <th>Lunch (01:00 P.M. to 02:00 P.M.)</th>
                      <th>Tea (05:00 P.M. to 06:00 P.M.)</th>
                      <th>Dinner (08:00 P.M. to 09:00 P.M.)</th>
                    </tr>
                    <tr>
                      <td>Monday</td>
                      <td>Aloo Parantha, Tea, Butter</td>
                      <td>Pakoda kadi, Rice</td>
                      <td>Tea</td>
                      <td> Rice, Chapati, Dal, sabzi</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>simple parantha, milk, butter</td>
                      <td>Black chane, rice</td>
                      <td>Tea</td>
                      <td>Rice, baigan Sabzi, Chapati, Chana Dal</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>Aloo sabzi, chapati, tea</td>
                      <td>Rajma, rice</td>
                      <td>Tea</td>
                      <td>Panner, chawal, chapati, dal</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>Aloo Parantha, Tea, Butter</td>
                      <td>Kadi, Rice</td>
                      <td>Tea, Biscuit</td>
                      <td>Rice, Chapati, Chana Dal, Sabzi, Sweet, Milk</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>simple parantha, milk, butter</td>
                      <td>Rajma, Rice</td>
                      <td>Tea, Sandwich</td>
                      <td>
                        Chinese Bhel, Chapati, Manchurian Gravy, Sabzi, Milk
                      </td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>Aloo sabzi, chapati, tea</td>
                      <td>White Chane, Rice</td>
                      <td>Tea, Maggi</td>
                      <td>Chole Bhature, Rice, Salad, Milk</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>Chole bhature, tea</td>
                      <td>Pulaw, dahi</td>
                      <td>chai,samose</td>
                      <td>Rajma, chawal, sabzi, kheer, Chapati</td>
                    </tr>
                  </table>
                </div>
                <div className="Sharmasection">
                  <Sharmapgreview />
                </div>

                <div className="Sharmafooter">
                  <p>
                    <h3>Contact Details</h3>
                    Owner's Name: Mr.Vikas Sharma
                    <br />
                    Owner's Number:9459094000(Also available on WhatsApp)
                    <br />
                  </p>
                  <p style={{ textAlign: "center" }}>
                    &copy; 2023 Sharma PG. All rights reserved.
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

export default Sharmapg;
