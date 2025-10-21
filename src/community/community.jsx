import React from 'react';
import './community.css';

export function Community() {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      imageUrl: '/MeWithSalmon.jpg',
      caption: 'Caught this one today on the upper Provo!',
      timestamp: 'Sept 24, 2025'
    }
  ]);

  const [caption, setCaption] = React.useState('');
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile || !caption.trim()) {
      alert('Please upload an image and add a caption!');
      return;
    }

    const newPost = {
      id: Date.now(),
      imageUrl: previewUrl,
      caption: caption,
      timestamp: new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      })
    };

    setPosts([newPost, ...posts]);
    setCaption('');
    setSelectedFile(null);
    setPreviewUrl('');
    event.target.reset();
  };

  return (
    <main className='community-page'>
      <header>
        <h1>Community Fish Posts</h1>
      </header>

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
      </section>

      <section id="posts">
        <h2>Latest Posts</h2>
        {posts.map((post) => (
          <article key={post.id} className="post">
            <img
              src={post.imageUrl}
              alt="A beautiful fish"
            />
            <p className="caption">{post.caption}</p>
            <small className="timestamp">Posted on {post.timestamp}</small>
          </article>
        ))}
      </section>
    </main>
  );
}
