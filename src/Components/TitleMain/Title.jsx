import './TitleStyle.css'

const Title = (props)=> {
    const {text} = props
    
    return(
        <h1 className="Title">{text}</h1>
    )
}

export default Title