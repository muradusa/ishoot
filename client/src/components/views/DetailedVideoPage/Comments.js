import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";
import Button from "@material-ui/core/Button";

function Comments(props) {
  const user = useSelector((state) => state.user);
  const [Comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      content: Comment,
      writer: user.userData._id,
      postId: props.postId,
    };

    axios.post("/api/comment/saveComment", variables).then((response) => {
      if (response.data.success) {
        setComment("");
        props.refreshFunction(response.data.result);
      } else {
        alert("Failed to save Comment");
      }
    });
  };

  return (
    <div style={{ padding: "10px", borderRadius: "10px" }}>
      <p style={{ paddingLeft: "10px", fontSize: "18px", fontWeight: "500" }}>
        {" "}
        Replies
      </p>
      <hr />
      {/* Comment Lists  */}
      {console.log(props.CommentLists)}

      {props.CommentLists &&
        props.CommentLists.map(
          (comment, index) =>
            !comment.responseTo && (
              <React.Fragment>
                <SingleComment
                  comment={comment}
                  postId={props.postId}
                  refreshFunction={props.refreshFunction}
                />
                <ReplyComment
                  CommentLists={props.CommentLists}
                  postId={props.postId}
                  parentCommentId={comment._id}
                  refreshFunction={props.refreshFunction}
                />
              </React.Fragment>
            )
        )}

      {/* Root Comment Form */}
      <form
        style={{
          display: "flex",
          paddingLeft: "10px",
          fontSize: "16px",
          marginTop: "10px",
        }}
        onSubmit={onSubmit}
      >
        <input
          style={{
            padding: "5px 0px 0px 20px ",
            width: "100%",
            borderRadius: "5px",
            backgroundColor: "rgb(228, 246, 250",
            border: "none",
            outline: "none",
          }}
          onChange={handleChange}
          value={Comment}
          placeholder="write some comments"
        />
        <br />
        <Button
          style={{
            width: "20%",
            height: "52px",
            backgroundColor: "rgb(202, 231, 238)",
          }}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Comments;
