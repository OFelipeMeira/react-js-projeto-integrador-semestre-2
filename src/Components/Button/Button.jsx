import './ButtonStyle.css'

const Button = (props) =>{

    const {text, tag, href} = props

    return(
        <a className={`Button ${tag}`} href={href}>{text}</a>
    )
}

export default Button