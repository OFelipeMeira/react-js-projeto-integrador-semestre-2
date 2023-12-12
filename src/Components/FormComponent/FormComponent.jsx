import "./FormComponentStyle.css";

// component to creata form in login and sign up
const FormComponent = (props) => {
  return (
    <form className="Form">
      {props.type === "Login" ? (
        <>
          <h1 className="Form__title">Login</h1>

          <input
            // onChange={}
            className="Form__input"
            type="text"
            name="Login"
            // placeholder="Email"
            placeholder={onchange}
          />

          <input
            className="Form__input"
            type="password"
            name="Password"
            placeholder="Password"
          />

          <button type="submit" className="Form__button">
            Submit
          </button>
        </>

      ) : (
        <></>
      )}

      {props.type === "Signup" ? (
        <>
          <h1 className="Form__title">Sign up</h1>

          <input
            className="Form__input"
            type="text"
            name="Name"
            placeholder="Name"
          />

          <input
            className="Form__input"
            type="text"
            name="Login"
            placeholder="Login"
          />

          <input
            className="Form__input"
            type="password"
            name="Password"
            placeholder="Password"
          />

          <button type="submit" className="Form__button">
            Submit
          </button>
        </>
      ) : (
        <></>
      )}
    </form>
  );
};

export default FormComponent;
