import React, { useEffect, useState } from "react";
import axios from "axios";
import SideVideo from "./SideVideo";
import Subscriber from "./Subscriber";
import Hls from "hls.js";

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
        // console.log(response);
      } else {
        alert("Failed to get video info");
      }
    });
  }, []);

  var video = document.getElementById("video");
  var videoSrc =
    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";
  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = videoSrc;
    //
    // If no native HLS support, check if hls.js is supported
    //
  } else if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }

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
            id="video"
            // src={detailedVideo.fileLink}
            src={videoSrc}
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
              <Subscriber
                userTo={detailedVideo.writer?._id}
                userFrom={localStorage.getItem("userId")}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="detailedVideoPage__side"
        style={{ display: "flex", flex: "0.2", flexDirection: "column" }}
      >
        <SideVideo writer={detailedVideo.writer} />
      </div>
    </div>
  );
}

export default DetailedVideoPage;
