import React from 'react';
import './upper.css';

export function Upper() {
  return (
    <main className='upper-page'>
      <img
        src="https://www.fishwest.com/Images/Content/fw/cpflk/_O_R4676-450x300.jpg"
        alt="Upper Provo River Picture"
      />

      <section id="what-you-can-catch">
        <h2>What You Can Catch</h2>
        <ul>
          <li>Rainbow trout</li>
          <li>Brown trout</li>
          <li>Cutthroat trout</li>
          <li>Brook trout</li>
          <li>Mountain Whitefish</li>
        </ul>
      </section>

      <section id="where-you-can-go">
        <h2>Where You Can Go</h2>
        <ul>
          <li>
            <strong>Mirror Lake Highway (Hwy 150):</strong> Numerous pull-offs and
            campgrounds offering easy access to the river.
          </li>
          <li>
            <strong>Soapstone Basin and Woodland:</strong> Great for brook, cutthroat,
            and smaller brown trout in fast, freestone water.
          </li>
          <li>
            <strong>Headwaters and meadows:</strong> Around Mirror Lake, Trial Lake,
            and Lilly Lake — smaller fish but high catch rates and great dry fly action.
          </li>
          <li>
            <strong>Best seasons:</strong> Peak flows in late spring from snowmelt;
            best fishing in late summer and fall.
          </li>
          <li>
            <strong>Overall:</strong> Smaller fish but unmatched solitude and alpine
            scenery — ideal for a true mountain stream experience.
          </li>
        </ul>
      </section>

      <section id="what-you-can-use">
        <h2>What You Can Use</h2>
        <ul>
          <li>Fly fishing gear (dry flies, nymphs, small streamers)</li>
          <li>Light spinning tackle for brook trout and cutthroat</li>
        </ul>
      </section>

      <section id="how-you-can-do-it">
        <h2>How You Can Do It</h2>
        <ul>
          <li>Dry fly fishing in meadow sections during hatches</li>
          <li>Euro nymphing or tight-line nymphing in faster currents</li>
          <li>Small stream tactics — stealth and short, accurate casts</li>
        </ul>
      </section>

      <section id="regulations">
        <h2>Regulations</h2>
        <ul>
          <li>
            The Upper Provo generally allows bait fishing in some areas, unlike the
            Middle and Lower sections.
          </li>
          <li>
            Artificial flies and lures only in special regulation stretches.
          </li>
          <li>
            Catch-and-release encouraged to protect native trout populations.
          </li>
          <li>
            Valid Utah fishing license required at all times.
          </li>
          <li>
            Always check the latest Utah Division of Wildlife Resources (UDWR)
            fishing guidebook before fishing.
          </li>
        </ul>
      </section>
    </main>
  );
}
