import "./HeaderStyle.css";

import { Link } from "react-router-dom";

import LogoBank from '../../Assets/Images/LogoBank.png'
import LogoBankBlue from '../../Assets/Images/LogoHeaderBlue.png'

import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
import Button from "../../Components/Button/Button";
import A from "../../Components/A_Header/A_Header";

import LandingPage from "../../Pages/LandingPage/LandingPage";

const Header = () => {

  return (
    <div className={"header-container bg-primary"}>
      <Link to="/">
        <img src={LogoBankBlue} alt="Logo" />
      </Link>


      <div className="header-links">
        
        <A text={"About EzBank"} href={""} />
        
        <A text={"Cards"} href={""} />
        
        <A text={"Investments"} href={""} />
        
        <Button 
          text={"Log In"}
          tag={"btn_normal box-primary-empty bd-primary-thin"}
          href={'./login?type=1'}
        />
        
        <Button
          text={"Sign up"}
          tag={"btn_normal box-primary bd-primary-thin"}
          href={'./login?type=2'}
        />
      </div>
      
      <ToggleTheme 
      />

    </div>
  );
};

export default Header;
