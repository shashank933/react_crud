import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landing';
import Auth from './pages/auth';
import Login from './components/login';
import SignUp from './components/signup';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/*" element={<Auth />} >
                 <Route path="login" element={<Login />} />
                 <Route path="signup" element={<SignUp />} />
        </Route>
        
    
       
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
