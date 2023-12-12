import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import Section from "../../Layouts/SectionMain/Section";

import Img1 from "../../Assets/Images/HappyManCard.jpg";
import Img2 from "../../Assets/Images/HappyWomanCard.jpg";
import Img3 from '../../Assets/Images/HappyWomanCard2.jpg'

import useTheme from "../../Util/GetTheme";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Cards = () => {

  // geting the theme (dark/light)
	useTheme()

  // variable to save URL
  const { pathname } = useLocation();

  // method to scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <Header />

      <Section
        title={"Unlock New Possibilities, Choose Our Cards."}
        subTitle={`We believe in the power of choice and opportunity. 
        Our cards are more than just pieces of plastic they're
        your keys to financial freedom`}
        btnText={"Know More"}
        img={Img1}
        textOnRight={false}
        haveButton={false}
        btnHref={""}
        tag={"bg-primary"}
      />

      <Section
        title={"Unlock New Possibilities, Choose Our Cards."}
        subTitle={`We believe in the power of choice and opportunity. 
        Our cards are more than just pieces of plastic they're
        your keys to financial freedom`}
        btnText={"Know More"}
        img={Img2}
        textOnRight={true}
        haveButton={false}
        btnHref={""}
        tag={"bg-secondary"}
      />

      {/* <SectionCards /> */}

      <Section
        title={"Get Now Your Unique Card"}
        subTitle={""}
        img={Img3}
        textOnRight={false}
        haveButton={true}
        btnHref={"/login?type=1"}
        btnText={"Register"}
        tag={"bg-secondary"}
        textJustify={"flex-end"}
      />

      <Footer
        column1={""}
        tag={"bg-primary-color color-text-2"}
        type={"complete"}
      />
    </>
  );
};

export default Cards;
