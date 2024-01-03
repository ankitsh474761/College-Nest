import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Parvatireview from "../AccomodationReviews/Parvatireview";
import "./Parvati.css";

const Parvati = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofparvati");

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
              <div>
                <div className="Parvaticontainer">
                  <div className="Parvatisection">
                    <div className="Parvatidescription ">
                      <h1>Parvati Hostel</h1>
                    </div>
                  </div>

                  <div className="Parvatisection">
                    <div className="Parvaticard">
                      <div className="Parvaticard-body">
                        <div className="Parvatiimage-container">
                          <img src="images/Parvati1.png" alt="Parvati Hostel" />
                          <img src="images/Parvati2.jpg" alt="Parvati Hostel" />
                          <img src="images/Parvati4.png" alt="Parvati Hostel" />
                        </div>
                        <div className="Parvatiroom-description">
                          <p>
                            <strong>The {e.accomodation} </strong> is located
                            within 100m of college campus and it is exclusively
                            for girls.
                            <br />
                            The total capacity of hostel is 37 girls.
                          </p>
                          <br />
                          <strong> Rooms Description: </strong> Single room with
                          3 beds and a washroom attached to the room.
                          <br />
                          Total number of rooms in the Building are : {e.rooms}
                          <br />
                        </div>
                        <div className="Parvatifacilities">
                          <h2>Facilities they Provide : </h2>
                          <ul>
                            <li> 2 Fans and 3 tubelights per room </li>
                            <li> Electricity bill included with charges </li>
                            <li> Water supply is available 24/7 </li>
                            <li>Sun facing rooms are also available.</li>
                            <li>Washing machines for each floor</li>
                            <li>A common TV room for entertainment</li>
                            <li>A common library room for study</li>
                            <li>
                              {" "}
                              Essential items provided (plate, spoon, mattress,
                              bucket, bathing jug, toilet brush, Harpic, Vim at
                              mess)
                            </li>
                            <li>
                              A small playground inside the boundary of hostel
                            </li>
                            <li>
                              Provides study table, a chair and a cupboard for
                              each student
                            </li>
                          </ul>
                          <br />
                          <h3>Allotment Process</h3>
                          <ol>
                            <li>
                              The student who want to accomodate for hostel have
                              to fill a form (which is provided at admin office)
                            </li>
                            <li>
                              After submitting the form, the allocation will be
                              done on the merit basis (either at 12th percentage
                              or at JEE percentile)
                            </li>
                          </ol>
                          <em>
                            For more details, Contact the wardens of the hostel.
                          </em>
                          <br />
                          <h3> Charges Description:</h3>
                          Only mess charges of Rs. {e.rentG} per month have to
                          be paid by the girls. Rest of the charges are included
                          in semester fee of the college.
                          <br />
                          Number of vacancies : {e.vacant}
                          <br />
                          <h3>Hostel Conduct and Discipline Rules</h3>
                          <div className="ParvatiShivam">
                            <a href="https://drive.google.com/file/d/1kSLggxXeqwQteHNSw_EGagrejQegTEmt/view?usp=sharing">
                              Click here for Hostel Rules
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="Parvatisection">
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
                        <td>आलू पराांठा + अचार + चाय + Butter</td>
                        <td>मिक्स दाल + चावल + सलाद + चपाती</td>
                        <td>चाय</td>
                        <td>रोन्गी\ काले चने + सब्जी + चपाती + चावल</td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>प्याज पराांठा / मूली पराांठा + अचार + चाय</td>
                        <td>सफेद चने + सलाद + चावल + चपाती + कढू / कढी</td>
                        <td>समोसा/पकौड़ा</td>
                        <td>सब्जी/आलू मटर, मलका मसर, चावल, चपाती</td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>आलूपराांठा + अचार + चाय</td>
                        <td>रोन्गी + चावल + चपाती + सलाद</td>
                        <td>चाय</td>
                        <td>राजमाह + चावल + चपाती + सब्जी</td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>गोभी पराठा/मूली पराठा; अचार, चाय, दही, मक्खन</td>
                        <td>मलका मसर, कड़ी, चावल, चपाती</td>
                        <td>चाय</td>
                        <td>मिक्स दाल + सब्जी + चपाती + चावल</td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>आलूपराांठा + अचार + चाय</td>
                        <td>काली दाल + चपाती + चावल + रायता</td>
                        <td>मैक्रोनी जूस / आइसक्रीि/ चौमिन</td>
                        <td>चने की दाल + सब्जी + चावल+ चपाती</td>
                      </tr>
                      <tr>
                        <td>Saturday</td>
                        <td>सफे द चने/ आलू की सब्जी पूरी + चाय</td>
                        <td>पुलाओ / खिचडी + रायता</td>
                        <td>चाय</td>
                        <td>
                          सब्जी + चनेकी दाल + चपाती + चावल + हलवा / सेमवयाां /
                          ब्रेड का मीठा
                        </td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td>जीरा आलू/ सब्जी + चपाती + चाय</td>
                        <td>/+ चावल + राजमाह चपाती</td>
                        <td>सैंडविच+ चाय</td>
                        <td>
                          पनीर / नॉन वेज / मशरूम / दाल / फ्राइड राइस / सब्जी +
                          चपाती + चावल
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div className="Parvatisection">
                    <Parvatireview />
                  </div>

                  {/* Contact details */}
                  <div className="Parvatifooter">
                    <h4>Contact details</h4>
                    <p>Wardens:</p>
                    <p>Dr. Divya Sharma: 9816234868(For B.tech)</p>
                    <p>Ms. Sonam Vardhan: 8628857497(For ITI)</p>
                    <p>Ms. RakhiSharma: 9418214595(For Polytechnic)</p>

                    <p style={{ textAlign: "center" }}>
                      &copy; 2023 Parvati Hostel. All rights reserved.
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

export default Parvati;
