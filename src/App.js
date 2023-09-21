import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

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
