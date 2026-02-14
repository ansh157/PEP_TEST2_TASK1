const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  unlockAt: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Message", messageSchema);
