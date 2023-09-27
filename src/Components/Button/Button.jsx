import { useEffect } from 'react'
import './ButtonStyle.css'

const Button = (props) =>{

    const {text, tag} = props

    return(
        <a className={`Button ${tag}`}>{text}</a>
    )
}

export default Button