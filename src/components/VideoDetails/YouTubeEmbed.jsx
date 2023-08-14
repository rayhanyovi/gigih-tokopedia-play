import React from "react";

const YouTubeEmbed = ({ video }) => (
  <div className="video-responsive">
    <iframe
      width="1390px"
      height="700px"
      src={`https://www.youtube.com/embed/${video.video_url}`}
      allowFullScreen
      autoplay
      title="Embedded YouTube video"
    />
  </div>
);

export default YouTubeEmbed;
