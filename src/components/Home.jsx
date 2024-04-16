import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="Hero">
        <p>DIGITAL</p>
        <p className="Different">TAILORED TECH</p>
        <p>DESIGN &</p>
        <p>DEVELOPMENT</p>
        <p>AGENCY</p>
      </div>

      <div className="About-Us">
        <p className="About-Title">About us</p>
        <p className="About-Text">
          We're the{" "}
          <span>
            team of skilled
            <br /> product designers
          </span>{" "}
          with strong focus on producing high quality & impactful digital
          experience.
        </p>
      </div>

      <div className="What-We-Do">
        <div className="WWD-Container">
          <p className="WWD-Title">What We Do</p>
        </div>

        <div className="WWD-Container2">
          <p>
            <span>Website</span> Design & Development
          </p>
          <p>
            <span>Mobile</span> App Design & <br /> Development
          </p>
          <p>
            <span>Game</span> Design & Development
          </p>
          <p>
            <span>Branding</span>
          </p>
          <p className="Last">
            <span>Digital Marketing</span>
          </p>
        </div>
      </div>

      <div className="Clients-Work">
        <p className="Clients-Title">Clients Work</p>
        <p className="Clients-Text">
          We collaborate with some of the{" "}
          <span>cutting-edge business titans</span> to assist them create
          top-noth goals.
        </p>
      </div>

      <div className="What-Our-Client-Says"></div>

      <div className="Internation-Brands"></div>

      <div className="Blogs"></div>
    </div>
  );
};

export default Home;
