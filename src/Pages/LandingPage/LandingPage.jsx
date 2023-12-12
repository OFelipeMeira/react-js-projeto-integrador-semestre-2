import SectionMain from "../../Layouts/SectionMain/Section";
import Footer from "../../Layouts/Footer/Footer";

import Header from "../../Layouts/Header/Header";

import Img1 from "../../Assets/Images/LandingPage01.jpg";
import Img2 from "../../Assets/Images/LandingPage02.jpg";
import Img3 from "../../Assets/Images/HappyCouple.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// Landing Page - First page the user sees
const LandingPage = () => {
    const { pathname } = useLocation();

    // Method to scrool to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />

            <SectionMain
                title={"Your Financial Future Starts Here"}
                subTitle={
                    "Discover a world of opportunities with our digital bank."
                }
                img={Img1}
                btnText={"Sign Up"}
                btnHref={'/login?type=1'}
                tag={"paddin-header bg-primary"}
            />

            <SectionMain
                title={"Technology and Finance: Together in One Place"}
                subTitle={
                    "The digital revolution has arrived in the financial world. Are you ready?"
                }
                btnHref={""}
                img={Img2}
                haveButton={false}
                btnText={"Know More"}
                textOnRight={true}
                tag={"bg-secondary"}
            />

            <SectionMain
                title={"Your Financial Future Starts Here"}
                subTitle={"Discover a world of opportunities with our digital bank."}
                img={Img3}
                haveButton={false}
                tag={"bg-primary"}
            />

            <Footer
                column1={"Nosso"}
                tag={"bg-primary-color color-text-2"}
                type={"complete"}
            />
        </>
    );
};

export default LandingPage;
