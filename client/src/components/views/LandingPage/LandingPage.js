import React, { useEffect, useState } from "react";
import { Card, Avatar, Col, Typography, Row } from "antd";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const { Title } = Typography;
const { Meta } = Card;

function LandingPage() {

  let user = useSelector(state => state.user);
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
      var newSeconds = `0${seconds}`
    } else {
      newSeconds = seconds;
    }

    return (
      <Col lg={12} md={12} xs={24}>
        <div style={{ position: "relative" }}>{`${minutes}:${newSeconds}`}</div>
        <br />
        <Meta
          avatar={<Avatar src={video.writer.image} />}
          title={video.title}
        />
        <span>{video.writer.name} </span>
        <div>{video.description} </div>
        <br />
        <div className="video__container" style={{ backgroundColor: "yellow" }}>
          <a href={`/video/${video._id}`}>
            <img src={video.thumbLink} height="400px" width="100%" alt="" />
          </a>
        </div>
        <span style={{ marginLeft: "3rem" }}> {video.views}</span>-{" "}
        <span> {moment(video.createdAt).format("MMM Do YY")} </span>
        <br />
      </Col>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}>{`Recommended Videos for ${user?.userData?.name}`}</Title>
      <hr />

      <Row gutter={16}>{renderCards}</Row>
    </div>
  );
}

export default LandingPage;
