import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Saraswati from "../Hostel/Saraswati";
import Parvati from "../Hostel/Parvati";

const Services = () => {
  return (
    <div className="service">
      <section class="services py-3">
        <div class="container con">
          <h1>About our Services</h1>
          <div class="row">
            <div class="col-md-4 ">
              <div class="card text-center">
                <div class="card-body">
                  <img src="images/hostel1.png" />
                  <h1 className="head">HOSTEL</h1>
                  <p>
                    Hostel facility is provided by college for girls to support
                    them financially and provide a secure environment Our
                    college have two hostels for girls students only.
                  </p>
                  <Link to={"hostel1"}>
                    <a class="btn btn-sm btn-primary">Click Here</a>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card text-center">
                <div class="card-body">
                  <img src="images/pg.png" />
                  <h1 className="head">PG</h1>
                  <p>
                    The PG facility is provided for both boys and girls and most
                    of the pg are located near the college campus. The PGs also
                    provide various facilities along with a full 3-time meal.
                    Come Let's take a look....
                  </p>
                  <Link to={"pgs"}>
                    <a class="btn btn-sm btn-primary">Click Here</a>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card text-center">
                <div class="card-body">
                  <img src="images/room.png" />
                  <h1 className="head">ROOMS</h1>
                  <p>
                    Rooms Provide an affordable range of rent and other
                    facilities as well. Except the food, that you have to manage
                    yourself. But this is much budget friendly than PGs.
                  </p>
                  <Link to={"romi1"}>
                    <a class="btn btn-sm btn-primary">Click Here</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dis">
        <marquee id="disclaimer" scrollamount="10" bgcolor="black">
          <span>Disclaimer</span> : The information contained on this website is
          for general information purpose only. This information is not valid
          for any legal claim.
        </marquee>
      </div>
    </div>
  );
};

export default Services;
