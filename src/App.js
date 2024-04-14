//===================
// Importing LIBRARIES
//===================
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//===================
// Importing COMPONENTS
//===================
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
//===================
// Importing CSS
//===================
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/mediaquery.scss"



function App() {
  return (
   
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path='/#about'>About</Route>
        <Route path='/contact' element={<Contact />}>Contact</Route>
        <Route path='/#brands'>Brands</Route>
        <Route path='/service' element={<Services />}>Service</Route>
      </Routes>
      <Footer />
    </Router>
    )

}

export default App;
