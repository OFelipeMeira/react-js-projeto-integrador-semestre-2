import './SectionMainStyle.css'

import Title from '../../Components/TitleMain/Title'
import TitleSub from '../../Components/TitleSub/TitleSub'
import Button from '../../Components/Button/Button'

// import { Link } from "react-router-dom";

const Section = (props) => {

    const { title, subTitle, btnText, img, textOnRight = false, tag="bg-primary", btnHref} = props

    return (
        <div className={`Section__Main ${tag}`}>
            {textOnRight === false ?
                <article >
                    <section className='Section__item'>
                        <Title text={title} />
                        <TitleSub text={subTitle} />
                        <Button
                            tag={"box-primary btn_1"}
                            text={btnText}
                            href={btnHref}
                        />
                    </section>
                    <section  className='Section__item'>
                        <img src={img} alt="" />
                    </section>
                </article>
                
                :

                <article className={`Section__Main ${tag}`}>
                    <section  className='Section__item'>
                        <img src={img} alt="" />
                    </section>
                    <section  className='Section__item'>
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