# Provo Fish Map

[My Notes](notes.md)

This app will assist fisherman on the who, what, when, where, how, and why of fishing the provo river and surrounding bodies of water. You will be able to click on an interactive map of the different sections of the provo river and it will give you direct info on what kind of fish live there and how to catch them.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever moved to a new place or traveled to a far away land and wanted to dip your line in the water while you're there but don't know how to effectively target the local species? You then spent a significant amount of time trying to research online and even using chatgpt which gave you questionable answers. Then once you're out there you catch nothing and wonder why. This app will solve all of those issues. This is the one stop shop for fishing the Provo river where you can select on an interactive map where you would like to go fishing and it will give you all of the accurate info you need to have a successful day on the water such as location, fly selection, fishing technique, leader strength, and rod weight.

### Design

![Design image](images/FishingWebsitePicture.jpg)

Here is a drawing of what the different pages will look like on the web app.

### Key features

- Interactive map of the river that you can click on
- Secure login to your account through HTTPS
- Info boxes with information on fish, flies, etc.
- Image posting to share your fish
- Commenting on posts
- Up to date information

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. 4 HTML pages, the login page, the main page with the interactive map, the page that displays the information, and the page with the fish pictures.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast. An interactive map that glows each section when you hover.
- **React** - Will handle the functionality of displaying pop ups and pages of info, as well as the logic behind the interactive river map.
- **Service** - Backend service with endpoints for login, posts, comments, etc.
- **DB/Login** - This will store peoples logins, posts, and comments.
- **WebSocket** - You will be able to communicate to others in real time through posting and commenting.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://startup.provofishmap.com/). Most of the notes on what I did are in my notes file. I succesfully deployed my web server which is physically in northen virginia. I assigned it an elastic IP and then attached that to my domain name provofishmap.com - I then ssh into the server from my laptop and used vi to edit the caddy file so the ports trying to be accessed will rerout to my website and will also use HTTPS so it is secure and it handles all that for me. So now you can go to my website securely and right now it only shows the content that was predownloaded from an AWS image I think. My next move will be to edit my startup html and push it into the server using a shell script written for me so that the website will display whatever I write and not what was preinstalled. 

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
