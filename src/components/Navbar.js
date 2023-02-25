import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar position-fixed">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo" onClick={() => navigate("/")}/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
        </div>
      </div>
      <div className="rightSide">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#fd5f07",
                }
              : { color: "white" }
          }
        >
          {" "}
          Home{" "}
        </NavLink>
        <button onClick={toggleNavbar}>{/* <ReorderIcon /> */}</button>
      </div>
    </div>
  );
}

export default Navbar;
