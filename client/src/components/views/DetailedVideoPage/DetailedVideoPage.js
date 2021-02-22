import React from "react";

function DetailedVideoPage() {
  return (
    <div className="detailedVideoPage">
      <div className="detailedVideoPage__video">
        <video
          src="https://youtubebucket-uploads.s3.us-west-1.amazonaws.com/SampleVideo_1280x720iaOkuWVNDh.mp4"
          controls
          height="400px"
          width="100%"
        ></video>
      </div>
    </div>
  );
}

export default DetailedVideoPage;
