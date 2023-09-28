import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Mywork from './Components/Mywork';
import Experince from './Components/Experince';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route, Link, withRouter } from 'react-router-dom'




function App() {
  return (
    <div className="App">


          <div>
             <Navbar/>
             <About/>
             <Experince/>
             <Mywork/>
             <Contact/>
             <Footer/>




          </div>
            
         

    </div>
  );
}

export default App;
