import React from "react";
import Navbar from "../components/Navbar";
import "./Hostel1.css";
import { Link } from "react-router-dom";

const Hostel1 = () => {
  const dbemail = localStorage.getItem("dbemail");
  const email = localStorage.getItem("email");
  return (
    <div className="hos">
      <Navbar />
      <div className="hostel host">
        <div className=" hostel saraswati">
          <img
            className=" hostel animated delay-0.3s animate__bounceInLeft"
            src="/images/abvgiet2.jpeg"
            alt=""
          />
        </div>
        <div className=" hostel parvati">
          <img
            className=" hostel animated delay-0.6s animate__bounceInDown"
            src="/images/abvgiet3.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className=" hostel section">
        <div className=" hostel description text-center">
          <h1>Description</h1>
        </div>
        <p>
          {" "}
          Hostel facility is provided by college for girls to support them
          financially and provide a secure environment Our college have two
          hostels for girls students only.
        </p>
      </div>
      <section className=" hostel services">
        <div className=" hostel container text-center py-5">
          <h1>About our Services</h1>
          <div className=" hostel row">
            <div className=" hostel col-md-3">
              <div className=" hostel card text-center anki">
                <div className=" hostel card-body">
                  <img src="images/hostel1.png" />
                  <h1>Saraswati</h1>
                  <p>
                    The Saraswati is located within 100m of college campus and
                    it is exclusively for girls.
                  </p>
                  <p>Click here to see more...</p>
                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/saraswati"}>
                        <a className=" hostel btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className=" hostel btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className=" hostel col-md-3">
              <div className=" hostel card  text-center anki" id="par">
                <div className=" hostel card-body">
                  <img src="images/pg.png" />
                  <h1>Parvati</h1>
                  <p>
                    Parvati is located within 100m of college campus and it is
                    exclusively for girls.
                  </p>
                  <p>Click here to see more...</p>

                  {email && dbemail && dbemail != null && email != null ? (
                    <>
                      <Link to={"/parvati"}>
                        <a id="btn2" className=" hostel btn btn-sm btn-primary">
                          Click Here
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <a className=" hostel btn btn-sm btn-primary">
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

export default Hostel1;
