import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/home"
import Profile from './pages/profile/profile'
import LoginSignup from "./pages/login-singup/login_signup"
import Navbar from "./components/navbar/navbar"
import PostJob from "./pages/post/postJob";
import NavbarContextProvider from "./CustomHooks/navContext";
import Apply from "./components/apply/apply";




export default function App(){
  const location = useLocation();
  const displayNav =
    location.pathname !== "/loginSignup" &&
    location.pathname !== "/postJob" &&
    location.pathname !== "/apply" &&
    location.pathname !== "/profile";
  return (
    <>
      <NavbarContextProvider>
        {displayNav && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
          <Route path="/postJob" element={<PostJob />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </NavbarContextProvider>
    </>
  );
}