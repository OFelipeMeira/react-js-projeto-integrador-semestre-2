import './CardStyle.css'


const Card = (props) => {

    const { titleText, titleTags, descText, descTags, img, } = props

    return (
        <div className="Card ">
            <h1 className={titleTags}>{titleText}</h1>
            <img src={img} />
            <p className={descTags}>{descText}</p>
        </div>
    )
}

export default Card