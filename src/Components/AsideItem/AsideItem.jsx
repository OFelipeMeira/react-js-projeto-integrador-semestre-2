import './AsideItemStyle.css'

const Asideitem = (props) => {

    const {text, img, goTo} = props

  return (
    <a className="Aside-item" href={`${goTo}`}>
        <img src={img} alt="" />
        <h1>{text}</h1>
    </a>
    
  )
}

export default Asideitem