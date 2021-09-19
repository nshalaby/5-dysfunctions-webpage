/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react"; 
import "./header.css";   

import logo from './logo-white.png'
// import VideoPlayer from "react-video-js-player";

 
 

export default function Header() {


   


  return (
    <header className="Header">
        <nav className="Nav">   
          <img id="logo" src={logo} />


          <a href="/">Home</a>
         
          <a href="https://www.tablegroup.com/topics-and-resources/teamwork-5-dysfunctions/">Resources</a>
        </nav> 

    </header>
  );
}
