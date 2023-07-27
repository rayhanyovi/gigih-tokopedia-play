const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Video = require("./models/video");
const Comment = require("./models/comment");
const Product = require("./models/product");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://localhost:27017/midterm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Koneksi ke MongoDB berhasil"))
  .catch((err) => console.error("Koneksi ke MongoDB gagal", err));

//PORT SERVER
const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", async (req, res) => {
  const videos = await Video.find();
  res.render("index.ejs", { videos });
});

app.get("/video/:id", async (req, res) => {
  const videoId = req.params.id;
  console.log(req.params);
  const video = await Video.findOne({ video_id: videoId });
  const products = await Product.find({ video_id: videoId });
  const comments = await Comment.find({ video_id: videoId });
  console.log(video);
  console.log(comments);
  console.log(products);

  res.render("hehe.ejs", { video, products, comments });
});
