import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="heading text-[30px] ">Saksham raghuvanshi</h1>
          <div className="flex items-center gap-5 font-[700]">
            <Link to="/home">Home</Link>
            <Link to="/home">Contact</Link>
            <Link to="/home">Experience</Link>
            <Link to="/home">Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
