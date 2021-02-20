const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    // privacy: {
    //   type: Number,
    // },

    // catogory: String,
    // views: {
    //   type: Number,
    //   default: 0,
    // },
    fileLink: {
      type: String,
      maxlength: 500,
    },

    // duration :{
    //     type: String
    // },
    thumbLink: {
      type: String,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = { Video };
