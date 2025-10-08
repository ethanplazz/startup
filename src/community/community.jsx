import React from 'react';
import './community.css';

export function Community() {
  return (
    <main>
      <header>
        <h1>Community Fish Posts</h1>
      </header>

      <section id="new-post">
        <h2>Share Your Fish</h2>
        <form>
          <label htmlFor="fish-photo">Upload your fish:</label>
          <input
            type="file"
            id="fish-photo"
            name="fish-photo"
            accept="image/*"
          />

          <label htmlFor="caption">Write a caption:</label>
          <textarea id="caption" name="caption" rows="3" cols="30"></textarea>

          <button type="submit">Post</button>
        </form>
      </section>

      <section id="posts">
        <h2>Latest Posts</h2>
        <article className="post">
          <img
            src="public/MeWithSalmon.jpg"
            alt="A beautiful PB fish"
          />
          <p className="caption">
            Caught this one today on the upper Provo!
          </p>
          <small className="timestamp">Posted on Sept 24, 2025</small>
        </article>
      </section>
    </main>
  );
}
