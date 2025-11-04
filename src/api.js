
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
  try {
    const response = await fetch('/api/auth/user');
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getPosts() {
  const response = await fetch('/api/posts');
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return await response.json();
}

export async function createPost(imageUrl, caption) {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageUrl, caption })
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg);
  }
  
  return await response.json();
}

export async function deletePost(postId) {
  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg);
  }
}