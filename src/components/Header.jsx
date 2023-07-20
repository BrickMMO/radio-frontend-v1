import {Link} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from "./Nav";


export default function Header() {
  return (
    <header className="border-box" id="header">  
    <Nav />
    </header>
  );
}