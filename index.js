const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from my personal smarty webb!! with auto restart");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "01734436984" },
  { id: 2, name:'shabnoor', email: "shabnoor@gmail.com", phone: "01734436984" },
  {
    id: 3,
    name: "suchorita",
    email: "suchorita@gmail.com",
    phone: "01734436984",
  },
  {
    id: 4,
    name: "Suchonda",
    email: "suchonda@gmail.com",
    phone: "01734436984",
  },
  {
    id: 5,
    name: "sranbonti",
    email: "sranbonti@gmail.com",
    phone: "01734436984",
  },
  { id: 6, name: "sabila", email: "sabila@gmail.com", phone: "01734436984" },
  { id: 7, name: "sabiha", email: "sabiha@gmail.com", phone: "01734436984" },
];

app.get("/users", (req, res) => {
  if(req.query.name){
      const search = req.query.name.toLowerCase();
      const matched = users.filter(user => user.name.toLowerCase().includes(search))
      res.send(matched)
  }
  else{
    res.send(users);
  }
  
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post('/user',(req,res)=>{
  console.log('request',req.body)
  const user = req.body;
  user.id =users.length + 1;
  users.push(user);
  res.send(user)
})

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
