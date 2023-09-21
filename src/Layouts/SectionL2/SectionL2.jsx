import '../../Assets/Styles/SectionsStyle.css'

import LandingPage03 from '../../Assets/Images/LandingPage02Mirror.jpg'

import Title from '../../Components/TitleMain/Title'
import Title_Sub from '../../Components/TitleSub/TitleSub'
import Button from '../../Components/Button/Button'

const SectionL1 = () => {

    const imgUrl = LandingPage03

    return (
        <div className="Sections Layout02">
            <article>
                <section className='img'>
                    <img src={imgUrl} alt="" />
                </section>

                <section>
                    <Title text={""}/>
                    <Title_Sub text={""}/>
                    <Button type={"box-primary"} size={"btn_1"} text={""}/>
                </section>

            </article>
        </div>
    )
}
export default SectionL1