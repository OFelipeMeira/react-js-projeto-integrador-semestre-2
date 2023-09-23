import './AsideStyle.css'
import img from '../../Assets/Images/gifTeste.gif'
import AsideItem from '../../Components/AsideItem/AsideItem'
import ToggleDarkMode from '../../Components/ToggleTheme/ToggleTheme'

const Aside = () => {
  
  return (
    <div className={`Aside`}>

        <ToggleDarkMode
            white={true}
        />

        <AsideItem
          text="Menu"
          img={img}
          goTo={''} // Coming Soon
        />

        <AsideItem
          text="My account"
          img={img}
          goTo={''} // Soon
        />

        <AsideItem
          text="Settings"
          img={img}
          goTo={''} // Soon
        />

    </div>
  )
}

export default Aside