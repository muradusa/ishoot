import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SideVideo.css";

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

  return (
    // writerVideos.length > 0 && (

    // )
    <div className="sideVideo">
      {writerVideos.map((video) => (
        <a href={`/video/${video._id}`}>
          <img src={video.thumbLink} alt="thumblink" />
        </a>

        //   key={video._id}
      ))}
    </div>
  );
}

export default SideVideo;
