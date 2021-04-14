import React, { useEffect, useState } from "react";
import axios from "axios";
import SideVideo from "./SideVideo";
import Subscriber from "./Subscriber";
import Comments from "./Comments";
import LikeDislikes from "./LikeDislikes";

function DetailedVideoPage(props) {
  const videoId = props.match.params.videoId;
  const [detailedVideo, setDetailedVideo] = useState([]);
  const [CommentLists, setCommentLists] = useState([]);

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

    axios.post("/api/comment/getComments", videoVariable).then((response) => {
      if (response.data.success) {
        console.log("response.data.comments", response.data.comments);
        setCommentLists(response.data.comments);
      } else {
        alert("Failed to get video Info");
      }
    });
  }, []);

  const updateComment = (newComment) => {
    setCommentLists(CommentLists.concat(newComment));
  };

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
            src={detailedVideo.fileLink}
            controls
            height="400px"
            width="100%"
          ></video>
          <div
            className="detailedVideoPage__videoInfo"
            style={{
              display: "flex",
              padding: "10px",
              justifyContent: "space-between",
            }}
          >
            <div className="left">
              <p style={{ fontWeight: "500", fontSize: "18px" }}>
                {detailedVideo.title}
              </p>
              <p style={{ fontStyle: "italic", fontSize: "18px" }}>
                {detailedVideo.description}
              </p>
              <p style={{ fontSize: "20px" }}>{detailedVideo.writer?.name}</p>
            </div>
            <div
              className="right"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <LikeDislikes
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                  video
                  videoId={videoId}
                  userId={localStorage.getItem("userId")}
                />
              </div>

              <Subscriber
                userTo={detailedVideo.writer?._id}
                userFrom={localStorage.getItem("userId")}
              />
            </div>
          </div>
          <Comments
            CommentLists={CommentLists}
            postId={detailedVideo._id}
            refreshFunction={updateComment}
          />
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
