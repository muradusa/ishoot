const express = require("express");
const router = express.Router();
const multer = require("multer");
// var ffmpeg = require("fluent-ffmpeg");
var AWS = require("aws-sdk");
const path = require("path");

const { Video } = require("../models/Video");

var storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "/");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}-${path.extname(file.originalname)}`);
  },
});

var upload = multer({ storage: storage }).single("file");

//=================================
//             Video
//=================================

router.post("/uploadfiles", upload, (req, res) => {
  console.log(req.file);

  console.log(process.env.AWS_BUCKET_NAME);

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  var params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: "public-read",
  };

  s3bucket.upload(params, function (err, data) {
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      const presignedPutUrl = s3bucket.getSignedUrl("putObject", {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: params.Key, //filename
        Expires: 5 * 60, //time to expire in seconds - 5 min
      });
      const url = presignedPutUrl.split("?")[0];

      const thumbnailUrl = s3bucket.getSignedUrl("getObject", {
        Bucket: process.env.AWS_BUCKET_NAME_THUMBNAILS,
        Key: params.Key,
      });
      const urlThumb = thumbnailUrl;
      console.log(urlThumb);

      res.send({ fileUrl: url });
    }
  });
});

router.post("/uploadVideo", (req, res) => {
  const video = new Video({
    writer: req.body.writer,
    title: req.body.title,
    description: req.body.description,
    fileLink: req.body.videoURL,
  });
  video.save((err, video) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

// router.post("/getVideo", (req, res) => {
//   Video.findOne({ _id: req.body.videoId })
//     .populate("writer")
//     .exec((err, video) => {
//       if (err) return res.status(400).send(err);
//       res.status(200).json({ success: true, video });
//     });
// });

router.get("/getVideos", (req, res) => {
  Video.find()
    .populate("writer")
    .exec((err, videos) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, videos });
      console.log(videos);
    });
});

module.exports = router;
