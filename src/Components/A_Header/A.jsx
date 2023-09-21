import "./AStyle.css";
// import "../../Assets/Styles/Index.css"

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
