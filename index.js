const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));

app.set("view engine ", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "vineet",
    content: "I love coding ",
  },
  {
    username: "apnacollege",
    content: "I love teching ",
  },
  {
    username: "harshal",
    content: "I love coding ",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`listning to the port : ${port}`);
});
