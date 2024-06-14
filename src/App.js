import { BrowserRouter, Routes, Route }  from "react-router-dom"
import Home from "./pages/home/home"
import About from "./pages/about/about"




export default function App(){
  return(

    <BrowserRouter>

      <Routes>
        
        <Route path="/" element = {<Home />}/>
        <Route path="about" element = {<About />}/>
      
      </Routes>
    
    </BrowserRouter>
    
  )
}