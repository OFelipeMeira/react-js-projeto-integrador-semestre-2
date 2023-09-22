import './LoginPageStyle.css'
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import FormComplete from "../../Layouts/FormComplete/FormComplete.jsx";

const LoginPage = () => {

  return (
    <div className="LoginPage">
        <Header />
        <FormComplete />
        <Footer 
          type={"slim"}
          tag={'bg-primary-color'}
        />
    </div>
  );
};

export default LoginPage;
