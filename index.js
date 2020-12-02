
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */

// Part 1

app.use(bodyParser.json());

// GET /users

//Commented out for later steps to work

// app.get('/users', function (req, res) {
//   res.json(users);
// });

// GET /users/1
// app.get('/users/:id', function (req, res) {
//   const userID = req.params.id;
//   // res.json(users[userID-1]);
//   for (let user of users) {
//     if (user._id === parseInt(userID)) {
//       res.json(user)
//     }
//   }
// });


// POST /users

//Commented out for later steps to work

// app.post('/users', function (req, res) {
//   const newUser = {
//     "id" : users.length+1,
//     "name" : Batman,
//     "occupation" : Detective,
//     "avatar" : https://en.wikipedia.org/wiki/Batman#/media/File:Batman_Infobox.jpg,
//   }

//   users.push(newUser);
//   res.json(users);
// })



//PUT /users/1

//Commented out for later steps to work

// app.put('/users/:id', function (req, res) {
//   const userID = req.params.id;
//   for (let user of users) {
//     if (user._id === parseInt(userID)) {
//       user.name = "Santa Claus";
//       res.json(user)
//     }
//   }
// });


//DELETE 

//Commented out for later steps to work

// app.delete('/users/:id', function (req, res) {
//   users.shift()
//   res.send("DELETED");
// });

// Part 2
app.post('/users', function (req, res) {
  const newUser = {
    "id" : users.length+1,
    "name" : req.body.name,
    "occupation" : req.body.occupation,
    "avatar" : req.body.avatar,
  }

  users.push(newUser);
  res.json(users);
})

//Part 3

// GET /users/1 => GET /users/:userId
app.get('/users/:id', function (req, res) {
  const userID = req.params.id;
  // res.json(users[userID-1]);
  for (let user of users) {
    if (user._id === parseInt(userID)) {
      res.json(user)
    }
  }
});

//PUT /users/1 => PUT /users/:userId

app.put('/users/:id', function (req, res) {
  const userID = req.params.id;
  for (let user of users) {
    if (user._id === parseInt(userID)) {
      user.name = "Santa Claus";
      res.json(user)
    }
  }
});


//DELETE /users/1 => DELETE /users/:userId

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id
  for (let user of users) {
    if (user._id === parseInt(userId)) {
      user.isActive = false;
      res.send(`deleted user # ${userId}`)
    }
  }
})


/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))