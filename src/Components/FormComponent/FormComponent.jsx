import "./FormComponentStyle.css";

const FormComponent = (props) => {
  const { type = "Login" } = props;

  return (
    <form className="Form grid-1-4">
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
          <h1 className="color-primary grid-1-5">Sign up</h1>

          <input
            className="bd-primary-normal bd-rd-1 bg-primary"
            type="text"
            name="Name"
            placeholder="Name"
          />

          <input
            className="bd-primary-normal bd-rd-1 bg-primary"
            type="text"
            name="Login"
            placeholder="Login"
          />

          <input
            className="bd-primary-normal bd-rd-1 bg-primary"
            type="password"
            name="Password"
            placeholder="Password"
          />

          <button type="submit" className="box-primary bd-none bd-rd-1 bd-primary-normal">
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
