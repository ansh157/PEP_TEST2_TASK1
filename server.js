const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Message = require("./message.model");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));


app.post("/create", async (req, res) => {
  try {
    const { content, unlockAt } = req.body;

    if (!content || !unlockAt) {
      return res.status(400).json({ message: "All fields required" });
    }

    const message = await Message.create({
      content,
      unlockAt: new Date(unlockAt)
    });

    res.status(201).json({
      message: "Message created",
      id: message._id
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/all", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});



app.get("/open/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    const now = new Date();

    if (now < message.unlockAt) {
      return res.status(403).json({
        message: "This message is locked",
        unlocksAt: message.unlockAt
      });
    }

    res.json({
      content: message.content
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
