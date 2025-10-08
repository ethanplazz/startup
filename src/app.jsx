import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body bg-dark text-light">
      <header>
        <h1>Provo Fish Map</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="lower.html">Lower Provo</a></li>
            <li><a href="middle.html">Middle Provo</a></li>
            <li><a href="upper.html">Upper Provo</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="community.html">Community</a></li>
          </ul>
        </nav>
        <hr />
      </header>

      <main>App components go here</main>

      <footer>
        <hr />
        <span className="text-reset">Ethan Plaster</span>
        <br />
        <a href="https://github.com/ethanplazz/startup.git">GitHub</a>
      </footer>
    </div>
  );
}
