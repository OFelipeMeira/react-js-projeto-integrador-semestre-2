import Header from "../../Layouts/Header/Header"
import SectionMain from "../../Layouts/SectionMain/Section"
import SectionHowTo from "../../Layouts/SectionHowTo/SectionHowTo"
import Footer from "../../Layouts/Footer/Footer"

import Img1 from '../../Assets/Images/LandingPage01.jpg'
import Img2 from '../../Assets/Images/LandingPage02.jpg'

const LandingPage = () => {
    return (
        <>
            <Header />

            <SectionMain
                title={'Your Financial Future Starts Here'}
                subTitle={'Discover a world of opportunities with our digital bank.'}
                btnText={'Sign Up'}
                img={Img1}

            />
            <SectionMain
                title={'Technology and Finance: Together in One Place'}
                subTitle={'The digital revolution has arrived in the financial world. Are you ready?'}
                btnText={'Know More'}
                img={Img2}

                textOnRight={true}
                tag={"bg-secondary"}
            />

            <SectionHowTo
                title={"Become a partner in 3 simple steps"}
            />

            <Footer
                column1={"Column1"}
                column2={"Column2"}
                tag={'bg-primary-color color-text-2'}
            />

        </>
    )
}

export default LandingPage