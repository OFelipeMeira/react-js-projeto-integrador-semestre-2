import './ButtonStyle.css'

const Button = (props) =>{

    const {text, tag} = props

    return(
        <a className={`Button ${tag}`} href="./">{text}</a>
    )
}

export default Button