import './ButtonStyle.css'

const Button = (props) =>{

    const {text, type, size} = props

    return(
        // <button className={`Button ${size}`} id={type} >
        //     {text}
        // </button>
        <a className={`Button ${size}`} id={type} href="./">{text}</a>
    )
}

export default Button