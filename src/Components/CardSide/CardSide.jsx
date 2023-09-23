import "./CardSideStyle.css";

const CardSide = (props) => {
  const { title, img, subTitle } = props;
  return (
    <div className="CardSide">
      <img src={img} alt="" />
      <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    </div>
  );
};

export default CardSide;
