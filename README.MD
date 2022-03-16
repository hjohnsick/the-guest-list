# The Guest List

## Description
A Full stack web application that helps keep track of a users guest list for an event, such as a wedding. It allows the user to input their guests contact information as well their rsvp status and food selection.
## Table Of Contents
* [Installation](#installation)
* [Technologies Used](#Technologies_Used)
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
Run `CREATE DATABASE the_guest_list_db;`\
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
Sequelize (ORM) 



## Credits
Heather Johnsick, Chotan Sharma, Jacqueline Merlan, Nathanael Farver, Benjamin Eidum
## Contributing

## Questions
