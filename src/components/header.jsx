import { BrowserRouter as Router, Routes, Route,Link, Outlet,useLocation } from 'react-router-dom';
const Header = () =>{
    const location = useLocation();
    return (
<nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">Coach Buddy</h1>
            </div>
            <div className="flex">
              <Link
                to="/"
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              {location.pathname === '/' &&  <Link  
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium" to="/auth/login">login</Link>} 
              {location.pathname === '/auth/login' &&  <Link  
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium" to="/auth/signup">Sign Up</Link>} 
               {location.pathname === '/auth/signup' &&  <Link  
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium" to="/auth/login">login</Link>} 
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header