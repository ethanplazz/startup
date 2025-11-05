import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../api';
import './login.css';

export function Login({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isRegistering, setIsRegistering] = React.useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    try {
      const userData = await login(username, password);
      setCurrentUser(userData);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    try {
      const userData = await register(username, password);
      setCurrentUser(userData);
      navigate('/'); 
    } catch (err) {
      setError(err.message);
    }
  };

  if (currentUser) {
    return (
      <main className='login-page'>
        <header>
          <h1>Welcome, {currentUser.username}!</h1>
          {currentUser.isAdmin && <span style={{color: 'gold'}}> (Admin)</span>}
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
        <h1>{isRegistering ? 'Create Account' : 'Login'}</h1>
      </header>
      <form>
        <div>
          <span>👤</span>
          <input 
            type="text" 
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        
        {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
        
        {isRegistering ? (
          <>
            <button type="button" onClick={handleCreateAccount}>Create Account</button>
            <button type="button" onClick={() => setIsRegistering(false)}>
              Back to Login
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={handleLogin}>Login</button>
            <button type="button" onClick={() => setIsRegistering(true)}>
              Create an Account
            </button>
          </>
        )}
      </form>
    </main>
  );
}