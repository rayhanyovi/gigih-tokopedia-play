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

app.post("/submit-comment", async (req, res) => {
  const { username, comment, videoId } = req.body;

  try {
    // Create a new Comment document with the input data
    const newComment = new Comment({
      username: username,
      comment: comment,
      video: videoId, // Set the video field to the ObjectId of the associated video
    });

    // Save the newComment to the "comment_list" collection
    const savedComment = await newComment.save();

    console.log("Comment saved to database:", savedComment);

    // Send a response containing a script that shows the alert
    const alertScript = `
      <script>
        alert("Comment submitted successfully!");
        window.location.href = "/"; // Redirect to the home page after the alert
      </script>
    `;

    res.send(alertScript);
  } catch (error) {
    console.error("Error saving comment:", error);

    // Send a response containing a script that shows the alert for the error
    const alertScript = `
      <script>
        alert("An error occurred while saving the comment. Please try again later.");
        window.location.href = "/"; // Redirect to the home page after the alert
      </script>
    `;

    res.send(alertScript);
  }
});
