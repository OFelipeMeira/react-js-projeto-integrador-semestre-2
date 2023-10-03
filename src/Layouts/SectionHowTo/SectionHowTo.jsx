import './SectionHowToStyle.css'

import Title from "../../Components/TitleMain/Title";
import Card from "../../Components/Card/Card";
import Button from '../../Components/Button/Button';

import Card01 from '../../Assets/Images/WireBox.png'

const Section = (props) => {

    const { title } = props

    return (
        <div className="SectionHowTo bg-primary">
            <Title text={title} />

            <div className="Cards">
                
                <Card
                    titleText={"download the app"}
                    descText={"descricao "}
                    img={Card01}
                />
                <Card
                    titleText={"create your account"}
                    descText={"descricao descricao descricao descricao "}
                    img={Card01}
                />
                <Card
                    titleText={"enjoy our bank"}
                    descText={"descricao descricao descricao descricao descricao descricao descricao descricao descricao "}
                    img={Card01}
                />
            </div>
            <Button 
                text={"Download Now"}
                tag={"btn_2 box-primary-empty bd-primary-bold"}
            />

        </div>
    )
}

export default Section;