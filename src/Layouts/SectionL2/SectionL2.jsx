import '../../Assets/Styles/Sections_style.css'

import LandingPage03 from '../../Assets/Images/LandingPage02Mirror.jpg'

import Title from '../../Components/Title_Main/Title'
import Title_Sub from '../../Components/Title_Sub/Title_Sub'
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
                    <Title text={"Technology and Finance: Together in One Place"}/>
                    <Title_Sub text={"The digital revolution has arrived in the financial world. Are you ready?"}/>
                    <Button type={"box-primary"} size={"btn_1"} text={"Know More"}/>
                </section>

            </article>
        </div>
    )
}
export default SectionL1