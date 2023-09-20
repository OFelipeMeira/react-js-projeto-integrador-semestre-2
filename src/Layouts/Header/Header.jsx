import React from "react";
import "./style.css";
import LogoBank from '../../Assets/Images/LogoBank.png'
import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
import Button from "../../Components/Button/Button";

const Header = () => {

  return (
    <div className="header-container">
      <img src={LogoBank} alt="Logo" />

      <div className="header-links">
        <a className="a-animation" href="./">About EzBank</a>
        <a className="a-animation" href="./">Cards</a>
        <a className="a-animation" href="./">Investments</a>
        <Button text={"Log In"} type={"box-primary-empty"}/>
        <Button text={"Sign up"} type={"box-primary"}/>
      </div>
      
      <ToggleTheme type={"box-primary"} />


    </div>
  );
};

export default Header;
