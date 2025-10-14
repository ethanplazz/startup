import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className='login-page'>
      <header>
        <h1>Login</h1>
      </header>
      <form method="get" action="community.html">
        <div>
          <span>@</span>
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          <span>🔒</span>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
        <button type="submit">Create an Account</button>
      </form>

      <div className="map-container">
        <img
          src="/prmap.jpg"
          alt="Provo River Map Placeholder"
          className="map-image"
        />
        <button className="map-btn lower" title="Lower Provo"></button>
        <button className="map-btn middle" title="Middle Provo"></button>
        <button className="map-btn upper" title="Upper Provo"></button>
      </div>

      <p>
        Welcome to my website. Here you will be able to interact with this map
        and learn how to fish each section of the Provo River so that you can
        have a great and successful day out on the water!
      </p>
    </main>
  );
}
