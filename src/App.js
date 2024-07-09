import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/home"
import About from "./pages/about/about"
import LoginSignup from "./pages/login-singup/login_signup"
import Navbar from "./components/navbar/navbar"
import PostJob from "./pages/post/postJob";




export default function App(){
  const location = useLocation();
  const displayNav = location.pathname !== "/loginSignup" && location.pathname !== "/postJob";
  return (
    <>
      {displayNav && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
          <Route path="/postJob" element = {<PostJob />} />
        </Routes>
    </>
  );
}