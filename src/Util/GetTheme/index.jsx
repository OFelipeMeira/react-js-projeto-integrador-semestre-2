import { useContext, useEffect } from "react";

import { GlobalContext } from "../../Util/Context";

const useTheme = () => {
    const theContext = useContext(GlobalContext);
    const { theme } = theContext.contextState;

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