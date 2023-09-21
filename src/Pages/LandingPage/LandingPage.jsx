import Header from "../../Layouts/Header/Header"
import SectionL1 from "../../Layouts/SectionL1/SectionL1"
import SectionL2 from "../../Layouts/SectionL2/SectionL2"

import Img1 from '../../Assets/Images/LandingPage01.jpg'
import Img2 from '../../Assets/Images/LandingPage02.jpg'

const LandingPage = () => {
    return (
        <>
            <Header />
            <SectionL1 
                title={'Your Financial Future Starts Here'}
                subTitle={'Discover a world of opportunities with our digital bank.'}
                btnText={'Sign Up'}
                img={Img1}
            />
            <SectionL2
                textOnRight={true}
                title={'Technology and Finance: Together in One Place'}
                subTitle={'The digital revolution has arrived in the financial world. Are you ready?'}
                btnText={'Know More'}
                img={Img2}
            />
            <SectionL1 />
        </>
    )
}

export default LandingPage