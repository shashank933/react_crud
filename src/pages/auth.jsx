import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link, Outlet,useLocation } from 'react-router-dom';
import Login from '../components/login';
import SignUp from '../components/signup';
import Header from '../components/header';
import Footer from '../components/footer';


function Auth() {
    const location = useLocation();
  return (
    <div className='bg-blue-200 flex flex-col max-h-screen'>
      
    


        <Header/>
        
        <Outlet />
       <Footer/>
      
     
      
    
     
        
       
    </div>
  
  
  );
}

export default Auth;
