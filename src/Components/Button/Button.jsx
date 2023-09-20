import './style.css'

const Button = (props) =>{

    
    const {text, type} = props

    return(
        <button className="Button" id={ "" ? type!=="" : type }>
            {text}
        </button>
    )
}

export default Button