import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import VerifyPage from "./pages/VerifyPage";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import RegisterLoginPage from "./pages/RegisterLoginPage";
import Help from "./pages/Help"

import Cart from "./pages/Cart";
import Institute from "./pages/Institute";
import LostPasswordPage from "./pages/LostPasswordPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courselist" element={<CourseListPage />} />
        <Route path="/product/:id" element={<CourseDetailPage />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/institute" element={<Institute />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/my-account-settings" element={<RegisterLoginPage/>} />
        <Route path="/lost-password"element={<LostPasswordPage />} />
        <Route path="/login"element={<LoginPage />} />
        <Route path="/register"element={<RegisterPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
