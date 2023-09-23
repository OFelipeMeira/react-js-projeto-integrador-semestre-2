import './ToggleThemeStyle.css'
// import imgMoon from '../../Assets/Images/imgMoon.png'
// import imgSun from '../../Assets/Images/imgSun.png'
import darkMode from '../../Assets/Images/darkMode.png'
import darkMode2 from '../../Assets/Images/darkMode2.png'
import darkMode2White from '../../Assets/Images/darkMode2White.png'
import { useEffect } from 'react'

const ToggleDarkMode = (props) => {

    const {white=false} = props
    
    const DOMbody = document.querySelector("body")
  
    // const imgSun = "https://cdn-icons-png.flaticon.com/512/192/192538.png"
    // const imgMoon = "https://www.freeiconspng.com/thumbs/moon-icon/moon-icon-8.png"

    const toggleDarkMode = () => {
        if (DOMbody.getAttribute("data-theme") === "light") {
            DOMbody.setAttribute("data-theme", 'dark')
        } else {
            DOMbody.setAttribute("data-theme", 'light')
        }
    }

    useEffect(()=>{
        DOMbody.setAttribute("data-theme", 'light')
    },[])

    return (
        <div className='ToggleTheme' >
            <button onClick={toggleDarkMode} style={{backgroundImage:`url(${white===true? darkMode2White : darkMode2})`}}>
            </button>
        </div>
    )
}

export default ToggleDarkMode