import './ToggleThemeStyle.css'
import darkMode2 from '../../Assets/Images/darkMode2.png'

import { useContext, useEffect } from 'react'

import { GlobalContext } from '../../Util/Context'

const ToggleDarkMode = () => {

    const theContext = useContext(GlobalContext)
    const {setState} = theContext
    const {theme} = theContext.contextState

    const DOMbody = document.querySelector("body")

    const toggleDarkMode = () => {
        if (theme === "light") {
            setTheme("dark")
            setState({theme:'dark'})
        } else {
            setTheme("light")
            setState({theme:'light'})
        }
    }

    const setTheme = (tm) =>{
        DOMbody.setAttribute("data-theme", tm)
    }

    const getTheme = ()=>{
        if (theme === "light") {
            DOMbody.setAttribute("data-theme", "light")
        } else {
            DOMbody.setAttribute("data-theme", "dark")
        }
    }
    
    useEffect(() => {
        getTheme()
    },[])
    
    useEffect(() => {
        console.log(theContext)
        setTheme(theme)
    },[theme])



    return (
        <div className='ToggleTheme' >
            <button onClick={toggleDarkMode} style={{ backgroundImage: `url(${darkMode2})` }}></button>
        </div>
    )
}

export default ToggleDarkMode;