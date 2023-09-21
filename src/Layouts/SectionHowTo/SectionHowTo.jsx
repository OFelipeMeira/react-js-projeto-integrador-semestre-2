import '../../Assets/Styles/SectionsStyle.css'
import './SectionHowTo.css'

import Title from "../../Components/TitleMain/Title";
import Card from "../../Components/Card/Card";
import Button from '../../Components/Button/Button';

import Card01 from '../../Assets/Images/Card01.jpg'

const Section = (props) => {

    const { title } = props

    return (
        <div className="SectionHowTo">
            <Title
                text={title}
            />

            <div className="grid-1-3">
                <Card
                    title={"download the app"}
                    desc={"descricao "}
                    img={Card01}
                />

                <Card
                    title={"download the app"}
                    desc={"descricao descricao descricao descricao "}
                    img={Card01}
                />

                <Card
                    title={"download the app"}
                    desc={"descricao descricao descricao descricao descricao descricao descricao descricao descricao "}
                    img={Card01}
                />
            </div>

            <Button 
                text={"dsadsads"}
                type={"box-primary-empty"}
                size={"btn_1"}
            />

        </div>
    )
}

export default Section;