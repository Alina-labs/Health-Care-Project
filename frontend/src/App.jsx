import  Contact from './pages/Contact/Contact';
import Footer from './components/commons/Footer'
import Navbar from './components/commons/Navbar'
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Landing1 from './pages/Landing1/Landing1';
import About1 from './pages/About/About1';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  

  return (
    <>
        <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Landing1 />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Landing1/>  */}
          {/* <About1/>  */}
          {/* <Contact/>   */}
          {/* <SignIn/>    */}
          {/* <SignUp /> */}
        </Routes>
        </BrowserRouter>  
        <Footer/> 
        
    </>
  )
}

export default App;
