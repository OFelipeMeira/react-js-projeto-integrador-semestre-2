import "./FormCompleteStyle.css";
import FormComponent from "../../Components/FormComponent/FormComponent";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const FormLoginRegister = () => {
  const [pos, setPos] = useState('Left');
  const [title, setTitle] = useState('');
  
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("type")


  const showLogIn = () => {
    setPos("Right")
    setTitle("Already Have an accont?")
    setText("Log In")
    navigate("/login?type=1")
  }
  
  const showSignUp = () => {
    setPos("Left")
    setTitle("New Here?")
    setText("Sign Up")
    navigate("/login?type=2")
  }

  const positionHandle = () => {
    if (type == 1) showSignUp()
    if (type == 2) showLogIn()
  };

  useEffect(()=>{
    positionHandle()
  },[])


  return (
    <div className="Form-container bd-rd-2 bg-primary bd-primary-bold no-select">
      <FormComponent type={"Login"} />
      <FormComponent type={"Signup"} />
      <div className={`cover bd-primary-bold ${pos}`} onClick={positionHandle} style={{ bottom: pos }}>
        <h1 className="color-text-2">{title}</h1>
        <h1 className="color-text-2">{text}</h1>
      </div>
    </div>
  );
};

export default FormLoginRegister;
