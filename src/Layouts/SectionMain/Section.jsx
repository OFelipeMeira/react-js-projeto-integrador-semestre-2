import '../../Assets/Styles/SectionsStyle.css'

import Title from '../../Components/TitleMain/Title'
import TitleSub from '../../Components/TitleSub/TitleSub'
import Button from '../../Components/Button/Button'

const Section = (props) => {

    const { title, subTitle, btnText, img, textOnRight = false, tag="bg-primary", btnHref} = props

    return (
        <div className={`SectionMain ${tag}`}>
            {textOnRight === false ?
                <article>
                    <section>
                        <Title text={title} />
                        <TitleSub text={subTitle} />
                        <Button
                            tag={"box-primary btn_1"}
                            text={btnText}
                            href={btnHref}
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
                            tag={"box-primary btn_1"}
                            text={btnText}
                            href={btnHref}
                        />
                    </section>
                </article>
            }
        </div>
    )
}
export default Section;