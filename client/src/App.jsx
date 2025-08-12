import HomePage from "./pages/HomePage";
import Course from "./pages/Course";
import CourseListPage from "./pages/CourseListPage";
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
        <Route path="/cart"element={<Cart/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App;
