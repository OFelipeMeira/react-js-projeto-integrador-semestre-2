import { BrowserRouter, Routes, Route } from "react-router-dom";

//  Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

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

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
