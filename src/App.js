import { BrowserRouter, Routes, Route } from "react-router-dom";

//  Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import Cards from "./Pages/CardsPage/CardsPage";

import Testes from './Pages/Testes/Testes'

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
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/card" element={<Cards />} />

            <Route path="/teste" element={<Testes />} />
          </Routes>
        </BrowserRouter>

      </AppContext>
    </>
  );
}

export default App;
