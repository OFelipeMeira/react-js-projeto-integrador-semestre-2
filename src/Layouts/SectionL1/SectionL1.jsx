import '../../Assets/Styles/SectionsStyle.css'

import IndianGuy from '../../Assets/Images/LandingPage01.jpg'

import Title from '../../Components/TitleMain/Title'
import TitleSub from '../../Components/TitleSub/TitleSub'
import Button from '../../Components/Button/Button'

const SectionL1 = () => {

    const imgUrl = IndianGuy

    return (
        <div className="Sections Layout01">
            <article>
                <section>
                    <Title text={"Your Financial Future Starts Here"}/>
                    <TitleSub text={"Discover a world of opportunities with our digital bank."}/>
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