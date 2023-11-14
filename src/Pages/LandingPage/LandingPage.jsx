import SectionMain from "../../Layouts/SectionMain/Section";
import SectionHowTo from "../../Layouts/SectionHowTo/SectionHowTo";
import SectionRotating from "../../Layouts/SectionRotating/SectionRotating";
import Footer from "../../Layouts/Footer/Footer";

import Header from "../../Layouts/Header/Header";

import Img1 from "../../Assets/Images/LandingPage01.jpg";
import Img2 from "../../Assets/Images/LandingPage02.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";


const LandingPage = () => {

   useEffect(()=>{

      const email = "aa@ccc"
      const baseURL = `https://www.disify.com/api/email/your@example.com`;
      axios.get(baseURL).then((response) => {
         console.log(response);
      });
    
   }, [])

   
   const { pathname } = useLocation();

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
            // haveButton={false}
            btnText={"Sign Up"}
            btnHref={"/dashboard"}
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

         <SectionHowTo title={"Become a partner in 3 simple steps"} />

         <SectionRotating />

         <Footer
            column1={"Nosso"}
            tag={"bg-primary-color color-text-2"}
            type={"complete"}
         />
      </>
   );
};

export default LandingPage;
