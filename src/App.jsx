
import { Routes, Route } from "react-router-dom";
import './App.css'

import  About  from "./components/About";
import  Home  from "./components/Home";
import  Default  from "./components/Default";
import Web from "./components/Web";
import  Header  from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Store from "./components/Layouts/Store.jsx";

function App() {
  

  return (
    <>
    <Header />
      <Routes>
          
            <Route path="about" element={<About />}/>
            <Route path="/" element={<Home />}/>
            <Route path="web" element={<Web />}/>
            <Route path="*" element={<Default />}/>
            <Route path="store" element={<Store />}/>
            
          
      </Routes>

      
    <Footer />
    </>
  )
}

export default App
