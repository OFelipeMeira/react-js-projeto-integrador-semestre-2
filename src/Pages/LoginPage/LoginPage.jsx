import './LoginPageStyle.css'
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import FormComplete from "../../Layouts/FormComplete/FormComplete.jsx";

const LoginPage = () => {
  return (
    <div className="LoginPage">
        <Header />
        <FormComplete />
    </div>
  );
};

export default LoginPage;
