import React from 'react';
import './about.css';

export function About() {
  return (
    <main className='about-page'>
      <header>
        <h1>About the Author</h1>
      </header>
      <img
        src="https://www.ginkandgasoline.com/wp-content/uploads/2016/02/DSC_5533-2.jpg"
        alt="Fly fishing on the Provo River"
      />
      <p>
        Thanks for visiting my website! I’m an avid fly fisherman who has spent
        countless hours on the Provo River and surrounding waters, and I built
        this site to share what I’ve learned so others can enjoy the sport as
        much as I do. Here you’ll find tips, maps, and information to help you
        have a successful day on the water, whether you’re new to fly fishing or
        already experienced. Don’t forget to share your own catches by posting
        them here—I’d love to see the fish you land and help build a community
        of anglers who enjoy and respect these amazing rivers.
      </p>
    </main>
  );
}
