import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";

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
        <Route path="/cart"element={<Cart/>}/>
        <Route path="/test" element={<InstituteOverview/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App;
