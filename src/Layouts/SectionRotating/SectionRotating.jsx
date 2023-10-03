import "./SectionRotatingStyle.css";
import LogoBank from "../../Assets/Images/LogoBlue.png";
import Gif from "../../Assets/Images/gifTeste.gif";
import Buttom from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const SectionRotating = () => {
  return (
    <div className="SectionRotating bg-secondary">

        <img className="Aside-img--mobile" src={Gif} alt="" />
      
      {/* Object in the center: */}
      <div className="box no-select ">
        {/* itens: */}
        <span
          style={{ "--i": 1 }}
          className="no-select bd-primary-bold bd-rd-2"
        >
          <img className="bd-rd-2" src={LogoBank} alt="" />
        </span>
        <span
          style={{ "--i": 2 }}
          className="no-select bd-primary-bold bd-rd-2"
        >
          <img className="bd-rd-2" src={Gif} alt="" />
        </span>
        <span
          style={{ "--i": 3 }}
          className="no-select bd-primary-bold bd-rd-2"
        >
          <img className="bd-rd-2" src={LogoBank} alt="" />
        </span>
        <span
          style={{ "--i": 4 }}
          className="no-select bd-primary-bold bd-rd-2"
        >
          <img className="bd-rd-2" src={Gif} alt="" />
        </span>
        <span
          style={{ "--i": 5 }}
          className="no-select bd-primary-bold bd-rd-2"
        >
          <img className="bd-rd-2" src={LogoBank} alt="" />
        </span>
        <span
          style={{ "--i": 6 }}
          className="no-select bd-primary-bold bd-rd-2"
        >
          <img className="bd-rd-2" src={Gif} alt="" />
        </span>
        <span
          style={{ "--i": 7 }}
          className="no-select bd-primary-bold bd-rd-2"
        >
          <img className="bd-rd-2" src={LogoBank} alt="" />
        </span>
        <span
          style={{ "--i": 8 }}
          className="no-select bd-primary-bold bd-rd-2"
        >
          <img className="bd-rd-2" src={Gif} alt="" />
        </span>
      </div>

      <div className="Aside-Text">
        <h1 className="Aside-Text__title">
          Experience Financial Freedom with Our Premium Credit Cards.
        </h1>
        <ul>
          <li className="Aside-Text__item">Security</li>
          <li className="Aside-Text__item">Flexible Payment Options</li>
          <li className="Aside-Text__item">Exclusive Discounts</li>
          <li className="Aside-Text__item">Digital Management</li>
          <li className="Aside-Text__item">Credit Building</li>
          <li className="Aside-Text__item">Rewards</li>
        </ul>
        <Link to="/" className="Aside-Text__btn">
          <Buttom text="Get in tune" />
        </Link>
      </div>
    </div>
  );
};

export default SectionRotating;
