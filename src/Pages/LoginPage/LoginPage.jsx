import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import Login from "../../Layouts/Login/Login";


const LoginPage = () => {
    return (
        <div className="teste">
            <Header />
            <Login />
            <Footer pos={"bot"} />
        </div>
    )
}

export default LoginPage;