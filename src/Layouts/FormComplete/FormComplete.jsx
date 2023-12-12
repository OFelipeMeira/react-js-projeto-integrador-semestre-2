import "./FormCompleteStyle.css";
import FormComponent from "../../Components/FormComponent/FormComponent";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Util/Context";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Component to login and sign up
const FormLoginRegister = () => {
    // global variables
    const theContext = useContext(GlobalContext);
    const { setState } = theContext;
    const { token } = theContext.contextState;

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

        setFormType1("show");
        setFormType2("hide");
        setBtnText("Sign up");
    };

    const showSignUp = () => {
        setPos("Left");
        setTitle("New Here?");
        setText("Sign Up");
        navigate("/login?type=2");

        setFormType1("hide");
        setFormType2("show");
        setBtnText("Login");
    };

    //changing cover positions
    const positionHandle = () => {
        if (intType === 1) showSignUp();
        if (intType === 2) showLogIn();

        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setCPF("");
    };

    //setting cover position, by type
    const get_type = () => {
        if (intType === 2) showSignUp();
        else showLogIn();
    };

    //on load, set position
    useEffect(() => {
        get_type();
    }, []);

    // mobile:
    const [formType1, setFormType1] = useState("");
    const [formType2, setFormType2] = useState("");
    const [btnText, setBtnText] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [CPF, setCPF] = useState("");

    // method to log in
    const login = () => {
        axios
            .post("http://127.0.0.1:8000/api/token/", {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(email);
                console.log(res.data.access);
                setState({ token: res.data.access });
                notifyLogged();
                navigate('/profile')
            })
            .catch((err) => {
                console.log(err);
                notifyError();
            });
    };

    // method to sing up
    const singup = () => {
        axios
            .post("http://127.0.0.1:8000/api/v1/user/create", {
                first_name: firstName,
                last_name: lastName,
                cpf: CPF,
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res.data.access);
                notifyRegistered();
            })
            .catch((err) => {
                console.log(err);
                notifyError();
            });
    };

    // method to show if is logged
    const notifyLogged = () => {
        toast.success("Logged !", {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    // method to show if account created
    const notifyRegistered = () => {
        toast.success("Registered !", {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    // method to show if any error occured
    const notifyError = () => {
        toast.error("Oops, something went wrong. Try again", {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    return (
        <>
            <ToastContainer />
            <div className="Form-container bd-rd-2 bg-primary bd-primary-bold no-select">
                <div className="Form">
                    <h1 className="Form__title">Login</h1>

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="Form__input"
                        type="text"
                        name="Login"
                        placeholder="Email"
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="Form__input"
                        type="password"
                        name="Password"
                        placeholder="Password"
                    />

                    <button className="Form__button" onClick={login}>
                        Submit
                    </button>
                </div>
                {/* <FormComponent type={"Signup"} /> */}
                <div className="Form">
                    <h1 className="Form__title">Sign up</h1>

                    <input
                        className="Form__input"
                        type="text"
                        name="Name"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <input
                        className="Form__input"
                        type="text"
                        name="Name"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <input
                        className="Form__input"
                        type="text"
                        name="CPF"
                        placeholder="CPF"
                        onChange={(e) => setCPF(e.target.value)}
                        value={CPF}
                    />

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="Form__input"
                        type="text"
                        name="Email"
                        placeholder="Email"
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="Form__input"
                        type="password"
                        name="Password"
                        placeholder="Password"
                    />

                    <button className="Form__button" onClick={singup}>
                        Submit
                    </button>
                </div>

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
                <button
                    className="Form-mobile__button"
                    onClick={positionHandle}
                >
                    {btnText}
                </button>
                <div className={`Form-mobile__wraper Form-${formType1}`}>
                    <FormComponent type={"Login"} />
                </div>
                <div className={`Form-mobile__wraper Form-${formType2}`}>
                    <FormComponent type={"Signup"} />
                </div>
            </div>
        </>
    );
};

export default FormLoginRegister;
