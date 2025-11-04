import React from 'react';
import { getPosts, createPost, deletePost } from '../api';
import './community.css';

export function Community({ currentUser }) {
  const [posts, setPosts] = React.useState([]);
  const [caption, setCaption] = React.useState('');
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      setError('Failed to load posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!currentUser) {
      setError('You must be logged in to post');
      return;
    }

    if (!selectedFile || !caption.trim()) {
      alert('Please upload an image and add a caption!');
      return;
    }

    try {
      const newPost = await createPost(previewUrl, caption);
      setPosts([newPost, ...posts]);
      
      setCaption('');
      setSelectedFile(null);
      setPreviewUrl('');
      event.target.reset();
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      await deletePost(postId);
      setPosts(posts.filter(p => p.id !== postId));
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  if (loading) {
    return <main className='community-page'><p>Loading posts...</p></main>;
  }

  return (
    <main className='community-page'>
      <header>
        <h1>Community Fish Posts</h1>
      </header>

      {currentUser ? (
        <section id="new-post">
          <h2>Share Your Fish</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fish-photo">Upload your fish:</label>
            <input
              type="file"
              id="fish-photo"
              name="fish-photo"
              accept="image/*"
              onChange={handleFileChange}
            />

            <label htmlFor="caption">Write a caption:</label>
            <textarea 
              id="caption" 
              name="caption" 
              rows="3" 
              cols="30"
              value={caption}
              onChange={handleCaptionChange}
            ></textarea>

            <button type="submit">Post</button>
          </form>
          {error && <p className="error" style={{color: 'red'}}>{error}</p>}
        </section>
      ) : (
        <section id="new-post">
          <p>Please log in to share your fish!</p>
        </section>
      )}

      <section id="posts">
        <h2>Latest Posts</h2>
        {posts.length === 0 ? (
          <p>No posts yet. Be the first to share!</p>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="post">
              <div className="post-header">
                <strong>{post.username}</strong>
                <small className="timestamp">
                  Posted on {new Date(post.timestamp).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </small>
              </div>
              
              <img
                src={post.imageUrl}
                alt="A beautiful fish"
              />
              <p className="caption">{post.caption}</p>
              
              {currentUser && (currentUser.username === post.username || currentUser.isAdmin) && (
                <button 
                  onClick={() => handleDelete(post.id)}
                  className="delete-button"
                  style={{
                    backgroundColor: '#d9534f',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  Delete Post
                </button>
              )}
            </article>
          ))
        )}
      </section>
    </main>
  );
}