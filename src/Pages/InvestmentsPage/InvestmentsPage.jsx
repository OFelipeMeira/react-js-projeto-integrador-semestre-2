import Header from "../../Layouts/Header/Header";
import Section from "../../Layouts/SectionMain/Section";
import Footer from "../../Layouts/Footer/Footer";

import Img1 from "../../Assets/Images/HappyCouple.jpg";
import Img2 from "../../Assets/Images/HappyWomanInvest.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const InvestmentsPage = () => {
   
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <>
         <Header />

         <Section
            title={"Where Dreams Find Financial Wings"}
            subTitle={``}
            btnText={"Know More"}
            img={Img1}
            textOnRight={true}
            haveButton={false}
            btnHref={""}
            tag={"bg-primary"}
         />

         <Section
            title={""}
            subTitle={`Create a personalized investment portfolio that aligns with your unique financial objectives and preferences.
        
        Explore tax-efficient investment strategies to minimize your tax liabilities and maximize your after-tax returns."`}
            btnText={"Know More"}
            img={Img2}
            textOnRight={false}
            haveButton={false}
            btnHref={""}
            tag={"bg-secondary"}
         />

         <Footer
            column1={""}
            tag={"bg-primary-color color-text-2"}
            type={"complete"}
         />
      </>
   );
};

export default InvestmentsPage;
