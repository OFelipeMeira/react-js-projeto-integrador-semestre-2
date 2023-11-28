import { BrowserRouter, Routes, Route } from "react-router-dom";

//  Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import Cards from "./Pages/CardsPage/CardsPage";
import AboutPage from "./Pages/InvestmentsPage/InvestmentsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

// import Testes from './Pages/Testes/Testes'

//  Styles
import './Assets/Styles/index.css'
import './Assets/Styles/colors.css'

//Context
import { AppContext } from './Util/Context'

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/card" element={<Cards />} />
            <Route path="/investments" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>

      </AppContext>
    </>
  );
}

export default App;
