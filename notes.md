# CS 260 Notes
Ok well i'm not sure whether to use this notes file or create a new one. This assignment I learned how to use git to push and pull code from github. All you have to say in the consol is git pull or git push. I learned how to edit within and github and within vs code and then how to update my local copy of the repository on vs code. I am now going to commit and push this to github.

[My startup - Provo Fish Map](https://provofishmap.com)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 44.192.207.47
Ok I just launched/started my first web server through AWS. Here is the current link that will take you there: http://44.192.207.47/
It had a different public ip address at first but then I allocated an elastic ip address to it so it will always stay with this even if the server isn't running or something. I also learned today how to ssh into the server so it pulled up the console terminal for the server on my laptop and i'm able to make edits and such. This was the command to do it:
ssh -i C:\Users\plast\OneDrive\Desktop\Homework\HorsePics.pem ubuntu@44.192.207.47
This was very cool, i've never done this before.

## Caddy

Ok this step took me a while. So I followed all the steps and it seemed to be working fine in AWS. I got my domain name and chose the .com it was $15 a year but that's ok everyone knows .com. After putting in some records in my hosted zones that mapped my domain name to my ip address it took a while but it worked with http so not secure yet. I then was able to make it use HTTPS by ssh into my server and editing the caddyfile by putting my domain name into the ports. It was very hard to figure out the controls of vi just to edit and save that but I eventually figured it out. I then tested my domain name in the search bar and it worked and was secure so that's awesome. 

## HTML

Ok i'm writing this before I actually start any HTML. We went over it a little in class but I have never touched it before. I am kind of confused at how CSS works within HTML as a seperate language or something? I guess I'll figure it out. I will mess around with the simon html files and I will watch some tutorials and practice it so I can get a sound understanding of it. 

Ok I just learned about kind of the structure of html. I learned about several elements within html for example body, header, footer, main, section, aside, p, table, ol/ul, div, and span. It all starts with a body that has 3 parts: header, main, and footer. All the other elements work within those elements. I was able to edit some things such as text and added an a tag which is an anchor element to add links. I also added an image element using an img tag which i guess is self closing so you don't have to add a closing tag like most others i've seen. You can navigate to image with filepath if you have it or a website url with it and it will work. I added a width attribute on the image tag to correctly size the image, it will automatically adjust height so you only have to do width. I added an h1 element using that same tag it goes in the header it basically makes a big header. I am kind of understanding the structure now but I'm sure I will get better with more practice. Hello.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
