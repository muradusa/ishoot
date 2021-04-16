import React, { useState } from "react";
import { Comment, Avatar } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import LikeDislikes from "./LikeDislikes";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

function SingleComment(props) {
  const user = useSelector((state) => state.user);
  const [CommentValue, setCommentValue] = useState("");
  const [OpenReply, setOpenReply] = useState(false);

  const handleChange = (e) => {
    setCommentValue(e.currentTarget.value);
  };

  const openReply = () => {
    setOpenReply(!OpenReply);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      writer: user.userData._id,
      postId: props.postId,
      responseTo: props.comment._id,
      content: CommentValue,
    };

    axios.post("/api/comment/saveComment", variables).then((response) => {
      if (response.data.success) {
        setCommentValue("");
        setOpenReply(!OpenReply);
        props.refreshFunction(response.data.result);
      } else {
        alert("Failed to save Comment");
      }
    });
  };

  const actions = [
    <LikeDislikes
      comment
      commentId={props.comment._id}
      userId={localStorage.getItem("userId")}
    />,
    <span
      style={{ fontSize: "16px" }}
      onClick={openReply}
      key="comment-basic-reply-to"
    >
      Reply to{" "}
    </span>,
  ];

  return (
    <div
      style={{
        backgroundColor: "rgb(240, 243, 243)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Comment
        actions={actions}
        author={
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            {props.comment?.writer?.name}
          </p>
        }
        avatar={
          <Avatar
            style={{ fontSize: "16px" }}
            src={props.comment?.writer?.image}
            alt="image"
          />
        }
        content={<p style={{ fontSize: "16px" }}>{props.comment.content}</p>}
      ></Comment>

      {OpenReply && (
        <form style={{ display: "flex" }} onSubmit={onSubmit}>
          <input
            style={{
              marginLeft: "40px",
              marginRight: "15px",
              marginBottom: "15px",
              padding: "5px",
              width: "100%",
              borderRadius: "5px",
              backgroundColor: "rgb(232, 248, 221)",
              border: "none",
              outline: "none",
            }}
            onChange={handleChange}
            value={CommentValue}
            placeholder="write some comments"
          />

          <br />
          <Button
            style={{
              width: "20%",
              height: "52px",
              backgroundColor: "rgb(221, 250, 201)",
            }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
}

export default SingleComment;
