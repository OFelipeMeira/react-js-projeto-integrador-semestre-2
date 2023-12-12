import "./SectionMainStyle.css";

import Title from "../../Components/TitleMain/Title";
import TitleSub from "../../Components/TitleSub/TitleSub";
import Button from "../../Components/Button/Button";

import { Link } from "react-router-dom";

// Component create to create a div to show info:
// the components works with props, below there is each prop followed by the atrbute it refers
const Section = (props) => {
  const {
    title,                 // title for this div
    subTitle,              // text to be show under the title
    img,                   // image from the div
    textOnRight = false,   // boolean to set all the text on right, or left
    tag = "bg-primary",    // custom tags to set addicional classes, defined in './Assets/Styles/index.css'
    btnText,               // Text of the button
    btnHref,               // URL to redirect when click the button
    textJustify = "right", // text aligment
    haveButton = true,     // boolen if there is a button, or not
  } = props;

  const margin = textJustify === "right" ? "none" : "10%"; // margin to the texts

  return (
    <div className={`Section__Main ${tag}`}>
      {textOnRight === false ? (
        <article>
          <section className="Section__item">
            <Title text={title} justify={textJustify} />
            <TitleSub text={subTitle} />

            {haveButton === true ? (
              <Link
                to={btnHref}
                style={{
                  width: "fit-content",
                  alignSelf: textJustify,
                  marginRight: margin,
                }}
              >
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
            <img className="Section__img" src={img} alt="" />
          </section>
        </article>
      ) : (
        <article className={`Section__Main ${tag}`}>
          <section className="Section__item">
            <img className="Section__img" src={img} alt="" />
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
