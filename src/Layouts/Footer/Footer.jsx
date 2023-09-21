import './FooterStyle.css'
import LogoBank from './../../Assets/Images/LogoBank.png'


const Footer = (props) => {

    const {column1, column2, tag} = props

    return (
        <div className={`Footer ${tag}`}>
            <img src={LogoBank} alt="Logo" />

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

        </div>
    )
}

export default Footer