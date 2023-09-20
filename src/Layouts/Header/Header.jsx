import React from "react";
import "./style.css";
import LogoBank from '../../Assets/Images/LogoBank.png'
import LogoEzBank from '../../Assets/Images/LogoEzBank.png'

const Header = () => {
  return (
    <div className="header-container">
      {/* <img src="../Assets/Images/LogoHeader.png" alt="Logo" /> */}
      <img src={LogoEzBank} alt="Logo" />

      <div className="header-links">
        <a href="">About EzBank</a>
        <a href="">Cards</a>
        <a href="">Investments</a>
        <button id="login">Log In</button>
        <button className="signup">New Account</button>
      </div>
    </div>
  );
};

export default Header;
