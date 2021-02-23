import React, { useEffect, useState } from "react";
import axios from "axios";

function DetailedVideoPage(props) {
  const videoId = props.match.params.videoId;
  const [detailedVideo, setDetailedVideo] = useState([]);

  const videoVariable = {
    videoId: videoId,
  };

  useEffect(() => {
    console.log(videoId);
    axios.post("/api/video/getVideo", videoVariable).then((response) => {
      if (response.data.success) {
        setDetailedVideo(response.data.video);
        console.log(response);
      } else {
        alert("Failed to get video info");
      }
    });
  }, []);

  return (
    <div className="detailedVideoPage" style={{ display: "flex" }}>
      <div
        className="detailedVideoPage__video"
        style={{ display: "flex", flex: "0.8" }}
      >
        <div
          className="video"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <video
            src={detailedVideo.fileLink}
            controls
            height="400px"
            width="100%"
          ></video>
          <div
            className="detailedVideoPage__videoInfo"
            style={{
              display: "flex",
              padding: "20px",
              justifyContent: "space-between",
            }}
          >
            <div className="left">
              <p>{detailedVideo.title}</p>
              <p>{detailedVideo.description}</p>
              <p>{detailedVideo.writer?.email}</p>
            </div>
            <div className="right">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="detailedVideoPage__side"
        style={{ display: "flex", flex: "0.2", flexDirection: "column" }}
      >
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
    </div>
  );
}

export default DetailedVideoPage;
