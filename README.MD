# The Guest List

## Description
The Guest List is a full stack application that allows a user to signup, login, and add guests to their wedding guest list.\  

As a user, I want to be able to store my guest’s contact information, whether they have rsvp’d or not, and what food choice they have selected.  I also want to be able to edit their information and delete their information.

## Table Of Contents
* [Installation](#installation)
* [Technologies Used](#Technologies_Used)
* [Future Development](#Future_Development)
* [Features](#Features)
* [Credits](#Credits)
* [Contributing](#Contributing)
* [Questions](#Questions)
* [License](#license)
## Screenshot
![alt text](./public/images/SC_TGL.png)
## Installation
If you would like the view the site from a user's point of view, you have the option of viewing the site on Heroku. It is located at <"heroku url">.

If you would like to run the application locally, please ensure that you have the prerequisites installed, then take the following steps:

Clone this repository to your local machine with git `clone <repo-url>.`\
Install NPM dependencies by running `npm install` in the project directory.\
Create and .env file that includes:\
`DB_NAME='the_guest_list_db'`\
`DB_USER='root'`\
`DB_PW='<Your SQL Password>'`\
`SESSION='<Anything you'd like to name>'`\
If you use a MySQL username other than root or have a MySQL password, and update lines 2 and 3.\
Log into MySQL CLI with `mysql -u root` (substitute your username and add `-p <your password>` if needed).\
Run `schema.sql;`\
Exit MySQL with `exit`.\
Ensure that you are in the root project directory, then `run npm start`.\
The application will be running at localhost:3001/

## Technologies Used

Bulma (Front-end framework)\
Handlebars (Templating engine)\
Heroku (Cloud platform)\
MySQL (RDBMS)\
Node.js (Javascript environment)\
Express (Web framework within Node.js)\
Sequelize (ORM)\
JQuery Validation Plugin

## Future Development
Add a customizable seating chart  and table numbers to the guest list.\
Add a section on the app that allows guests to share their photos  from their personal devices.\
Eventually we would develop this into an app for smartphones that will auto upload the photos taken from the wedding/event.\
Expand this app to other events besides weddings.

## Features
Sign up/
Login/
Add Guest/
Edit Guest/


## Credits
Heather Johnsick, Chotan Sharma, Jacqueline Merlan, Nathanael Farver, Benjamin Eidum
## Contributing

## Questions
