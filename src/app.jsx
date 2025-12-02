import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { getCurrentUser, logout } from './api';
import { Login } from './login/login';
import { Lower } from './lower/lower';
import { Middle } from './middle/middle';
import { Upper } from './upper/upper';
import { About } from './about/about';
import { Community } from './community/community';
import FishClickEffect from './FishClickEffect';
import ActivityFeed from './ActivityFeed';

export default function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const user = await getCurrentUser();
    setCurrentUser(user);
    setLoading(false);
  }

  async function handleLogout() {
    await logout();
    setCurrentUser(null);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <FishClickEffect />
      <div className="body bg-dark text-light">
        <header className="mainheader">
          <h1>Provo Fish Map</h1>
          <nav>
            <ul>
              <li>
                <NavLink className="nav-link" to="">
                  {currentUser ? 'Welcome' : 'Login'}
                </NavLink>
              </li>
              
              {currentUser && (
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
              
              <li>
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>

              {currentUser && (
                <li>
                  <button 
                    className="nav-link" 
                    onClick={handleLogout}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'inherit',
                      textDecoration: 'none'
                    }}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </header>

        <Routes>
          <Route 
            path='/' 
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
            exact 
          />
          
          <Route 
            path='/lower' 
            element={currentUser ? <Lower /> : <Navigate to="/" />} 
          />
          <Route 
            path='/middle' 
            element={currentUser ? <Middle /> : <Navigate to="/" />} 
          />
          <Route 
            path='/upper' 
            element={currentUser ? <Upper /> : <Navigate to="/" />} 
          />
          <Route 
            path='/community' 
            element={currentUser ? <Community currentUser={currentUser} /> : <Navigate to="/" />} 
          />
          
          <Route path='/about' element={<About />} />
          
          <Route path='*' element={<NotFound />} />
        </Routes>

        {/* Activity Feed - Fixed position, visible when logged in */}
        {currentUser && (
          <div style={{ 
            position: 'fixed', 
            bottom: '80px',
            right: '20px', 
            zIndex: 1000 
          }}>
            <ActivityFeed />
          </div>
        )}

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