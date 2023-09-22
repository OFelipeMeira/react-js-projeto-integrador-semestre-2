import '../../Assets/Styles/SectionsStyle.css'

import Title from "../../Components/TitleMain/Title";
import Card from "../../Components/Card/Card";
import Button from '../../Components/Button/Button';

import Card01 from '../../Assets/Images/Card01.jpg'

const Section = (props) => {

    const { title } = props

    return (
        <div className="SectionHowTo bg-primary">
            <Title text={title} />

            <div className="grid-1-3">
                
                <Card
                    titleText={"download the app"}
                    descText={"descricao "}
                    img={Card01}
                />

                <Card
                    titleText={"download the app"}
                    descText={"descricao descricao descricao descricao "}
                    img={Card01}
                />

                <Card
                    titleText={"download the app"}
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