// import Header from "../../Layouts/Header/Header"
import SectionMain from "../../Layouts/SectionMain/Section"
import SectionHowTo from "../../Layouts/SectionHowTo/SectionHowTo"
import SectionRotating from "../../Layouts/SectionRotating/SectionRotating"
import Footer from "../../Layouts/Footer/Footer"

import HeaderTw from "../../Layouts/HeaderTw/HeaderTw"
import Header from "../../Layouts/Header/Header"

import Img1 from '../../Assets/Images/LandingPage01.jpg'
import Img2 from '../../Assets/Images/LandingPage02.jpg'

const LandingPage = () => {
    return (
        <>
            <Header />

            {/* <HeaderTw /> */}

            <SectionMain
                title={'Your Financial Future Starts Here'}
                subTitle={'Discover a world of opportunities with our digital bank.'}
                btnText={'Sign Up'}
                btnHref={"/dashboard"}
                img={Img1}

                tag={"paddin-header bg-primary"}

            />
            <SectionMain
                title={'Technology and Finance: Together in One Place'}
                subTitle={'The digital revolution has arrived in the financial world. Are you ready?'}
                btnText={'Know More'}
                btnHref={''}
                img={Img2}

                textOnRight={true}
                tag={"bg-secondary"}
            />

            <SectionHowTo
                title={"Become a partner in 3 simple steps"}
            />

            {/* <SectionRotating /> */}

            <Footer
                column1={"Nosso"}
                tag={'bg-primary-color color-text-2'}
                type={"complete"}
            />

        </>
    )
}

export default LandingPage