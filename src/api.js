
export async function register(username, password) {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg);
  }
  
  return await response.json();
}

export async function login(username, password) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg);
  }
  
  return await response.json();
}

export async function logout() {
  const response = await fetch('/api/auth/logout', {
    method: 'DELETE'
  });
  
  if (!response.ok) {
    throw new Error('Logout failed');
  }
}

export async function getCurrentUser() {
  const response = await fetch('/api/auth/user');
  
  if (!response.ok) {
    return null;
  }
  
  return await response.json();
}

export async function getScores() {
  const response = await fetch('/api/scores');
  
  if (!response.ok) {
    throw new Error('Failed to fetch scores');
  }
  
  return await response.json();
}

export async function submitScore(score) {
  const response = await fetch('/api/scores', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ score })
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit score');
  }
  
  return await response.json();
}