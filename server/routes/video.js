const express = require("express");
const router = express.Router();
const multer = require("multer");
// var ffmpeg = require("fluent-ffmpeg");
var AWS = require("aws-sdk");
const path = require("path");
const { getVideoDurationInSeconds } = require("get-video-duration");

const { Video } = require("../models/Video");
const { Subscriber } = require("../models/Subscriber");

var storage = multer.memoryStorage({});

var upload = multer({ storage: storage }).single("file");

router.post("/uploadfiles", upload, (req, res) => {
  // console.log(req.file);

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const getRandomString = (len) => {
    const charset =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i = len; i > 0; --i) {
      result += charset[Math.floor(Math.random() * charset.length)];
    }

    return result;
  };
  const random = getRandomString(10);
  const original = req.file.originalname.split(".mp4")[0];
  const newName = original.concat(random);
  const newNameExt = ".mp4";
  const finalFileName = newName.concat(newNameExt);
  // console.log(finalFileName);

  var params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: finalFileName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: "public-read",
  };

  s3bucket.upload(params, function (err, data) {
    let videoDuration = 0;
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      const presignedPutUrl = s3bucket.getSignedUrl("putObject", {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: params.Key, //filename
        Expires: 5 * 60, //time to expire in seconds - 5 min
      });
      const url = presignedPutUrl.split("?")[0];

      const stringUrl = `${url}`;
      // console.log(stringUrl);

      const thumbnailUrl = s3bucket.getSignedUrl("getObject", {
        Bucket: process.env.AWS_BUCKET_NAME_THUMBNAILS,
        Key: params.Key,
      });
      // console.log(thumbnailUrl);
      const urlThumb = thumbnailUrl.split(".mp4")[0];
      const urlEnding = "-0.jpg";
      const photoUrl = urlThumb.concat(urlEnding);
      // console.log(photoUrl);

      getVideoDurationInSeconds(stringUrl).then((duration) => {
        videoDuration += duration;
        res.send({
          fileUrl: url,
          thumbUrl: photoUrl,
          duration: videoDuration,
        });
      });
    }
  });
});

router.post("/uploadVideo", (req, res) => {
  const video = new Video({
    writer: req.body.writer,
    title: req.body.title,
    description: req.body.description,
    fileLink: req.body.videoURL,
    thumbLink: req.body.thumbURL,
    duration: req.body.duration,
  });
  video.save((err, video) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/getVideo", (req, res) => {
  Video.findOne({ _id: req.body.videoId })
    .populate("writer")
    .exec((err, video) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, video });
    });
});

router.get("/getVideos", (req, res) => {
  Video.find()
    .populate("writer")
    .exec((err, videos) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, videos });
      // console.log(videos);
    });
});

router.post("/sideVideo", (req, res) => {
  Video.find({ writer: req.body.value })
    .populate("writer")
    .exec((err, videos) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, videos });
    });
});

router.post("/getSubscriptionVideos", (req, res) => {
  //Need to find all of the Users that I am subscribing to From Subscriber Collection

  Subscriber.find({ userFrom: req.body.userFrom }).exec((err, subscribers) => {
    if (err) return res.status(400).send(err);

    let subscribedUser = [];

    subscribers.map((subscriber, i) => {
      subscribedUser.push(subscriber.userTo);
    });

    //Need to Fetch all of the Videos that belong to the Users that I found in previous step.
    Video.find({ writer: { $in: subscribedUser } })
      .populate("writer")
      .exec((err, videos) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, videos });
      });
  });
});

module.exports = router;
