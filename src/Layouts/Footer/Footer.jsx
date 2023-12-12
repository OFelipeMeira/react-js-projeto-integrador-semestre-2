import "./FooterStyle.css";
import LogoWhite from "./../../Assets/Images/LogoWhite.png";

import { useContext } from "react";
import { GlobalContext } from "../../Util/Context";
import { Link } from "react-router-dom";

// Footer from the app
const Footer = (props) => {
  // type of the footer - full sized or slim
  const { tag, type = "complete" } = props;
  const column1 = "";

  // global variables
  const theContext = useContext(GlobalContext);
  const { theme } = theContext.contextState;

  return (
    <div className={`Footer ${tag} ${type}`}>
      <img
        className={`Footer__logo filter-${theme}`}
        src={LogoWhite}
        alt="Logo"
      />

      {type === "complete" ? (
        <>
          <ul className="Footer__list">
            <h3 className="Footer__title">{column1}</h3>
            <li className="Footer__list_item">
              <Link className="Footer__link" to="/">
                Home
              </Link>
            </li>
            <li className="Footer__list_item">
              <Link className="Footer__link" to="/card">
                Cards
              </Link>
            </li>
            <li className="Footer__list_item">
              <Link className="Footer__link" to="/investments">
                Investments
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <></>
      )}
      {type === "slim" ? (
        <>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Footer;
