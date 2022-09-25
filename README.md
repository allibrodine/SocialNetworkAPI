# SocialNetworkAPI

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Table of Contents

- [Project Description](#description)
- [Installation](#installation)
- [Technologies Used](#technologies)
- [Usage](#usage)
- [Demo](#demo)
- [Collaboration](#collaboration)
- [License](#license)
- [Questions](#questions)

## Description

This is a back end application that serves as a basis for a social network site. Users can be created, become friends, share their thoughts and react on other users' thoughts. RESTful API's are available to create, display, update or delete users, thoughts, friends and reactions. E-mail addresses are validated throught the use of Validator.js and date and time are formatted via Day.js.

## Technologies

- Node.js
- MondoDB
- Mongoose
- Express.js
- Validator.js
- Day.js
- Insomnia

## Installation

- Node.js and MondoDB server required on your machine
- Clone this repo to your machine and initialize Node.js in the root directory by running `npm init -y` from the command line
- Install all dependencies from the root directory by running `npm install mongoose express validator dayjs` from the command line
- Run `npm start` to get the server up and running

## Usage

You will need Insomnia or some other similar back end technology to use the routes in this application. Routes are as follows:

USERS

- Create User: POST `localhost:3001/api/user`
- Get Users: GET `localhost:3001/api/user`
- Get One User: GET `localhost:3001/api/user/<userId>`
- Update User: PUT `localhost:3001/api/user/<userId>`
- Delete User: DELETE `localhost:3001/api/user/<userId>`

THOUGHTS

- Add Thought to User: POST `localhost:3001/api/thought/<userId>`
- Get Thoughts: GET `localhost:3001/api/thought/`
- Get One thought: GET `localhost:3001/api/thought/<thoughtId>`
- Update Thought: PUT `localhost:3001/api/thought/<userId>/<thoughtId>`
- Delete Thought: DELETE `localhost:3001/api/thought/<userId>/<thoughtId>`

FRIENDS

- Add Friend to User: POST `localhost:3001/api/user/<userId>/friends/<friendId>`
- Delete Friend from User: DELETE `localhost:3001/api/user/<userId>/friends/<friendId>`

REACTIONS

- Add Reaction to Thought: POST `localhost:3001/api/thought/<thoughtId>/reactions`
- Remove Reaction: DELETE `localhost:3001/api/thought/<userId>/<thoughtId>/<reactionId>`

## Demo

See a demonstration of the routes in action <a href="https://watch.screencastify.com/v/dxth5XnB0IOJVmF0x3Wo">here</a>.

## Collaboration

SMU Coding Bootcamp Module 18 Challenge: NoSQL - MongoDB/Mongoose

## License

Licensed under the <a href='https://opensource.org/licenses/ISC'>ISC</a> license.

## Questions

- Github username: <a href='https://github.com/allibrodine'>allibrodine</a>
- E-mail address: allibrodine81@gmail.com </br>
  Please feel free to e-mail me with any questions.
