# Nerds Meet Nerds

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Objectives 
To create a dynamic full-stack web application that incorporates a robust back-end--with servers, databases, advanced APIs, and user authentication—-to an intuitive front end. Nerds Meet Nerds is a dating app that allow users to match with other nerds based on their interests.     

## Contributors
* [Vidal Tan](https://github.com/Vidalatan): Back-end logic, Wireframing, Worked on Public and Controllers folder
    - Express Routes, Socket.io, Server.js
* [Craig Leslie](https://github.com/3roses): Front-end design, Worked on Views and NMN-Templates
    - HTML, CSS, Javascript, Handlebars, Bootstap
* [Gustavo Tijerino](https://github.com/GustavoTijerino1): Back-end logic, Worked on Seeds and Models
    - JavaScript, MySQL, Express.js
* [Andrew Anderson](https://github.com/jandrewanderson): Front-end design, Worked on Views and NMN-Templates
    - HTML, CSS, Javascript, Handlebars, Bootstrap
* [Inna Arabejo](https://github.com/inna-arabejo): Back-end logic, Worked on Controllers folder
    - Javascript, Express.js, CRUD function

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Deployed Page](#deployed)
4. [Screenshots](#screenshots)
5. [Technologies Used](#technologies)
6. [License](#license)

## Installation
Please install the following dependencies to run the application. 
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [express](https://www.npmjs.com/package/express)
* [connect session sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express handlebars](https://www.npmjs.com/package/express-handlebars)
* [express session](https://www.npmjs.com/package/express-session)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [sequelize](https://www.npmjs.com/package/sequelize)
* [socket.io](https://www.npmjs.com/package/socket.io)
* [nodemon](https://www.npmjs.com/package/nodemon)

## Steps to Install
This application should be hosted locally via Heroku. However, if the application is no longer running, or you just wish to run it locally, you can follow these instructions:

### <u>Step One</u>

Download or Clone this repo:
You can either download the repo as a zip file and unzip it to your computer, or you can clone it down to your computer directly.

### <u>Step Two</u>

Navigate to App Directory:
Make sure you are in the directory of the application. It should be a folder named Nerds-Meet-Nerds. 

### <u>Step Three</u>

Install Dependencies:
While you are located in the app directory, enter 'npm install'. This should cause the application to find and install all necessary dependencies.

### <u>Step Four</u>

Edit & Rename .env.Example:
The file named '.env.Example' needs to be renamed to '.env' and the environment variables in the file need to be refactored. Primarily the DB_PW and SESH_SECRET variables. DB_PW is the password for accessing your database, and SESH_SECRET can be any string you wish it to be.

### <u>Step Five</u>

Start the application:
In the command line, enter 'npm run start'. As long as there are no errors, this should start the server and run it at http://localhost:3001

## Usage

### <u>Step One</u>

Run the application:
As mentioned in the installation section, install and run the application.

### <u>Step Two</u>

First time accessing:
When you first load into the app, it should load the login/sign-up page that allows a user to sign-up or login. Enter a username, email, password, and confirm your password on the signup form, or login with one of the seeded accounts. From here there are several navigational links.

A few examples of seeded profiles you can log into:
```
Username: Jinx | Password: potato
Username: Jade | Password: potato
Username: Ruby | Password: potato
Username: Gin  | Password: potato
```

### <u>Step Three</u>

Create your bio, get matched, and start messaging other users:
While logged in, you can either click on a your profile and create a bio from the profile page, or visit the dashboard to see which user you've been matched with. In the dashboard you have the option to look at other user profiles, message them directly, and/or click yes or no. Clicking yes starts a chat with them directly and also adds/save their profile to your dashboard.

### <u>Step Four</u>

Chatroom:
Chat with other users and push messages to each other in real time.

### <u>Step Five</u>

Logging Out:
To log out, simply click the 'Log Out' button at the top right. It will ask you to confirm if you wish to log out. After confirming you should get a message that confirms a successful log out and brings you back to the login/sig-up page.

## Deployed Page
[Nerds Meet Nerds Dating App]()

## Screenshots
![]()

## Technologies Used
Node.js, Express.js, Heroku, Socket.io, HTML, CSS, JS, Bootstrap, MySQL, Sequelize


## License
This project is covered under MIT.

------------------------------------------------------
2022 SMU Full Stack Web Development Bootcamp, Project 2