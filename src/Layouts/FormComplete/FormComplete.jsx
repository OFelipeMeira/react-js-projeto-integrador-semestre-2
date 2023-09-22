import "./FormCompleteStyle.css";
import FormComponent from "../../Components/FormComponent/FormComponent";
import Arrow from '../../Assets/Images/Arrow.png'
import { useState } from "react";

const FormLoginRegister = () => {
  const [pos, setPos] = useState('Left');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [icon, setIcon] = useState("")

  const showLogIn = () => {
    setPos("Right")
    setTitle("Already Have an accont?")
    setText("Log In")
    setIcon("R")
  }
  const showSingUp = () => {
    setPos("Left")
    setTitle("New Here?")
    setText("Sign Up")
    setIcon("L")
  }

  const positionHandle = () => {
    if (pos==='Left') showLogIn()
    else showSingUp()
  };

  useState(()=>{
    showSingUp()
  })
  return (
    <div className="Form-container bd-rd-2 bg-primary bd-primary-bold">
      <FormComponent type={"Login"} />
      <FormComponent type={"Signup"} />
      {/* <div className={`cover bd-rd-2 bd-primary-bold ${pos}`} onClick={positionHandle} style={{ bottom: pos }}> */}
      <div className={`cover bd-primary-bold ${pos}`} onClick={positionHandle} style={{ bottom: pos }}>
        <h1 className="color-text-2">{title}</h1>
        <h1 className="color-text-2">{text}</h1>
      </div>
    </div>
  );
};

export default FormLoginRegister;
