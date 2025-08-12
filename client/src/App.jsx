import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import VerifyPage from "./pages/VerifyPage";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Cart from "./pages/Cart";

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
        
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App;
