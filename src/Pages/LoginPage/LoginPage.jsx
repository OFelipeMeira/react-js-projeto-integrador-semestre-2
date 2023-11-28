import './LoginPageStyle.css'
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import FormComplete from "../../Layouts/FormComplete/FormComplete.jsx";

const LoginPage = () => {
  return (
    <div className="LoginPage">
        <Header />
        <FormComplete />
        {/* <Footer
            column1={"Nosso"}
            tag={"bg-primary-color color-text-2"}
            type={"complete"}
         /> */}
    </div>
  );
};

export default LoginPage;
