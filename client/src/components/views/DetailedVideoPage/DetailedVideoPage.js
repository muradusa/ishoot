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
    <div className="detailedVideoPage">
      <div className="detailedVideoPage__video">
        <video
          src={detailedVideo.fileLink}
          controls
          height="400px"
          width="100%"
        ></video>
        <div className="detailedVideoPage__videoInfo">
          <p>{detailedVideo.title}</p>
          <p>{detailedVideo.description}</p>
          <p>{detailedVideo.writer?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailedVideoPage;
