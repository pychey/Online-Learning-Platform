import React from "react";
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
import ProgramDetail from "./pages/ProgramDetail";
import LostPasswordPage from "./pages/LostPasswordPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyCoursePage from "./pages/MyCoursePage";
import MyCertificatePage from "./pages/MyCertificatePage";
import GuidePage from "./pages/GuidePage";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuidePage />}/>
        <Route path="/courselist" element={<CourseListPage />} />
        <Route path="/product/:id" element={<CourseDetailPage />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/institute" element={<Institute />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/my-courses" element={<MyCoursePage />} />
        <Route path="/my-certificates" element={<MyCertificatePage />} />
        <Route path="/my-account-settings" element={<RegisterLoginPage/>} />
        <Route path="/lost-password"element={<LostPasswordPage />} />
        <Route path="/login"element={<LoginPage />} />
        <Route path="/register"element={<RegisterPage />} />
        <Route path="/help" element={<Help/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
