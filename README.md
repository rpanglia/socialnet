# -- SOCIALNET --

## Description

**Socialnet** is an API that has been created for a social network web application. Using this application, users are able to share their thoughts, create a friend list and react to the thoughts as well! This application was created from scratch using the following technologies: Javascript, Express.js, Node.js, MongoDB and Mongoose.


## Table of Contents
- [Walkthrough Video](#walkthrough-video)
- [Breakdown](#breakdown)
- [Screenshots](#screenshots)
- [Questions](#questions)
- [License](#license)


## Walkthrough-Video
To view *Socialnet's* functionality, please see the below video.
https://watch.screencastify.com/v/2kxkb9cRhHYFK5fq1c9m


## Breakdown

Models:
* User - username, email. thoughts, friends (friendCount virtual included to retrieve length of friends array)
* Thought - thoughtText, createdAt, username, reactions (nested documents created with reactionSchema & reactionCount virtual included to retrieve length of reactions array)
* Reaction - Schema only: reactionId, reactionBody, username, createdAt

API Routes:
`/api/users`
- GET all users
- GET a single user by id
- POST a new user
- PUT to update user by id
- DELETE user (and thoughts) by id

`/api/users/:userId/friends/:friendId`
- POST to add a new friend to a user's friend list
- DELETE to remove a friend from a user's friend list

`/api/thoughts`
- GET to get all thoughts
- GET to get a single thought by id
- POST to create a new thought 
- PUT to update a thought by id
- DELETE to remove a thought by id

`/api/thoughts/:thoughtId/reactions`
-POST to create a reaction stored in a single thought's reactions array field
-DELETE to pull and remove a reaction by the reaction's reactionId value


## Screenshots
![testingallusers](/assets/testingallusers.jpg)
![createnewthought](/assets/createnewthought.jpg)
![createfriend](/assets/createfriend.jpg)
![createreaction](/assets/createreaction.jpg)
![deletereaction](/assets/deletereaction.jpg)


## Questions
Should you require any additional information, please connect via:
* My GitHub Profile: https://github.com/rpanglia
* Email: ravneet.panglia@gmail.com


## License
This project is not licensed.
