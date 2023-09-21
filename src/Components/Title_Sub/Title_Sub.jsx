import './Title_Sub_style.css'

const Title_Sub = (props) =>{
    const {text} = props

    return(
        <h2 className='Title_Sub'>{text}</h2>
    )
}

export default Title_Sub