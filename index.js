const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const allNews = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("News Portal server running");
});

app.get("/category", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id == 08) {
    res.send(allNews);
  } else {
    const categoryNews = allNews.filter((news) => news.category_id === id);
    res.send(categoryNews);
  }
});

app.get("/news", (req, res) => {
  res.send(allNews);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const news = allNews.find((n) => n._id === id);

  if (!news) {
    res.send("not found");
  } else {
    res.send(news);
  }
});

app.listen(port, () => {
  console.log(`News portal running on port, ${port}`);
});
