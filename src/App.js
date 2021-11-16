import './App.css';
import Navbar from './components/Navbar'
import About from './components/About';
import Contact from './components/Contact';
import Notesection from './components/Notesection';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
  <Router>
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Notesection/>} />
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Contact" element={<Contact/>} />
    </Routes>
    </>
    </Router>
  );
}

export default App;
