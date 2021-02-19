import React, { useEffect, useState } from "react";
import { Card, Avatar, Col, Typography, Row } from "antd";
import axios from "axios";
import moment from "moment";

const { Title } = Typography;
const { Meta } = Card;

function LandingPage() {
  const [Videos, setVideos] = useState([]);

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
        <br />
        <video src={video.fileLink} controls height="400" width="400"></video>
        <span style={{ marginLeft: "3rem" }}> {video.views}</span>-{" "}
        <span> {moment(video.createdAt).format("MMM Do YY")} </span>
      </Col>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> Recommended </Title>
      <hr />
      <img
        src="https://youtubebucket-thumbnails.s3-us-west-1.amazonaws.com/SampleVideo_1280x720_S3_v20-0.jpg"
        alt="alt"
        style={{ height: "300px", width: "300px", objectFit: "contain" }}
      />
      <Row gutter={16}>{renderCards}</Row>
    </div>
  );
}

export default LandingPage;
