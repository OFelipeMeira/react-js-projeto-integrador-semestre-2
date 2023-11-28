import "./HeaderStyle.css";

import { Link } from "react-router-dom";

import LogoBlue from "../../Assets/Images/LogoBlue.png";
import menuHamburguer from "../../Assets/Images/menuHamburguer.png";
import ToggleTheme from "../../Components/ToggleTheme/ToggleTheme";
import Button from "../../Components/Button/Button";

import { useState, useContext, useEffect } from "react";

import { GlobalContext } from "../../Util/Context";

const Header = () => {
   const theContext = useContext(GlobalContext);
   const { setState } = theContext;
   const { token } = theContext.contextState;

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

   useEffect(() => {
      console.log("token");
      console.log(token);
   }, []);

   return (
      <div className={"header bg-primary"}>
         <Link className="header__logo" to="/">
            <img className="header__img" src={LogoBlue} alt="Logo" />
         </Link>

         <div className={`header-links ${hamburguer} `}>
            {/* <Link className="header__a" to="/about-ezbank" target="">
          About EzBank
        </Link> */}
            <Link className="header__a" to="/card" target="">
               EzCard
            </Link>
            <Link className="header__a" to="/investments" target="">
               Investments
            </Link>

            {token ? (
               <>
                  <Link to="/" style={{ textDecoration: 0 }}>
                     <Button
                        text={"Logout"}
                        tag={"btn_normal box-logout-empty bd-error-thin"}
                        href={"./login?type=1"}
                     />
                  </Link>
               </>
            ) : (
               <>
                  <Link to="/login?type=2" style={{ textDecoration: 0 }}>
                     <Button
                        text={"Log In"}
                        tag={"btn_normal box-primary-empty bd-primary-thin"}
                        href={"./login?type=1"}
                     />
                  </Link>

                  <Link to="/login?type=1" style={{ textDecoration: 0 }}>
                     <Button
                        text={"Sign up"}
                        tag={"btn_normal box-primary bd-primary-thin"}
                     />
                  </Link>
                  <ToggleTheme />
               </>
            )}

         </div>

         <img
            className="menu"
            src={menuHamburguer}
            onClick={hide_show}
            alt=""
         />
      </div>
   );
};

export default Header;
