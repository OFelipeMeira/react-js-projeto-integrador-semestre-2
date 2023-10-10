import "./SectionMainStyle.css";

import Title from "../../Components/TitleMain/Title";
import TitleSub from "../../Components/TitleSub/TitleSub";
import Button from "../../Components/Button/Button";

import { Link } from "react-router-dom";

const Section = (props) => {
  const {
    title,
    subTitle,
    img,
    textOnRight = false,
    tag = "bg-primary",
    btnText,
    btnHref,
    textJustify="right",
    haveButton = true,
  } = props;

  const margin = textJustify==="right"? "none": '10%'



  return (
    <div className={`Section__Main ${tag}`}>
      {textOnRight === false ? (
        <article>
          <section className="Section__item">
            <Title text={title} justify={textJustify} />
            <TitleSub text={subTitle} />

            {haveButton === true ? (
              <Link to={btnHref} style={{width:'fit-content', alignSelf:textJustify, marginRight:margin  }}>
                <Button
                  tag={"box-primary btn_1"}
                  text={btnText}
                  href={btnHref}
                />
              </Link>
            ) : (
              <></>
            )}
          </section>
          <section className="Section__item">
            <img className="Section__img" src={img} alt=""/>
          </section>
        </article>
      ) : (
        <article className={`Section__Main ${tag}`}>
          <section className="Section__item">
            <img className="Section__img" src={img} alt=""/>
          </section>
          <section className="Section__item">
            <Title text={title} />
            <TitleSub text={subTitle} />
            {haveButton === true ? (
              <Link to={btnHref}>
                <Button
                  tag={"box-primary btn_1"}
                  text={btnText}
                  href={btnHref}
                />
              </Link>
            ) : (
              <></>
            )}
          </section>
        </article>
      )}
    </div>
  );
};
export default Section;
