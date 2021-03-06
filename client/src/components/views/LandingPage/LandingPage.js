import React, { useEffect, useState } from "react";
import { Card, Avatar, Col, Typography, Row } from "antd";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const { Title } = Typography;
const { Meta } = Card;

const LandingPage = () => {
  let user = useSelector((state) => state.user);
  console.log(user);
  const [Videos, setVideos] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get("/api/video/getVideos").then((response) => {
      if (response.data.success) {
        console.log(response.data.videos);
        setVideos(response.data.videos);
      } else {
        alert("Failed to get Videos");
      }
    });
  }, []);

  const renderCards = Videos.map((video, index) => {
    // console.log(video);
    var minutes = Math.floor(video.duration / 60);
    var seconds = Math.floor(video.duration - minutes * 60);

    if (seconds < 10) {
      var newSeconds = `0${seconds}`;
    } else {
      newSeconds = seconds;
    }

    return (
      <Col xxl={6} xl={8} lg={12} md={12} xs={24}>
        <div style={{ maxWidth: "600px", alignItems: "center" }}>
          <a href={`/video/${video._id}`}>
            <div
              style={{
                position: "relative",
                height: "300px",
                width: "auto",
                backgroundImage: `url(${video.thumbLink})`,

                maxWidth: "600px",
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
              <Avatar src={video.writer.image} />
              <span style={{ marginLeft: "5px" }}>{video.title} </span>
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
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}>
        {user?.userData?.isAuth
          ? `Recommended Videos for ${user?.userData?.name}`
          : `Popular Videos. Please login to upload a video`}
      </Title>
      <hr />

      <Row gutter={16}>{renderCards}</Row>
    </div>
  );
};

export default LandingPage;
