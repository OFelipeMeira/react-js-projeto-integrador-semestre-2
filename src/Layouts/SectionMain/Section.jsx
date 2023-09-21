import '../../Assets/Styles/SectionsStyle.css'

import Title from '../../Components/TitleMain/Title'
import TitleSub from '../../Components/TitleSub/TitleSub'
import Button from '../../Components/Button/Button'

const Section = (props) => {

    const { title, subTitle, btnText, img, textOnRight = false, bg="bg-primary"} = props

    return (
        <div className={`SectionMain ${bg}`}>
            {textOnRight === false ?
                <article>
                    <section>
                        <Title text={title} />
                        <TitleSub text={subTitle} />
                        <Button
                            type={"box-primary"}
                            size={"btn_1"}
                            text={btnText}
                        />
                    </section>
                    <section className='img'>
                        <img src={img} alt="" />
                    </section>
                </article>
                :
                <article>
                    <section className='img'>
                        <img src={img} alt="" />
                    </section>
                    <section>
                        <Title text={title} />
                        <TitleSub text={subTitle} />
                        <Button
                            type={"box-primary"}
                            size={"btn_1"}
                            text={btnText}
                        />
                    </section>
                </article>
            }
        </div>
    )
}
export default Section;