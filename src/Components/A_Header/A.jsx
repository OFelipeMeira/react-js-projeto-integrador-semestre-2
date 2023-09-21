import "./A_style.css";
import "../../Assets/Styles/index.css"

const A = (props) => {
  const { href, text, target } = props;

  return (
    <a
      className="a-animation"
      href={href}
      target={target}
    >
      {text}
    </a>
  );
};

export default A;
