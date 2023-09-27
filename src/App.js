import { BrowserRouter, Routes, Route } from "react-router-dom";

//  Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import Testes from './Pages/Testes/Testes'

//  Styles
import './Assets/Styles/index.css'
import './Assets/Styles/colors.css'

//Context
import { AppContext, GlobalContext } from './Util/Context'
import { useContext, useEffect, useState } from "react";



function App() {
  // const [state, setState] = useState('light');

  // const context = useContext(GlobalContext);

  // useEffect(() => {
  //   if (context) {
  //     console.log("teste")
  //     setState(context.contextState)
  //   }
  // }, [context])

  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" Component={LandingPage} />
            <Route path="/login" Component={LoginPage} />
            <Route path="/dashboard" Component={DashboardPage} /> */}

            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />

            <Route path="/teste" element={<Testes />} />
          </Routes>
        </BrowserRouter>

      </AppContext>
    </>
  );
}

export default App;
