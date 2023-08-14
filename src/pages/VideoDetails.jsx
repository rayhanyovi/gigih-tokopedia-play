import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommentForm from "../components/VideoDetails/CommentForm";
import YouTubeEmbed from "../components/VideoDetails/YouTubeEmbed";
import CommentSection from "../components/VideoDetails/CommentSection";
import CardProduct from "../components/VideoDetails/CardProduct";

const VideoDetails = ({ match }) => {
  const [videoData, setVideoData] = useState({});
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const videoId = match.params.id;

  useEffect(() => {
    // Fetch video details
    fetch(`http://localhost:3004/video/${videoId}`)
      .then((response) => response.json())
      .then((data) => {
        setVideoData(data.video);
        setProducts(data.products);
        setComments(data.comments);
      })
      .catch((error) => console.error("Error fetching video details:", error));
  }, [videoId]);

  return (
    <div className="column">
      <Link
        className="text-color-green row align-items-center "
        style={{ margin: "0" }}
        to={"/home"}>
        <h2>
          <span style={{ fontSize: "13px" }} class="material-symbols-outlined">
            arrow_back_ios
          </span>
          Back to Home
        </h2>
      </Link>

      {videoData && videoData.title && (
        <h1 style={{ margin: "0 0 0 0", fontSize: "60px" }}>
          {videoData.title}
        </h1>
      )}
      {videoData && videoData.shop && (
        <p style={{ margin: "0 0 30px 0", padding: "0", fontSize: "30px" }}>
          {" "}
          <span
            class="material-symbols-outlined"
            style={{ marginRight: "4px" }}>
            storefront{" "}
          </span>
          {videoData.shop}
        </p>
      )}

      <div className="row" style={{ gap: "20px" }}>
        <div className="content-container">
          <YouTubeEmbed video={videoData} />

          <br />
          <h2>Produk Relevan</h2>
          <div className="row" style={{ gap: "20px" }}>
            {products.map((product) => (
              <CardProduct key={product._id} product={product} />
            ))}
          </div>
        </div>

        <div>
          <CommentSection comments={comments} />
          <CommentForm videoId={videoData._id} />
        </div>
      </div>
    </div>
  );
};
export default VideoDetails;
