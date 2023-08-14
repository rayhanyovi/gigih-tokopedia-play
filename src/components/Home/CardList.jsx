import React from "react";
import { Link } from "react-router-dom";
import { Card, Space } from "antd";

const CardList = ({ video }) => {
  const cardHeader = (
    <div className="row" style={{ gap: "5px" }}>
      <p
        className="text-color-white"
        style={{
          backgroundColor: "red",
          padding: "0px 5px",
          borderRadius: "5px",
        }}>
        LIVE
      </p>
      <div
        className="row align-items-center text-color-white "
        style={{
          backgroundColor: "grey",
          padding: "0 5px",
          margin: "16px 0",
          borderRadius: "5px",
        }}>
        <span class="material-symbols-outlined">visibility</span>
        250
      </div>
    </div>
  );

  return (
    <Space direction="vertical" size={16}>
      <Link to={`/video/${video._id}`}>
        {" "}
        {/* Tambahkan Link ke /videoDetails */}
        <Card
          title={cardHeader}
          headStyle={{
            background: "rgba(0,0,0,)",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,212,255,0) 100%)",
            border: "none",
          }}
          className="custom-card"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${video.video_url}/0.jpg)`,
            width: 295,
            height: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}>
          <div
            className="card-content"
            style={{
              zIndex: "1", // Menempatkan tulisan di atas lapisan linear gradient
            }}>
            <h3 className="text-color-white" style={{ margin: 0 }}>
              {video.title}
            </h3>
            <p className="text-color-white" style={{ margin: 0 }}>
              {video.shop}
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,212,255,0) 100%)",
              zIndex: 0,
            }}></div>
        </Card>
      </Link>
    </Space>
  );
};
export default CardList;
