import React from 'react';
import './middle.css';

export function Middle() {
  return (
    <main className='middle-page'>
      <header>
        <h1>The Middle Provo River</h1>
      </header>
      <img
        src="https://norrik.com/wp-content/uploads/2023/02/middle-provo-river-fly-fisherman-below-jordanelle-reservoir.jpg"
        alt="Middle Provo River Picture"
      />

      <section id="what-you-can-catch">
        <h2>What You Can Catch</h2>
        <ul>
          <li>Rainbow trout</li>
          <li>Brown trout</li>
          <li>Cutthroat trout</li>
          <li>Mountain Whitefish</li>
        </ul>
      </section>

      <section id="where-you-can-go">
        <h2>Where You Can Go</h2>
        <ul>
          <li>
            <strong>Legacy Bridge (below Jordanelle Dam):</strong> Year-round cold
            flows ideal for rainbow and brown trout.
          </li>
          <li>
            <strong>River Road Trail area:</strong> Miles of accessible river winding
            through farmland and meadows.
          </li>
          <li>
            <strong>Bunny Farm, Charleston Bridge, Midway Lane:</strong> Consistent
            hatches and highly productive fly-fishing.
          </li>
          <li>
            <strong>LDS Church fields and River Road pull-offs:</strong> Great options
            for spreading out and finding less pressured water.
          </li>
          <li>
            <strong>Overall:</strong> The Middle Provo is considered the crown jewel of
            the river system, though it can get busy during peak hatch seasons.
          </li>
        </ul>
      </section>

      <section id="what-you-can-use">
        <h2>What You Can Use</h2>
        <ul>
          <li>Fly fishing gear (nymphs, dry flies, streamers)</li>
        </ul>
      </section>

      <section id="how-you-can-do-it">
        <h2>How You Can Do It</h2>
        <ul>
          <li>Euro nymphing techniques</li>
          <li>Dry-dropper rigs</li>
          <li>Streamer fishing during low light</li>
        </ul>
      </section>

      <section id="regulations">
        <h2>Regulations</h2>
        <ul>
          <li>Artificial flies and lures only — no bait fishing allowed.</li>
          <li>
            Catch-and-release rules for many sections, especially for brown and rainbow
            trout.
          </li>
          <li>
            The Upper Provo allows bait in some stretches but still follows statewide
            limits.
          </li>
          <li>
            A valid Utah fishing license is required for all anglers.
          </li>
          <li>
            Always check the latest Utah Division of Wildlife Resources (UDWR) fishing
            guidebook for up-to-date regulations.
          </li>
        </ul>
      </section>
    </main>
  );
}
