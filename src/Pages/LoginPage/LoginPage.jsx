import './LoginPageStyle.css'
import Header from "../../Layouts/Header/Header";
import FormComplete from "../../Layouts/FormComplete/FormComplete.jsx";

// Page to login and sing up: 
const LoginPage = () => {
  return (
    <div className="LoginPage">
        <Header />
        <FormComplete />
    </div>
  );
};

export default LoginPage;
