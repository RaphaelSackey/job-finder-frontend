import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/home"
import About from "./pages/about/about"
import LoginSignup from "./pages/login-singup/login_signup"
import Navbar from "./components/navbar/navbar"
import PostJob from "./pages/post/postJob";
import NavbarContextProvider from "./CustomHooks/navContext";



export default function App(){
  const location = useLocation();
  const displayNav = location.pathname !== "/loginSignup" && location.pathname !== "/postJob";
 
  return (
    <>
      {displayNav && (
        <NavbarContextProvider>
          <Navbar />
        </NavbarContextProvider>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <NavbarContextProvider>
              <Home />
            </NavbarContextProvider>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/loginSignup" element={<LoginSignup />} />
        <Route path="/postJob" element={<PostJob />} />
      </Routes>
    </>
  );
}