import "./AStyle.css";

const A = (props) => {
  const { href, text, target, tag } = props;

  return (
    <a
      className={`a-animation ${tag}`}
      href={href}
      target={target}
    >
      {text}
    </a>
  );
};

export default A;
