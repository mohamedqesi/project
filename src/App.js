import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/ContactUs';
import Saved from './Pages/Saved';
import SubmitionForm from './Components/SubmissionForm';
import Card from './Components/Card';
import './App.css';

function App() {
  return (


      <div className="App">
    
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/saved" element={<Saved/>}/>
            <Route path="/login" element={<SubmitionForm/>}/>
            <Route path="/card/:id" element={<Card/>}/>

          </Routes>
        </Router>
      </div>
 

  );
}

export default App;
