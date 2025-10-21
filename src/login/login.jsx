import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login({ isLoggedIn, onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    onLogin();
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    onLogin();
  };

  if (isLoggedIn) {
    return (
      <main className='login-page'>
        <header>
          <h1>Welcome!</h1>
        </header>

        <div className="map-container">
          <img
            src="/prmap.jpg"
            alt="Provo River Map Placeholder"
            className="map-image"
          />
          <button 
            className="map-btn lower" 
            title="Lower Provo"
            onClick={() => navigate('/lower')}
          ></button>
          <button 
            className="map-btn middle" 
            title="Middle Provo"
            onClick={() => navigate('/middle')}
          ></button>
          <button 
            className="map-btn upper" 
            title="Upper Provo"
            onClick={() => navigate('/upper')}
          ></button>
        </div>

        <p>
          Welcome to my website. Here you will be able to interact with this map
          and learn how to fish each section of the Provo River so that you can
          have a great and successful day out on the water!
        </p>
      </main>
    );
  }

  return (
    <main className='login-page'>
      <header>
        <h1>Login</h1>
      </header>
      <form>
        <div>
          <span>@</span>
          <input 
            type="text" 
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <span>🔒</span>
          <input 
            type="password" 
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button" onClick={handleCreateAccount}>Create an Account</button>
      </form>
    </main>
  );
}
