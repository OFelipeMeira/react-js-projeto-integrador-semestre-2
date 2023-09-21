import '../../Assets/Styles/Sections_style.css'

import IndianGuy from '../../Assets/Images/LandingPage01.jpg'

import Title from '../../Components/Title_Main/Title'
import Title_Sub from '../../Components/Title_Sub/Title_Sub'
import Button from '../../Components/Button/Button'

const SectionL1 = () => {

    const imgUrl = IndianGuy

    return (
        <div className="Sections Layout01">
            <article>
                <section>
                    <Title text={"Your Financial Future Starts Here"}/>
                    <Title_Sub text={"Discover a world of opportunities with our digital bank."}/>
                    <Button type={"box-primary"} size={"btn_1"} text={"Sign Up"}/>
                </section>

                <section className='img'>
                    <img src={imgUrl} alt="IndianGuy" />
                </section>
            </article>
        </div>
    )
}
export default SectionL1