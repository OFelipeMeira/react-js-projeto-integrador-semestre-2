import './ToggleThemeStyle.css'
import { useEffect } from 'react'

const ToggleDarkMode = (props) => {

    const {type} = props
    
    const DOMbody = document.querySelector("body")
    
    const imgSun = "https://cdn-icons-png.flaticon.com/512/192/192538.png"
    const imgMoon = "https://www.freeiconspng.com/thumbs/moon-icon/moon-icon-8.png"
    
    useEffect(() => setLightMode())

    const setDarkMode = () => DOMbody.setAttribute("data-theme", 'dark')

    const setLightMode = () => DOMbody.setAttribute("data-theme", 'light')

    const toggleDarkMode = (e) => {
        if (DOMbody.getAttribute("data-theme") === "light") {
            setDarkMode()
            e.target.src = imgSun
        } else {
            setLightMode()
            e.target.src = imgMoon
        }
    }

    return (
        <div className='ToggleTheme' >
            <button onClick={toggleDarkMode} id={type}>
                <img src={imgMoon} alt="" />
            </button>
        </div>
    )
}

export default ToggleDarkMode