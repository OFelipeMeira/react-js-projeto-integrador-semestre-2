import './AsideStyle.css'
import img from '../../Assets/Images/gifTeste.gif'
import AsideItem from '../../Components/AsideItem/AsideItem'
import ToggleDarkMode from '../../Components/ToggleTheme/ToggleTheme'

const Aside = () => {
  return (
    <div className="Aside">

        <AsideItem
          text="titulo Component"
          img={img}
          goTo={''} // Coming Soon
        />
        
        <AsideItem
          text="titulo"
          img={img}
          goTo={''} // Soon
        />
        
        <AsideItem
          text="titulo"
          img={img}
          goTo={''} // Soon
        />

        <ToggleDarkMode
            white={true}
        />


    </div>
  )
}

export default Aside