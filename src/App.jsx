import LandingPage from "./components/LandingPage"
import About from "./components/About"
import Contact from "./components/Contact"
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Services from "./components/Services"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/service" element = {<Services />} />
        <Route path='/about' element= {<About/>}/>
        <Route path="/contact" element= {<Contact />} /> 
      </Routes>
       <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
