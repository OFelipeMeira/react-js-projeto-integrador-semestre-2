
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
        <label class="switch" onChange={toggleDarkMode}>
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
        </>
    )
}

export default ToggleDarkMode