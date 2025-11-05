
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

export async function getRandomQuote() {
  try {

    const randomId = Math.floor(Math.random() * 100) + 1;
    const response = await fetch(`https://dummyjson.com/quotes/${randomId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }
    
    const data = await response.json();
    return {
      content: data.quote,
      author: data.author
    };
  } catch (error) {
    console.log('Using fallback quote:', error);
    const fallbackQuotes = [
      { content: "The charm of fishing is that it is the pursuit of what is elusive but attainable.", author: "John Buchan" },
      { content: "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.", author: "Maimonides" },
      { content: "There's a fine line between fishing and just standing on the shore like an idiot.", author: "Steven Wright" }
    ];
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
  }
}