//Address of this server connected to the network is : https://localhost:6363 (url is IP address and port the application)
const express = require("express");
const app = express()
const PORT = 6363;

let data = ["veroni"]
app.use(express.json())
//Web endpoint (when the user enter the url in the browser )
// Configure or interpert the verb GET
app.get("/", (req, res) => {
  console.log("Hit the endpoint!!!..", req.method);
  console.log("Home page")
  res.send(`
    <body>
    <p>${JSON.stringify(data)}</p>
    <a href="/dashboard">dashboard</a>
    <script>console.log("test worked")</script>
    </body>
    `);
});
app.get("/dashboard", (req, res) => {
  console.log("Hit the /dashboard endpoint ", req.method);
  res.send(`
    <body>
    <p>Dashboard</p>
    <a href="/">home</a>
    </body>
    `);
});

//CRUD  Create-post  Read-get update-put delete-delete

app.post("/api/data", (req, res) => {
  //when someone create new user (for example when they click the signup button)
  //the user click the sign up button after entering their the credentials, and
  // their browser is wired up  to send out a network request to the server to handle that action
  const newEntry = req.body;
  console.log("New user:", newEntry);
  data.push(newEntry.name)
  res.sendStatus(201); // Respond with 201 status
});

app.delete("/api/data",(req,res)=>{
  data.pop()
  res.sendStatus(203)
  console.log("Action Delete")
})

//API endpoints (eg. when the user enter the submit button)
app.get('/api/data',(req,res)=>{
  console.log("For Data");
  res.send(data);
})

app.listen(PORT, () => console.log(`Server has started on : ${PORT}`));
