import './CardStyle.css'


const Card = (props) => {

    const { title, desc, img } = props

    return (
        <div className="Card">
            <h1>{title}</h1>
            <img src={img} />
            <p>{desc}</p>
        </div>
    )
}

export default Card