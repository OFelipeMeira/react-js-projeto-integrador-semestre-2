import './ButtonStyle.css'

const Button = (props) =>{

    const {text, tag} = props

    return(
        <p className={`Button no-select ${tag}`}>{text}</p>
    )
}

export default Button