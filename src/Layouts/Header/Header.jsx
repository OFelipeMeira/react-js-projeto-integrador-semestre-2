import "./HeaderStyle.css";

import { Link } from "react-router-dom";

import LogoBlue from "../../Assets/Images/LogoBlue.png";
import menuHamburguer from "../../Assets/Images/menuHamburguer.png";

import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
import Button from "../../Components/Button/Button";

import { useState } from "react";

const Header = () => {
  const [hamburguer, setHamburger] = useState("menu-hide");

  const hide_show = (e) => {
    if (e.target.className === "menu") {
      if (hamburguer === "menu-show") {
        setHamburger("menu-hide");
      } else {
        setHamburger("menu-show");
      }
    }
  };

  return (
    <div className={"header bg-primary"}>
      <Link className="header__logo" to="/">
        <img className="header__img" src={LogoBlue} alt="Logo" />
      </Link>

      <div className={`header-links ${hamburguer} `}>
        <a className="header__a" href="./about-ezbank" target="">
          About EzBank
        </a>
        <a className="header__a" href="/card" target="">
          EzCard
        </a>
        <a className="header__a" href="/investments" target="">
          Investments
        </a>

        <Link to='/login?type=2' style={{textDecoration:0}}>
          <Button
            text={"Log In"}
            tag={"btn_normal box-primary-empty bd-primary-thin"}
            href={"./login?type=1"}
          />
        </Link>

        <Link to='/login?type=1' style={{textDecoration:0}}>
          <Button
            text={"Sign up"}
            tag={"btn_normal box-primary bd-primary-thin"}
          />
        </Link>
        <ToggleTheme />
      </div>

      <img className="menu" src={menuHamburguer} onClick={hide_show} alt="" />
    </div>
  );
};

export default Header;
