const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Video = require("./models/video");
const Comment = require("./models/comment");
const Product = require("./models/product");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://rayhanyovi:0o9I1Tg4V1C295YO@cluster0.hoyzeor.mongodb.net/midterm",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Koneksi ke MongoDB berhasil"))
  .catch((err) => console.error("Koneksi ke MongoDB gagal", err));

//PORT SERVER
const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", async (req, res) => {
  const videos = await Video.find();

  res.setHeader("Content-Type", "application/json");
  res.json(videos);
});

app.get("/video/:id", async (req, res) => {
  const videoId = req.params.id;
  console.log(req.params);
  const video = await Video.findOne({ video_id: videoId });
  const products = await Product.find({ video_id: videoId });
  const comments = await Comment.find({ video_id: video._id });
  console.log(video);
  console.log(comments);
  console.log(products);
  res.setHeader("Content-Type", "application/json");
  res.json({ video, products, comments });
});

app.post("/submit-comment", async (req, res) => {
  const { username, comment, videoId } = req.body;

  try {
    // Create a new Comment document with the input data
    const newComment = new Comment({
      username: username,
      comment: comment,
      video_id: videoId, // Menggunakan video_id yang sesuai
    });

    // Save the newComment to the "comment_list" collection
    const savedComment = await newComment.save();

    console.log("Comment saved to database:", savedComment);

    res.status(200).json(savedComment);
  } catch (error) {
    console.error("Error saving comment:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the comment." });
  }
});
