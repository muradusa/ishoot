import React, { useState, useEffect } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useSelector } from "react-redux";

const { Title } = Typography;
const { TextArea } = Input;

function UploadVideoPage(props) {
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");
  let video;

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (user.userData && !user.userData.isAuth) {
      return alert("Please Log in First");
    }

    const variables = {
      writer: user.userData._id,
      title: title,
      description: Description,
      videoURL: videoLink,
    };
    console.log(`video url is ${video}`);

    axios.post("/api/video/uploadVideo", variables).then((response) => {
      if (response.data.success) {
        alert("video Uploaded Successfully");
        props.history.push("/");
      } else {
        alert("Failed to upload video");
      }
    });
  };

  const onDrop = (files) => {
    let formData = new FormData();
    formData.append("file", files[0]);
    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    axios.post("/api/video/uploadfiles", formData, config).then((res) => {
      const video = res.data.fileUrl;
      setVideoLink(video);
      console.log(videoLink);
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Video</Title>
      </div>

      {/* <Form> */}
      <Form onSubmit={onSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <Icon type="plus" style={{ fontSize: "3rem" }} />
              </div>
            )}
          </Dropzone>
          {/* {Thumbnail !== "" && (
            <div>
              <img src={`http://localhost:5000/${Thumbnail}`} alt="haha" />
            </div>
          )} */}
        </div>
        <br />
        <br />
        <label>Title</label>
        <Input onChange={handleChangeTitle} value={title} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={handleChangeDescription} value={Description} />
        <br />
        <br />
        <Button type="primary" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UploadVideoPage;
