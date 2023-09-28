import { useEffect } from 'react'
import './ButtonStyle.css'

const Button = (props) =>{

    const {text, tag} = props

    return(
        <p className={`Button ${tag}`}>{text}</p>
    )
}

export default Button