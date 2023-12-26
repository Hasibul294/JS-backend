require("dotenv").config();

const express = require("express");

const app = express();
const port = process.env.PORT;

const githubData = {
  login: "hiteshchoudhary",
  id: 11613311,
  node_id: "MDQ6VXNlcjExNjEzMzEx",
  avatar_url: "https://avatars.githubusercontent.com/u/11613311?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/hiteshchoudhary",
  html_url: "https://github.com/hiteshchoudhary",
  followers_url: "https://api.github.com/users/hiteshchoudhary/followers",
  following_url:
    "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  gists_url: "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/hiteshchoudhary/subscriptions",
  organizations_url: "https://api.github.com/users/hiteshchoudhary/orgs",
  repos_url: "https://api.github.com/users/hiteshchoudhary/repos",
  events_url: "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/hiteshchoudhary/received_events",
  type: "User",
  site_admin: false,
  name: "Hitesh Choudhary",
  company: null,
  blog: "https://www.youtube.com/c/HiteshChoudharydotcom",
  location: "India",
  email: null,
  hireable: null,
  bio: "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  twitter_username: "hiteshdotcom",
  public_repos: 76,
  public_gists: 2,
  followers: 11655,
  following: 0,
  created_at: "2015-03-23T13:03:25Z",
  updated_at: "2023-11-03T18:29:21Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hasib", (req, res) => {
  res.send("hasibulhasanbd.com");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login at cha khao code koro..</h1>");
});
app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
