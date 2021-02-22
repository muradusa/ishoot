import React, { useEffect, useState } from "react";
import { Card, Avatar, Col, Typography, Row } from "antd";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";

const { Title } = Typography;
const { Meta } = Card;

function LandingPage() {
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

  const getDetailedVideoPage = () => {
    history.push("/detailedvideopage");
  };

  const renderCards = Videos.map((video, index) => {
    console.log(video);
    // var minutes = Math.floor(video.duration / 60);
    // var seconds = Math.floor(video.duration - minutes * 60);

    return (
      <Col lg={12} md={12} xs={24}>
        <div style={{ position: "relative" }}></div>
        <br />
        <Meta
          avatar={<Avatar src={video.writer.image} />}
          title={video.title}
        />
        <span>{video.writer.name} </span>
        <div>{video.description} </div>
        <br />
        <div className="video__container" style={{ backgroundColor: "yellow" }}>
          <img
            src={video.thumbLink}
            onClick={getDetailedVideoPage}
            height="400px"
            width="100%"
            alt=""
          />
        </div>
        <span style={{ marginLeft: "3rem" }}> {video.views}</span>-{" "}
        <span> {moment(video.createdAt).format("MMM Do YY")} </span>
        <br />
      </Col>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> Recommended </Title>
      <hr />

      <Row gutter={16}>{renderCards}</Row>
    </div>
  );
}

export default LandingPage;
