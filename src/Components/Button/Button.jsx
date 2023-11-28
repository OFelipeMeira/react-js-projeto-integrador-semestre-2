import './ButtonStyle.css'

const Button = (props) =>{

    const {text, tag, onClick} = props

    return(
        <p onClick={onClick} className={`Button no-select ${tag}`}>{text}</p>
    )
}

export default Button