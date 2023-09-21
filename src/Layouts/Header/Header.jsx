import "./Header_style.css";
import { useEffect, useState } from "react";

import LogoBank from '../../Assets/Images/LogoBank.png'

import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
import Button from "../../Components/Button/Button";
import A from "../../Components/A_Header/A";

const Header = () => {

  return (
    <div className={"header-container"}>
      <img src={LogoBank} alt="Logo" />


      <div className="header-links">
        <A text={"About EzBank"} href={""} />
        <A text={"Cards"} href={""} />
        <A text={"Investments"} href={""} />
        <Button text={"Log In"}  size={"btn_normal"} type={"box-primary-empty"} />
        <Button text={"Sign up"} size={"btn_normal"} type={"box-primary"} />
      </div>
      
      <ToggleTheme type={"box-primary"} />

    </div>
  );
};

export default Header;
