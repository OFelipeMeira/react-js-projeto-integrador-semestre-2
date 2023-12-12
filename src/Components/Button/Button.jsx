import './ButtonStyle.css'

// button to redirect between pages
const Button = (props) =>{

    const {text, tag, onClick} = props

    return(
        <p onClick={onClick} className={`Button no-select ${tag}`}>{text}</p>
    )
}

export default Button