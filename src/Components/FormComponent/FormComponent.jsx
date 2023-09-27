import "./FormComponentStyle.css";

const FormComponent = (props) => {
  const { type = "Login" } = props;

  return (
    <form className="Form">
      {type === "Login" ? (
        <>
          <h1 className="Form__title">Log in</h1>

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

      {type === "Signup" ? (
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
