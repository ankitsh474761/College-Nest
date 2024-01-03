import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UmarCottagereview from "../AccomodationReviews/UmarCottagereview";
import "./UmarCottage.css";

const UmarCottage = () => {
  const [data, setData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("/dataofumar");

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
                <div className="UmarCottagecontainer">
                  <div className="UmarCottagesection">
                    <div className="UmarCottagedescription ">
                      <h1>Umar Cottage</h1>
                    </div>
                  </div>

                  <div className="UmarCottagesection">
                    <div className="UmarCottagecard">
                      <div className="UmarCottagecard-body">
                        <div className="UmarCottageimage-container">
                          <img src="images/Umar1.jpg" alt="Umar Cottage" />
                          <img src="images/Umar2.jpg" alt="Umar Cottage" />
                        </div>
                        <div className="UmarCottageroom-description">
                          <p>
                            The Umar Cottage Commonly known as
                            <strong> {e.accomodation} </strong> is located
                            within the 500m of college premises. It provides
                            rooms for both boys and girls. This building also
                            has necessities shops of food and stationary near to
                            it.
                          </p>
                          <br />
                          <strong> Rooms Description: </strong> Single room with
                          a open kitchen(within the room) seperate washrooms
                          attached with each room.
                          <br />
                          Total number of rooms in the Building are : {e.rooms}
                          <br />
                        </div>
                        <div className="UmarCottagefacilities">
                          <h2>Facilities they Provide : </h2>
                          <ul>
                            <li> Fans </li>
                            <li>
                              {" "}
                              Electricity bill separately (based on units used){" "}
                            </li>
                            <li> Water supply is available 24/7 </li>

                            <li>
                              Shop for stationary and food items available near
                              the building
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

                  <div className="UmarCottageUmarCottagesection">
                    <UmarCottagereview />
                  </div>

                  <div className="UmarCottagefooter">
                    <h4>Contact details</h4>
                    <p>Owner's name: Mr.Anjum</p>

                    <p>Contact Number:9418942786(Also Available on Whatsapp)</p>

                    <p style={{ textAlign: "center" }}>
                      &copy; 2023 Umar Cottage . All rights reserved.
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

export default UmarCottage;
