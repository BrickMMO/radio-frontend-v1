import {Link} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Nav() {
  return (
    <nav className="nav-flex-container" >

    <a href="#"><img id="logoBR" src="images/BR.svg" width="95" height="140" alt="a logo comprised of the initials B R"></img></a>
   
   <div id="main-menu">
    <ul>
        <Link to="/" className="nav-link">RADIO</Link>
        <Link to="/About" className="nav-link">ABOUT</Link>
        {/* <Link to="/contact" className="nav-link">CONTACT</Link> */}
      </ul>
   </div>

    </nav>
  );
}