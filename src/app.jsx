import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './login/login';
import { Lower } from './lower/lower';
import { Middle } from './middle/middle';
import { Upper } from './upper/upper';
import { About } from './about/about';
import { Community } from './community/community';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="mainheader">
          <h1>Provo Fish Map</h1>
          <nav>
            <ul>
              <li>
                <NavLink className="nav-link" to="">
                  {isLoggedIn ? 'Welcome' : 'Login'}
                </NavLink>
              </li>
              
              {/* Only show these links when logged in */}
              {isLoggedIn && (
                <>
                  <li>
                    <NavLink className="nav-link" to="lower">
                      Lower Provo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="middle">
                      Middle Provo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="upper">
                      Upper Provo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="community">
                      Community
                    </NavLink>
                  </li>
                </>
              )}
              
              {/* About is always visible */}
              <li>
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
          <hr />
        </header>

        <Routes>
          {/* Pass isLoggedIn and handleLogin to Login component */}
          <Route 
            path='/' 
            element={<Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />} 
            exact 
          />
          
          {/* Protected routes - redirect to login if not logged in */}
          <Route 
            path='/lower' 
            element={isLoggedIn ? <Lower /> : <Navigate to="/" />} 
          />
          <Route 
            path='/middle' 
            element={isLoggedIn ? <Middle /> : <Navigate to="/" />} 
          />
          <Route 
            path='/upper' 
            element={isLoggedIn ? <Upper /> : <Navigate to="/" />} 
          />
          <Route 
            path='/community' 
            element={isLoggedIn ? <Community /> : <Navigate to="/" />} 
          />
          
          {/* About is always accessible */}
          <Route path='/about' element={<About />} />
          
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <span className="text-reset">Ethan Plaster</span>
          <span>© 2025 Provo Fish Map. Ya I reserved these rights.</span>
          <a href="https://github.com/ethanplazz/startup.git">GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}
