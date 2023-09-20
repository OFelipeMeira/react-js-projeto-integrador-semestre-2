import './style.css'

const Title = (props)=> {
    const {text, type} = props
    
    return(
        <h1 id={type} className='Title'>{text}</h1>
    )
}

export default Title