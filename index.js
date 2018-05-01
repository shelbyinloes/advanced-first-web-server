let express = require("express");
let state = require("./state")
let users = state.users

const app = express();

app.use(express.static('public'))

app.get("/users",function(req,res,next){
 return res.json(users);
});

app.post("/users",function(req,res,next){
 return res.json(users.push({}));
});

app.delete("/users",function(req,res,next)
{
 return res.json(users.pop({}));
});

app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});
