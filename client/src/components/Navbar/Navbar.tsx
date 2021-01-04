import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
          <div className="container">
        <form className="container-fluid justify-content-start">
          <Link className="btn btn-outline-success m-2" to="/" >Home</Link>
          <Link className="btn btn-outline-danger ml-auto" to="/new-item" >New Project</Link>
        </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
