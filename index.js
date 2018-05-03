let express = require("express");
let state = require("./state")
let users = state.users
const app = express();
let bodyParser = require("body-parser");
let ContactRoutes = require("./routes/ContactRoutes");
app.use(ContactRoutes);
app.use(bodyParser.json());
app.use(express.static('public'))


// app.get("/users",function(req,res,next){
//  return res.json(users);
// });

app.get("/users/:userId", function (request, response, next){
  // let userId = request.params.userId
  // response.json(users.find(function(user){
  //   return user._id == request.params.userId;
  // }))

  response.json(users.find(user=>user._id == request.params.userId))
})

// app.post("/users",function(req,res,next){
//  return res.json(users.push({}));
// });

app.post("/users", function(request,response,next){
  let newUser = request.body;
  users.push(newUser);
  response.json(newUser);
})

// app.delete("/users",function(req,res,next)
// {
//  return res.json(users.pop({}));
// });

app.listen(5888, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 5888");
});
