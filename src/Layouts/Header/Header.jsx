import "./HeaderStyle.css";

import { Link } from "react-router-dom";

// import LogoBank from "../../Assets/Images/LogoBank.png";
import LogoBankBlue from "../../Assets/Images/LogoHeaderBlue.png";

import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
import Button from "../../Components/Button/Button";

// import LandingPage from "../../Pages/LandingPage/LandingPage";
import { useState } from "react";

const Header = () => {

  const [hamburguer, setHamburger] = useState('show')

  const hide_show = () =>{
    if (hamburguer ==='show') setHamburger('hide')
    else setHamburger('show')
  }

  return (
    <div className={"header bg-primary"}>
      <Link to="/">
        <img className="header__logo" src={LogoBankBlue} alt="Logo" />
      </Link>

      <div className="header-links">
        <a className="header__a" href="./about-ezbank" target="">
          About EzBank
        </a>
        <a className="header__a" href="/cards" target="">
          Cards
        </a>
        <a className="header__a" href="/investments" target="">
          Investments
        </a>

        <Button
          text={"Log In"}
          tag={"btn_normal box-primary-empty bd-primary-thin"}
          href={"./login?type=1"}
        />

        <Button
          text={"Sign up"}
          tag={"btn_normal box-primary bd-primary-thin"}
          href={"./login?type=2"}
        />
      <ToggleTheme />
      </div>


      <div className="menu-hamburguer" onClick={hide_show}>
        <span className={`hamburguer-item hamburguer-${hamburguer}`}></span>
        <span className={`hamburguer-item hamburguer-${hamburguer}`}></span>
        <span className={`hamburguer-item hamburguer-${hamburguer}`}></span>
      </div>
    </div>
  );
};

export default Header;
