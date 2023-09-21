import './ButtonStyle.css'

const Button = (props) =>{

    const {text, type, size} = props

    return(
        <button className={`Button ${size}`} id={type} >
            {text}
        </button>
    )
}

export default Button