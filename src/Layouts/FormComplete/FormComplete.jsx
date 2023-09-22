import "./FormCompleteStyle.css";
import FormComponent from "../../Components/FormComponent/FormComponent";
import { useState } from "react";

const FormLoginRegister = () => {
  const [pos, setPos] = useState('Left');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const showLogIn = () => {
    setPos("Right")
    setTitle("Already Have an accont?")
    setText("Log In")
  }
  const showSingUp = () => {
    setPos("Left")
    setTitle("New Here?")
    setText("Sign Up")
  }

  const positionHandle = () => {
    if (pos==='Left') showLogIn()
    else showSingUp()
  };

  useState(()=>{
    showSingUp()
  })
  return (
    <div className="Form-container bd-rd-2 bg-secondary">
      <FormComponent type={"Login"} />
      <FormComponent type={"Signup"} />
      <div className={`cover bd-rd-2 ${pos}`} onClick={positionHandle} style={{ bottom: pos }}>
        <h1>{title}</h1>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default FormLoginRegister;
