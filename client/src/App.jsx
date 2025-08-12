import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import RegisterLoginPage from "./pages/RegisterLoginPage";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courselist" element={<CourseListPage />} />
        <Route path="/my-account-settings" element={<RegisterLoginPage/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App;
