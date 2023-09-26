import './FooterStyle.css'
import LogoBank from './../../Assets/Images/LogoBank.png'
import LogoBankBlue from '../../Assets/Images/LogoHeaderBlue.png'


const Footer = (props) => {

    const {tag, type= "complete"} = props

    const column1 = "Nosso banco"
    const column2 = ""

    return (
        <div className={`Footer ${tag} ${type}`}>
            <img src={LogoBank} alt="Logo" />

            {
                type==="complete"?
                <>
                    <ul>
                        <h3>{column1}</h3>
                        <li><a href=""> acesse agr que n sei o q </a></li>
                        <li><a href=""> b </a></li>
                        <li><a href=""> c </a></li>
                        <li><a href=""> d </a></li>
                        <li><a href=""> e </a></li>
                    </ul>

                    <ul>
                        <h3>{column2}</h3>
                        <li><a href=""> a </a></li>
                        <li><a href=""> b </a></li>
                        <li><a href=""> c </a></li>
                        <li><a href=""> d </a></li>
                        <li><a href=""> e </a></li>
                    </ul>
                </>
                :
                <></>
            }
            {
                type==="slim"?
                <>
                        <h3>{column1}</h3>
  

                        <h3>{column2}</h3>
                </>
                :
                <></>
            }
            

        </div>
    )
}

export default Footer