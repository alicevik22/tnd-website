
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import About from './components/About';
import Event from './components/Event';
import Sources from './components/Sources';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contactus from './components/Contactus';

function App() {
  return (
    <>
    
      
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Event />} />
        <Route path='/resources' element={<Sources />} />
        <Route path='/contactus' element={<Contactus />} />
        </Routes>  

      </Router>
    </>
  );
}

export default App;
