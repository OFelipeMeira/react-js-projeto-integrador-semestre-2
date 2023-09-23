import "./SectionGraphsStyle.css";
import img from '../../Assets/Images/LogoBank.png'
import CardSide from "../../Components/CardSide/CardSide";

const SectionGraphs = () => {
  return (
    <div className="SectionGraphs">
        
        <CardSide
        img={img}
        title="My Balance"
        subTitle="$99.999,99"
        />

        <CardSide
        img={img}
        title="My Investments"
        subTitle="$100.000,00"
        />

    </div>
  );
};

export default SectionGraphs;
