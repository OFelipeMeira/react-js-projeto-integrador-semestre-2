import './TitleSubStyle.css'

// Sub Title component, styled in './Assets/Styles/index.css'
const Title_Sub = (props) =>{
    const {text} = props

    return(
        <h2 className='Title_Sub'>{text}</h2>
    )
}

export default Title_Sub