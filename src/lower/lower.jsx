import React from 'react';
import './lower.css';


export function Lower() {
  return (
    <main className='lower-page'>
      <header>
        <h1>The Lower Provo River</h1>
      </header>
      <img
        src="https://thewickedfly.com/wp-content/uploads/2019/11/lowerprovo_gephardt-daily.jpg"
        alt="Lower Provo River Picture"
      />

      <section id="what-you-can-catch">
        <h2>What You Can Catch</h2>
        <ul>
          <li>Rainbow Trout</li>
          <li>Brown Trout</li>
          <li>Cutthroat Trout</li>
          <li>Mountain Whitefish</li>
        </ul>
      </section>

      <section id="where-you-can-go">
        <h2>Where You Can Go</h2>
        <ul>
          <li>
            Just below <strong>Deer Creek Dam</strong> — productive water but steep access
            (improvements underway)
          </li>
          <li>
            <strong>Provo Canyon:</strong> Olmstead Diversion Dam, Vivian Park, Upper Falls Park,
            Nunn’s Park, and Canyon View Park — great for brown and rainbow trout
          </li>
          <li>
            <strong>Smaller access points:</strong> Ron Last Park, the Frazier pull-off (milepost 12.7),
            and two additional primitive pull-offs along the highway
          </li>
          <li>
            <strong>South side of the road near Deer Creek Park</strong> — another reliable access area
          </li>
          <li>
            <strong>Further downstream:</strong> Provo River Parkway and city parks offer shoreline access
            closer to town
          </li>
          <li>
            <strong>Utah Lake State Park (river mouth):</strong> shifts to warm-water fishing —
            bass, carp, and catfish
          </li>
          <li>
            Remember: the <strong>riverbed is public</strong>, but adjacent land may be private —
            avoid trespassing
          </li>
        </ul>
      </section>

      <section id="what-you-can-use">
        <h2>What You Can Use</h2>
        <ul>
          <li>Fly fishing gear</li>
          <li>Nymphs and streamers</li>
          <li>Dry flies for surface action</li>
        </ul>
      </section>

      <section id="how-you-can-do-it">
        <h2>How You Can Do It</h2>
        <ul>
          <li>Euro nymphing for deep, fast runs</li>
          <li>Indicator nymphing in slower pools</li>
          <li>Streamer fishing for aggressive brown trout</li>
          <li>Dry fly fishing during hatches</li>
        </ul>
      </section>

      <section id="regulations">
        <h2>Regulations</h2>
        <ul>
          <li>
            The Provo River is managed as a <strong>blue-ribbon fishery</strong> — special rules apply
          </li>
          <li>
            <strong>Artificial flies and lures only</strong> — bait fishing prohibited on most stretches
          </li>
          <li>
            <strong>Catch-and-release</strong> for certain species (especially brown and rainbow trout)
          </li>
          <li>
            <strong>Upper Provo:</strong> more general regulations; bait allowed in some areas
          </li>
          <li>
            <strong>Valid Utah fishing license</strong> required at all times
          </li>
          <li>
            Always check the latest <strong>UDWR fishing guidebook</strong> for current regulations
          </li>
        </ul>
      </section>
    </main>
  );
}
