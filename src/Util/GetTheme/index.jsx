import { useContext, useEffect } from "react";

import { GlobalContext } from "../../Util/Context";

// Method to get the current theme (dark, or light)
// and change, if used
const useTheme = () => {
    // getting theme from context
    const theContext = useContext(GlobalContext);
    const { theme } = theContext.contextState;

    // adding a tag on the body, to change colors
    const DOMbody = document.querySelector("body");
    const getTheme = () => {
        if (theme === "light") {
          DOMbody.setAttribute("data-theme", "light");
        } else {
          DOMbody.setAttribute("data-theme", "dark");
        }
      };
    useEffect(()=>{
        getTheme();
    },)
}

export default useTheme