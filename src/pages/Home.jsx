import React, { useEffect, useState } from "react";

import CardList from "../components/Home/CardList";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/home")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="row wrap " style={{ gap: "7px" }}>
      {videos.map((video) => (
        <CardList key={video._id} video={video} />
      ))}
    </div>
  );
};
export default Home;
