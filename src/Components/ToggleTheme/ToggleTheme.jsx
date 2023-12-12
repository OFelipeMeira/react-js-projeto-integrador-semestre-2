import "./ToggleThemeStyle.css";
import darkMode2 from "../../Assets/Images/darkMode2.png";

import { useContext, useEffect } from "react";

import { GlobalContext } from "../../Util/Context";

// button to change theme - dark/light
const ToggleDarkMode = () => {
  // global variables
  const theContext = useContext(GlobalContext);
  const { setState } = theContext;
  const { theme } = theContext.contextState;

  // getting the body of the app
  const DOMbody = document.querySelector("body");

  // method to invert theme
  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
      setState({ theme: "dark" });
    } else {
      setTheme("light");
      setState({ theme: "light" });
    }
  };

  // method to change theme
  const setTheme = (tm) => {
    DOMbody.setAttribute("data-theme", tm);
  };

  // method to get current theme
  const getTheme = () => {
    if (theme === "light") {
      DOMbody.setAttribute("data-theme", "light");
    } else {
      DOMbody.setAttribute("data-theme", "dark");
    }
  };

  // on load, get theme
  useEffect(() => {
    getTheme();
  }, []);

  // change theme
  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <div className="ToggleTheme">
      <button
        onClick={toggleDarkMode}
        style={{ backgroundImage: `url(${darkMode2})` }}
      ></button>
    </div>
  );
};

export default ToggleDarkMode;
