import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Room1.css";

const Room1 = () => {
  const dbemail = localStorage.getItem("dbemail");
  const email = localStorage.getItem("email");

  return (
    <div>
      <Navbar />
      <div className=" roome section">
        <div className=" roome description text-center">
          <h1>Description</h1>
        </div>
        <p>
          {" "}
          Rooms Provide an affordable range of rent and other facilities as
          well. Except the food, that you have to manage yourself. But this is
          much budget friendly than PGs.{" "}
        </p>
      </div>

      <section className=" roome services">
        <div className=" roome container text-center py-5">
          <div className=" roome row">
            <div className=" roome col-md-3">
              <div className=" roome card text-center">
                <div className=" roome card-body">
                  <img src="images/hostel1.png" />
                  <h1>CD </h1>
                  <p>
                    The CD building is located near to the college entry gate.
                    It provides rooms for both boys and girls. This building
                    also has necessities shops of food and stationary near to
                    it.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/cd"}>
                        <a id="btn2" className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className=" roome col-md-3">
              <div className=" roome card text-center">
                <div className=" roome card-body">
                  <img src="images/pg.png" />
                  <h1>KD </h1>
                  <p>
                    The KD building is located near to the college Campus. It
                    provides rooms for both boys and girls. This building is
                    located near to hostels. It provides all the necessary
                    facilities.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/kd"}>
                        <a id="btn2" className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className=" roome col-md-3">
              <div className=" roome card text-center">
                <div className=" roome card-body">
                  <img src="images/room.png" />
                  <h1>Green Building</h1>
                  <p>
                    The Green Building is opposite to the barricade of the
                    college.
                  </p>
                  The building has the basic needs shop with food items and
                  stationary near to it. Vacancies available !
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/green"}>
                        <a id="btn2" className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className=" roome col-md-3">
              <div className=" roome card text-center">
                <div className=" roome card-body">
                  <img src="images/room.png" />
                  <h1>White Building</h1>
                  <p>
                    The White Building is opposite to the barricade of the
                    college.
                  </p>
                  The building has the basic needs shop with food items and
                  stationary near to it. Vacancies available !
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/white"}>
                        <a id="btn2" className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" roome services">
        <div className=" roome container text-center">
          <div className=" roome row">
            <div className=" roome col-md-3">
              <div className=" roome card text-center">
                <div className=" roome card-body">
                  <img src="images/hostel1.png" />
                  <h1>Pink Building</h1>
                  <p>
                    The Pink Building is opposite to the barricade of the
                    college.
                  </p>
                  The building has the basic needs shop with food items and
                  stationary near to it. Vacancies available !
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/pink"}>
                        <a id="btn2" className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className=" roome col-md-3">
              <div className=" roome card text-center">
                <div className=" roome card-body">
                  <img src="images/pg.png" />
                  <h1>Umar Cottage </h1>
                  <p>
                    {" "}
                    The Umar Cottage is located near the college premises. It
                    provides rooms for both boys and girls. This building also
                    has necessities shops of food and stationary near to it.{" "}
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/umar"}>
                        <a id="btn2" className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className=" roome btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Room1;
