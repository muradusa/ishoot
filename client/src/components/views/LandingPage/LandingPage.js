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
      <Col xxl={6} lg={8} md={12} xs={24}>
        
     
        
 
        <div className="video__container" style={{ backgroundColor: "yellow", position: "relative", }}>
          <a href={`/video/${video._id}`}>
            <img src={video.thumbLink} height="400px" width="100%" alt="" />
          </a>
          <div style={{ position: "absolute", bottom: "0px", right: "0px", background: "black", color: "white", margin: "5px", padding: "5px", opacity: "0.9"}}>{`${minutes}:${newSeconds}`}</div>
        </div>
        <div className="video__info">
          <div>
          <Avatar src={video.writer.image} />
          <span>{video.title} </span>
          </div>
          <div>
            {video.description} 
            <span> {moment(video.createdAt).format("MMM Do YY")} </span>
            <span style={{ marginLeft: "3rem" }}> {video.views}</span>-{" "}
            </div>
        </div>

       
        
       
        
        
      </Col>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}>{user?.userData?.name === undefined ? `Please wait while we load your videos ....` : `Recommended Videos for ${user?.userData?.name}` }</Title>
      <hr />

      <Row gutter={16}>{renderCards}</Row>
    </div>
  );
}

export default LandingPage;
