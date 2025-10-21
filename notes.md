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

I just did a bunch of html for this first startup html assignment. Although it felt like a lot it was pretty simple. I put a header and footer on every page so they stay consistent. I added several sections and paragraphs to each page to organize my text and also where people can post pictures.

## CSS

I just did my first ever practice with css and it's great. I am understanding the concept of essentially just selecting what you want to edit and then applying things to it. For example you could have a block that styles the whole body, a block that styles only tables, only sections, it can be anything. You can also name an element so you can only edit that specific element with css. You can do all sorts of things with color, size, alignment, backgrounds, borders, etc. I have been doing a lot of css for this next deliverable. I like assigning everything a class in my html so I can just edit that specifically using a hashtag in my css because once the file starts getting long then certain things start to override each other especially if my html isn't the best.  

## Deploying to Server

Alright holy cow that was confusing to just deploy the simon html to my subdomain simon.provofishmap.com. I cloned the repository and took a look at everything and went live with live server to see what it looked like. After that I attempted to figure out how to word the commands properly to use the shell script to deploy it all. It wasn't working in my windows terminal so I asked chatgpt what I was doing wrong and it had me do it in my gitbash one. I rightclicked on the folder with everything I wanted to deploy which was simon html and then chose open with gitbash. I then essentially typed in the same command but slightly different. I had to change the path to my pem key because it wanted it linux style apparently. So after I ran that it worked. I then ssh into my server to reboot it using `sudo reboot`. Then I exited and let it sit a minute and I typed in simon.provofishmap.com and it worked so that was awesome. So the process was go to the file I want to deploy the contents to the server, right click, open with git bash. Type this command:
`bash deployFiles.sh -k /c/Users/plast/OneDrive/Desktop/Homework/HorsePics.pem -h simon.provofishmap.com -s simon`
But if i'm doing my startup I type
`bash deployFiles.sh -k /c/Users/plast/OneDrive/Desktop/Homework/HorsePics.pem -h startup.provofishmap.com -s starup`
Then it should work and then all I have to is ssh in in the same terminal using this command:
`ssh -i /c/Users/plast/OneDrive/Desktop/Homework/HorsePics.pem ubuntu@simon.provofishmap.com`
But again change it to startup if I'm doing that. Then I type `sudo reboot` and then `exit` and give it a minute and it should be good to go.

## React Part 1: Routing

This one took forever but I will try to recount what I did. I just had to follow the instructions and the video very carefully. So I first downloaded vite, bootstrap, and react. I then started organizing my files differently by putting each page in there own folder in a src folder. I then created a new index.html and changed my other one to a login page. I gave each view a jsx file and also made an app jsx file. 

Ok I think i'm finally starting to understand react a little, at least the css part. The app.jsx will show all the time but if you click the links it will route you to the other jsx pages. The app.css is the styling that will apply to everything so for this you should include things that will stay the same across all pages such as header and footer styling, paragraphs, forms, etc. You can also add a css file to any other page you want if it has uniqe styles so you don't want to the universal css to apply. Today I did a lot of editing and figured that out. 

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
## Midterm Notes

1. What does the <link> element do?
It connects an external resource to the HTML document — most commonly an external CSS file.
<link rel="stylesheet" href="styles.css">

2. Div is a generic container in html,

3. Difference between #title and .grid selector
#title selects an element with id="title" (IDs are unique).
.grid selects all elements with class="grid". (CSS)

4. Difference between padding and margin
Padding: space inside the element, between content and border.
Margin: space outside the element, between border and neighboring elements.

7. const add = (a, b) => a + b;
Defines a function that takes two parameters and returns their sum.

8. What does this code using map() output?
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);
Output: [2, 4, 6]

10. What does this line using a # selector do?
document.querySelector("#title").textContent = "Hello";
Selects the element with id="title" and sets its text to “Hello”.

11. Which of the following are true about the DOM?
The DOM represents the structure of an HTML document as a tree of objects. True
You can use JavaScript to access and modify elements in the DOM. True

12. Default display property of <span>
inline

13. How to make all <div> elements have a red background in CSS
div {
  background-color: red;
}

14. How to display an image with a hyperlink
<a href="https://byuh.edu">
  <img src="logo.png" alt="BYUH Logo">
</a>

15. CSS box model order (inside → out)
Content → Padding → Border → Margin

16. Set only the word “trouble” to green
<p><span class="green">trouble</span>double</p>
.green {
  color: green;
}

17. What will this code output with a for loop?
for (let i = 0; i < 3; i++) {
  console.log(i);
}
Output:
0
1
2

18. Change element with id “byu” text color to green
document.getElementById("byu").style.color = "green";

19. Opening HTML tags

Paragraph → <p>

Ordered list → <ol>

Unordered list → <ul>

Second level heading → <h2>

First level heading → <h1>

Third level heading → <h3>

20. Declare document type to be HTML
<!DOCTYPE html>

21. Valid JavaScript syntax for control structures
if (x > 0) { ... }
else { ... }

for (let i = 0; i < 5; i++) { ... }

while (condition) { ... }

switch (value) {
  case 1: ...; break;
  default: ...;
}

22. Correct syntax for creating a JavaScript object
const person = { name: "Ethan", age: 22 };

23. Can you add new properties to JavaScript objects?
Yes
person.job = "Developer";

24. Tag to include JavaScript in HTML
<script src="script.js"></script>
or inline
<script>
  console.log("Hello");
</script>

25. Change text “animal” to “crow” and leave “fish” unaffected
<p id="bird">animal</p>
<p>fish</p>
<script>
document.getElementById("bird").textContent = "crow";
</script>

26. Which correctly describes JSON?
JavaScript Object Notation — a lightweight data format using key/value pairs.
{ "name": "Ethan", "age": 22 }

27. What do these console commands do?

chmod — change file permissions

pwd — print working directory

cd — change directory

ls — list files

vim / nano — text editors

mkdir — make directory

mv — move or rename files

rm — remove files

man — show manual/help

ssh — connect securely to remote server

ps — show running processes

wget — download files from the web

sudo — run command as superuser (admin)

29. What happens with ls -la?
Lists all files (including hidden) in long format with permissions and details.

30. Domain name structure for banana.fruit.bozo.click

Top-level domain (TLD): click

Root domain: bozo.click

Subdomain: banana.fruit.bozo.click (with banana and fruit as subdomains)

31. Is a web certificate necessary to use HTTPS?
Yes, HTTPS requires a valid SSL/TLS certificate.

32. Can a DNS A record point to an IP address or another A record?
It can point to an IP address, not another A record (only CNAME can point to another record).

33. Reserved ports

443 → HTTPS

80 → HTTP

22 → SSH

34. What will code using Promises output?
const p = new Promise(resolve => resolve("Done"));
p.then(result => console.log(result));
Output:
Done
