import './ButtonStyle.css'

const Button = (props) =>{

    const {text, type, size} = props

    return(
        <a className={`Button ${size}`} id={type} href="./">{text}</a>
    )
}

export default Button