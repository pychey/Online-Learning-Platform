import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import VerifyPage from "./pages/VerifyPage";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import RegisterLoginPage from "./pages/RegisterLoginPage";
import Help from "./pages/Help"

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Cart from "./pages/Cart";
import InstituteOverview from "./components/InstituteOverview";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courselist" element={<CourseListPage />} />
        <Route path="/product/:id" element={<CourseDetailPage />} />
        <Route path="/cart"element={<Cart/>}/>
        <Route path="/verify" element={<VerifyPage />} />
        
        <Route path="/my-account-settings" element={<RegisterLoginPage/>} />
        <Route path="/help" element={<Help/>}/>
        <Route path="/test" element={<InstituteOverview/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App;
