import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";

const About = () => {
  return (
    <div className="AAA">
      <Navbar />
      <h1>ABOUT</h1>
      <div className="Aboutcontainer">
        <div className="main-content">
          <div className="welcome-text">
            Welcome to "Campus Nest," where your quest for the perfect
            accommodation begins...
          </div>
          <br />
          Welcome to "Campus Nest," where your quest for the perfect
          accommodation begins. "Campus Nest" isn't just a platform; it's a
          community-driven solution crafted to enhance your college experience.
          Our mission is clear – to provide an intuitive, efficient, and
          transparent accommodation search experience tailored for college
          students. We understand the challenges you face when stepping into a
          new academic chapter, and we're here to make your transition seamless
          and stress-free. What sets us apart? Every feature, from the inviting
          Home Page to the interactive Navigation Pages and the detailed
          Information Page, is designed with you in mind. "Campus Nest" is more
          than a search platform; it's a community hub. Our Comments and Rating
          system allows you to share your experiences and learn from others,
          creating a supportive network of students helping students. Your
          security is our priority. With advanced measures like bcrypt password
          hashing and secure authentication, we ensure your data is handled with
          the utmost care. Looking ahead, our roadmap includes exciting
          developments like an online booking system, ensuring that your journey
          with "Campus Nest" remains cutting-edge and convenient. Whether you're
          a student seeking accommodation or an accommodation owner looking to
          connect with students, "Campus Nest" welcomes you to join our vibrant
          community. Together, let's redefine the accommodation search
          experience and make finding your home away from home an enjoyable
          adventure. At "Campus Nest," we're not just finding accommodations;
          we're building a home for students.
          <br />
          <br />
          <strong>
            {" "}
            <em> Discover. Connect. Nest. </em>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default About;
