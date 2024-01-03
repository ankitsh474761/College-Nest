import axios from "axios";
import React, { useEffect, useState } from "react";
import Suvidhapgreview from "../AccomodationReviews/Suvidhapgreview";
import Navbar from "../components/Navbar";
import "./Suvidha.css";

const Suvidhapg = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("dataofsuvidhapg");

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
              <div className="Suvidhacontainer">
                <div className="Suvidhasection">
                  <div className="Suvidhadescription">
                    <h1>Suvidha PG</h1>
                  </div>
                </div>

                <div className="Suvidhasection">
                  <div className="Suvidhacard">
                    <div className="Suvidhacard-body">
                      <div className="Suvidhaimage-container">
                        <img src="images/Suvidha1.jpg" alt="PG Image" />
                        <img src="images/Suvidha2.jpg" alt="PG Image" />
                        <img src="images/Suvidha3.jpg" alt="PG Image" />
                      </div>

                      <div className="Suvidharoom-description">
                        <p>
                          The {e.accomodation} is 3 storey building located near
                          the college campus. It is exclusively for BOYS.
                        </p>

                        <h3>Rooms Description:</h3>

                        <ul>
                          <li>
                            Single room with 2 beds, 1 Cupboard, 1Shelf,1
                            Almirah and an attached washroom.
                          </li>
                          <li>Total Number of Rooms : {e.rooms}</li>
                        </ul>
                      </div>

                      <div className="Suvidhafacilities">
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
                          <li>Solar geysers are available</li>
                          <li>Washing machine in each floor</li>
                          <li>
                            Essential items such as: plate, spoon, mattress,
                            bucket, bathing jug, wiper, toilet brush, Harpic,
                            Vim at mess
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
                            Gate Opening Time is 05:30 A.M. Gate Closing Time is
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
                          building is fixed at Rs. {e.rentB} for boys.
                          (non-sharable between roommates)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Suvidhasection">
                  <h2 style={{ textAlign: "center", paddingTop: "5px" }}>
                    Mess Menu
                  </h2>
                  <table>
                    <tr>
                      <th>Day</th>
                      <th>Breakfast (07:45 A.M. to 09:00 A.M.)</th>
                      <th>Lunch (12:30 P.M. to 02:00 P.M.)</th>
                      <th>Tea/Snacks (05:15 P.M. to 06:00 P.M.)</th>
                      <th>Dinner (07:45 P.M. to 09:00 P.M.)</th>
                    </tr>
                    <tr>
                      <td>Monday</td>
                      <td>Aloo parantha, Dahi, Aachaar, Tea</td>
                      <td>Rajma, Rice</td>
                      <td>Tea, Biscuit</td>
                      <td>Mix Veg, Chapati</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>Gobhi, onion parantha, Butter, Achaar, Tea</td>
                      <td>Mix dal, Rice</td>
                      <td>Tea, Fried Rice</td>
                      <td>Rice, Sabzi, Chapati, Malka Dal</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>Paneer bhuji, egg bhuji, tea, chappati</td>
                      <td>White Chana, Rice</td>
                      <td>Tea, macroni/paasta(1st and 3rd week of month)</td>
                      <td> Sabzi,Chapati</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>Aloo Zeera, Chapati, Dahi, Achaar, Tea</td>
                      <td>
                        (1st and 3rd week)Kadi/ (2nd and 4th week)Chana Dal,
                        Rice
                      </td>
                      <td>Tea, Biscuit</td>
                      <td> Chapati ,Sweet, Mix Veg</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>Ajwain Parantha, Butter, Achaar, Tea</td>
                      <td>Kala Chana, Rice</td>
                      <td>Tea,Biscuit</td>
                      <td>Sepu Badi, Chapati, Rice</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>Aloo Zeera, Chapati, Dahi, Achaar, Tea</td>
                      <td>Rajmah, Rice</td>
                      <td>Tea, Fried Crax</td>
                      <td>Sabzi, chana dal, rice, Chapati</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>
                        Chole and puri(1st and 3rd week)/Allu bhaji and
                        Bhature(2nd and 4th week), tea
                      </td>
                      <td>pulao, raita</td>
                      <td>Tea, Chowmin/maggi(2nd and 4th week)</td>
                      <td>
                        Matar Paneer/Chicken(1st and 3rd week), Chilli
                        paneer(2nd and 4th week), Rice, Chapati
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="Suvidhasection">
                  <Suvidhapgreview />
                </div>
                <div className="Suvidhafooter">
                  <p>
                    <h3>Contact Details</h3>
                    Owner's Name: Mr.Baldev Sharma
                    <br />
                    Owner's Number:8679370576(Also available on WhatsApp)
                    <br />
                  </p>
                  <p style={{ textAlign: "center" }}>
                    &copy; 2023 Suvidha PG. All rights reserved.
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

export default Suvidhapg;
