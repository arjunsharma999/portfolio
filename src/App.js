import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Mywork from './Components/Mywork';
import Experince from './Components/Experince';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import particleBackground from './Components/particleBackground';





function App() {


  return (
    <div className="App">


           <div>
          <particleBackground/>
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
