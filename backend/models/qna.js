const mongoose = require("mongoose");

const qnaSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  question: { type: String, required: true },
  answers: [
    {
      author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      text: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

const qnaModel = mongoose.model("qna", qnaSchema);

module.exports = qnaModel;
