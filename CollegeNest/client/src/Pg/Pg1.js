import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Pg1.css";
const Pg1 = () => {
  const dbemail = localStorage.getItem("dbemail");
  const email = localStorage.getItem("email");

  return (
    <div>
      <Navbar />
      <div className="pg section">
        <div className="pg description text-center">
          <h1>Description</h1>
        </div>
        <p>
          The PG facility is provided for both boys and girls and most of the pg
          are located near the college campus. The PGs also provide various
          facilities along with a full 3-time meal. Come Let's take a look....{" "}
        </p>
      </div>

      <section className="pg services">
        <div className="pg container text-center py-5">
          {/* <h1>About our Services</h1> */}

          <div className="pg row">
            <div className="pg col-md-3 ">
              <div className="pg card text-center ">
                <div className="pg card-body ">
                  <img src="images/hostel1.png" />
                  <h1>Deepak PG </h1>
                  <p>
                    The Deepak PG is 4-storey building located near ABVGIET
                    Campus. This PG provides all the necessary facilities and is
                    for BOYS.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/deepakpg"}>
                        <a id="btn2" className="pg btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className="pg btn btn-sm btn-primary">Click Here</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pg col-md-3">
              <div className="pg card text-center">
                <div className="pg card-body">
                  <img src="images/pg.png" />
                  <h1>Suvidha PG</h1>
                  <p>
                    The Suvidha PG is 3 storey building located near the ABVGIET
                    college campus. It is exclusively for BOYS. It is yellow in
                    color.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/suvidhapg"}>
                        <a id="btn2" className="pg btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className="pg btn btn-sm btn-primary">Click Here</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pg col-md-3">
              <div className="pg card text-center">
                <div className="pg card-body">
                  <img src="images/room.png" />
                  <h1>Sharma PG</h1>
                  <p>
                    The Sharma PG is the three-storey building located within
                    100 meters of the college campus. This pg is for both boys
                    and girls.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/sharmapg"}>
                        <a id="btn2" className="pg btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className="pg btn btn-sm btn-primary">Click Here</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pg col-md-3">
              <div className="pg card text-center">
                <div className="pg card-body">
                  <img src="images/room.png" />
                  <h1>Chauhan PG</h1>
                  <p>
                    The Chauhan PG is located at the end of college campus and
                    is available for both boys and girls. This pg also have an
                    inbuilt gym.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/chauhanpg"}>
                        <a id="btn2" className="pg btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className="pg btn btn-sm btn-primary">Click Here</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pg services">
        <div className="pg container text-center">
          <div className="pg row">
            <div className="pg col-md-3">
              <div className="pg card text-center">
                <div className="pg card-body">
                  <img src="images/hostel1.png" />
                  <h1>ShivShakti PG</h1>

                  <p>
                    The Shivshakti PG is the three-storey building with all the
                    necessary facilities and is Exclusively for boys. It is near
                    the ABVGIET campus and is red color.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/shivshaktipg"}>
                        <a id="btn2" className="pg btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className="pg btn btn-sm btn-primary">Click Here</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pg col-md-3">
              <div className="pg card text-center">
                <div className="pg card-body">
                  <img src="images/pg.png" />
                  <h1>Thakur PG</h1>
                  <p>
                    The Thakur PG is a 4-storey building located near the
                    ABVGIET Campus. This PG provides all the necessary
                    facilities and is exclusively for GIRLS.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/thakurpg"}>
                        <a id="btn2" className="pg btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className="pg btn btn-sm btn-primary">Click Here</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pg col-md-3">
              <div className="pg card text-center">
                <div className="pg card-body">
                  <img src="images/room.png" />
                  <h1>Keperate PG</h1>
                  <p>
                    The Keperate PG is a 3-storey building located near the
                    ABVGIET Campus. This PG provides all the necessary
                    facilities and is exclusively for BOYS.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/keperate"}>
                        <a id="btn2" className="pg btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className="pg btn btn-sm btn-primary">Click Here</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pg col-md-3">
              <div className="pg card text-center">
                <div className="pg card-body">
                  <img src="images/room.png" />
                  <h1>Ibydene PG</h1>
                  <p>
                    The Ibydene PG is located within 500m of college Premises.
                    This pg provides all the basic facilities along with gym(for
                    both boys and girls) and the pg is only for boys.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/ibydene"}>
                        <a id="btn2" className="pg btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className="pg btn btn-sm btn-primary">Click Here</a>
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

export default Pg1;
