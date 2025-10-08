import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Lower } from './lower/lower';
import { Middle } from './middle/middle';
import { Upper } from './upper/upper';
import { About } from './about/about';
import { Community } from './community/community';

export default function App() {
  return (
    <BrowserRouter>
    <div className="body bg-dark text-light">
      <header>
        <h1>Provo Fish Map</h1>
        <nav>
          <ul>
            <li><NavLink className="nav-link" to="">
                  Login
                </NavLink></li>
            <li><NavLink className="nav-link" to="lower">
                  Lower Provo
                </NavLink></li>
            <li><NavLink className="nav-link" to="middle">
                  Middle Provo
                </NavLink></li>
            <li><NavLink className="nav-link" to="upper">
                  Upper Provo
                </NavLink></li>
            <li><NavLink className="nav-link" to="about">
                  About
                </NavLink></li>
            <li><NavLink className="nav-link" to="community">
                  Community
                </NavLink></li>
          </ul>
        </nav>
        <hr />
      </header>

      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/lower' element={<Lower />} />
        <Route path='/middle' element={<Middle />} />
        <Route path='/upper' element={<Upper />} />
        <Route path='/about' element={<About />} />
        <Route path='/community' element={<Community />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer>
        <hr />
        <span className="text-reset">Ethan Plaster</span>
        <br />
        <a href="https://github.com/ethanplazz/startup.git">GitHub</a>
      </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}
