
const ToggleDarkMode = () => {

    const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme",'dark')
    }
      
    const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme",'light')
    }
      
    const toggleDarkMode = (e) =>{
        if (e.target.checked) setDarkMode()
        else setLightMode()
    }

    return (
        <>
        <label className="switch" onChange={toggleDarkMode}>
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
        </>
    )
}

export default ToggleDarkMode