import { BrowserRouter, Routes, Route }  from "react-router-dom"
import Home from "./pages/home/home"
import About from "./pages/about/about"
import Login_signup from "./pages/login-singup/login_signup"
import Navbar from "./components/navbar/navbar"




export default function App(){
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login_signup" element={<Login_signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}