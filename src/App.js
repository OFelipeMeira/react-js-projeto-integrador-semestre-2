import { BrowserRouter, Routes, Route } from "react-router-dom";

//  Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import Testes from './Pages/Testes/Testes'

//  Styles
import './Assets/Styles/index.css'
import './Assets/Styles/colors.css'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/dashboard" Component={DashboardPage}/>
          
          <Route path="/teste" Component={Testes}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
