import '../../Assets/Styles/SectionsStyle.css'

import IndianGuy from '../../Assets/Images/LandingPage01.jpg'

import Title from '../../Components/TitleMain/Title'
import TitleSub from '../../Components/TitleSub/TitleSub'
import Button from '../../Components/Button/Button'

const SectionL1 = (props) => {

    const { title, subTitle, btnText, img, textOnRight } = props
    const imgUrl = IndianGuy

    return (
        <div className="Sections Layout01">
            <article>
                {
                    textOnRight === false ?

                        <section>
                            <Title text={title} />
                            <TitleSub text={subTitle} />
                            <Button type={"box-primary"} size={"btn_1"} text={btnText} />
                        </section> :

                        <section>
                            <Title text={title} />
                            <TitleSub text={subTitle} />
                            <Button type={"box-primary"} size={"btn_1"} text={btnText} />
                        </section>
                }


                <section className='img'>
                    <img src={img} alt="" />
                </section>
            </article>
        </div>
    )
}
export default SectionL1