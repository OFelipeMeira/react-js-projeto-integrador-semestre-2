import "./HeaderStyle.css";

import LogoBank from '../../Assets/Images/LogoBank.png'

import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
import Button from "../../Components/Button/Button";
import A from "../../Components/A_Header/A_Header";

const Header = () => {

  return (
    <div className={"header-container bg-primary"}>
      <img src={LogoBank} alt="Logo" />


      <div className="header-links">
        
        <A text={"About EzBank"} href={""} />
        
        <A text={"Cards"} href={""} />
        
        <A text={"Investments"} href={""} />
        
        <Button 
          text={"Log In"}
          tag={"btn_normal box-primary-empty bd-primary-thin"}
        />
        
        <Button
          text={"Sign up"}
          tag={"btn_normal box-primary bd-primary-thin"}
        />
      </div>
      
      <ToggleTheme 
        tag={"box-primary"}
      />

    </div>
  );
};

export default Header;
