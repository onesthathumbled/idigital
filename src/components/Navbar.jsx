import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import TouchAppIcon from "@mui/icons-material/TouchApp";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="Navbar">
      <div>
        <Link className="Logo">iDigital</Link>
      </div>

      <div>
        <Link className="Links">Home</Link>
        <Link className="Links">About</Link>
        <Link className="Links">Services</Link>
        <Link className="Links">Blog</Link>
        <Link className="Links">Portfolio</Link>
        <Link className="Links">Contact</Link>
      </div>

      <div
        className={isHovered ? "Get-In-Touch-Hovered" : "Get-In-Touch"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link className={isHovered ? "Touch-Hovered" : "Touch"}>
          Get in Touch
        </Link>
        <TouchAppIcon
          className={isHovered ? "TouchIcon-Hovered" : "TouchIcon"}
        />
      </div>
    </div>
  );
};

export default Navbar;
