const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const port = 5000;

app.get("/", (req, res) => {
  res.send("I am learning node");
});

const users = [
  { id: 0, name: "Rafiq", email: "rafiq@gmail.com", phone: "+8801749291863" },
  { id: 1, name: "Rakib", email: "rakib@gmail.com", phone: "+8801745891863" },
  { id: 2, name: "Rifat", email: "rifat@gmail.com", phone: "+8801989291863" },
  { id: 3, name: "Rony", email: "rony@gmail.com", phone: "+8801549291863" },
  { id: 4, name: "Rebeya", email: "rabeya@gmail.com", phone: "+8801849291863" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send("Inside post");
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to : ", port);
});
