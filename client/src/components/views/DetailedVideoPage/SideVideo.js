import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SideVideo.css";
import { Card, Avatar, Col, Typography, Row } from "antd";
import moment from "moment";

function SideVideo({ writer }) {
  const videoWriterId = writer?._id;
  const [writerVideos, setWriterVideos] = useState([]);

  useEffect(() => {
    axios
      .post("/api/video/sideVideo", { value: videoWriterId })
      .then((response) => {
        if (response.data.success) {
          setWriterVideos(response.data.videos);
          console.log(response.data.videos);
        } else {
          alert("Failed to load sideVideos");
        }
      });
  }, [writer]);

  const renderCards = writerVideos.map((video, index) => {
    // console.log(video);
    var minutes = Math.floor(video.duration / 60);
    var seconds = Math.floor(video.duration - minutes * 60);

    if (seconds < 10) {
      var newSeconds = `0${seconds}`;
    } else {
      newSeconds = seconds;
    }

    return (
      <Col xs={24}>
        <div
          style={{
            maxWidth: "400px",
            alignItems: "center",
            backgroundColor: "rgb(243, 250, 252)",
          }}
        >
          <a href={`/video/${video._id}`}>
            <div
              style={{
                position: "relative",
                backgroundImage: `url(${video.thumbLink})`,
                height: "250px",
                width: "auto",
                maxWidth: "400px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                objectFit: "contain",
              }}
              className="video__container"
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                  background: "black",
                  color: "white",
                  margin: "5px",
                  padding: "5px",
                  opacity: "0.9",
                }}
              >{`${minutes}:${newSeconds}`}</div>
            </div>
          </a>

          <div className="video__info">
            <div style={{ padding: "5px" }}>
              {/* <Avatar src={video.writer.image} /> */}
              <span style={{ fontWeight: "500" }}>{video.title} </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "10px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ marginLeft: "5px" }}>{video.writer.name}</span>
                <span> {moment(video.createdAt).format("MMM Do YY")} </span>
              </div>
              {/* <span style={{ marginLeft: "3rem" }}> {video.views}</span>-{" "} */}
            </div>
          </div>
        </div>
      </Col>
    );
  });

  return (
    // writerVideos.length > 0 && (

    // )
    <div
      style={{ backgroundColor: "rgb(243, 250, 252)" }}
      className="sideVideo"
    >
      {renderCards}
    </div>
  );
}

export default SideVideo;
