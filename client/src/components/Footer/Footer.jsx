import React from "react";
import "./Footer.css";
import { NavLink} from "react-router-dom"
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
        {/* <b style={{fontSize:"25px"}}>Trave🅛🅞🅢🅣</b> */}
         <img src="./nl.jpeg" alt="logo" width={100} />
         
          <span className="secondaryText">
            "Travel far enough, you meet yourself" <br />
            Visit the best Places in India.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">124,dewas 455001</span>
          <div className="flexCenter f-menu">
            <span><NavLink to="/place">Places</NavLink></span>
            <span><NavLink to="/guide">Services</NavLink></span>
            <span><NavLink to="/aboutus">About Us</NavLink></span>
            <span><NavLink to="/addguide" style={{color:"darkred"}}>Join As Guide</NavLink></span>
            <span><NavLink to={"/baat"} style={{
  cursor:"pointer",
  top:"520px",
  backgroundColor:"green",
  borderRadius:"50%",
  color:"white",
  right:"5px",
  height:"30px",
  width:"55px",
  paddingLeft:"5px",
  textalign:"center",
  alignItems:"center",
  position:"fixed",
}}><b>Chat </b> </NavLink></span>
          </div>
        </div>
        <p>© 2024 Piyush . All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
