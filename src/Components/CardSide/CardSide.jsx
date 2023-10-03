import "./CardSideStyle.css";

const CardSide = (props) => {
  const { title, img, subTitle } = props;
  return (
    <div className="CardSide">
      <img className="CardSide__img" src={img} alt="" />
      <div>
        <h1 className="CardSide__title">{title}</h1>
        <h2 className="CardSide__sub">{subTitle}</h2>
      </div>
    </div>
  );
};

export default CardSide;
