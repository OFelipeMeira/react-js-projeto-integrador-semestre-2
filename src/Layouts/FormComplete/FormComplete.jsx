import "./FormCompleteStyle.css";
import FormComponent from "../../Components/FormComponent/FormComponent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormLoginRegister = () => {
  // Cover Variables
  const [pos, setPos] = useState("Left");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  // getting the type of the page, by context
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get("type");
  const intType = parseInt(type);

  const showLogIn = () => {
    setPos("Right");
    setTitle("Already Have an accont?");
    setText("Log In");
    navigate("/login?type=1");

    setFormType1('show')
    setFormType2('hide')
    setBtnText('Sign up')
  };

  const showSignUp = () => {
    setPos("Left");
    setTitle("New Here?");
    setText("Sign Up");
    navigate("/login?type=2");

    setFormType1('hide')
    setFormType2('show')
    setBtnText('Login')
  };

  //changing cover positions
  const positionHandle = () => {
    if (intType === 1) showSignUp();
    if (intType === 2) showLogIn();
  };

  //setting cover position, by type
  const get_type = () =>{
    if (intType === 1) showLogIn();
    if (intType === 2) showSignUp();
  }

  //on load, set position
  useEffect(() => {
    get_type();
  }, []);

  // mobile:
  const [formType1, setFormType1] = useState('')
  const [formType2, setFormType2] = useState('')
  const [btnText, setBtnText] = useState('')


  return (
    <>
      <div className="Form-container bd-rd-2 bg-primary bd-primary-bold no-select">
        <FormComponent type={"Login"} className={""} />
        <FormComponent type={"Signup"} />
        <div
          className={`cover bd-primary-bold ${pos}`}
          onClick={positionHandle}
          style={{ bottom: pos }}
        >
          <h1 className="color-text-2">{title}</h1>
          <h1 className="color-text-2">{text}</h1>
        </div>
      </div>

      <div className="Form-mobile no-select">

        <button className="Form-mobile__button" onClick={positionHandle}>{btnText}</button>
        <div className={`Form-mobile__wraper Form-${formType1}`} >
        <FormComponent type={"Login"} />
        </div>
        <div className={`Form-mobile__wraper Form-${formType2}`} >
        <FormComponent type={"Signup"}/>
        </div>
      </div>
    </>
  );
};

export default FormLoginRegister;
