import "./FormComponentStyle.css";

const FormComponent = (props) => {
  const { type = "Login" } = props;

  return (
    <form className="Form">
      {type === "Login" ? (
        <>
          <h1 className="color-primary grid-1-4">Log in</h1>

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
