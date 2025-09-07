const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const qnaModel = require("../models/qna");

router.post("/", auth, async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ msg: "Question cannot be empty" });
    const qna = await qnaModel.create({
      author: req.user.id,
      question
    });
    res.status(201).json(qna);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get("/", async (req, res) => {
  const qna = await qnaModel.find().populate("author", "username");
  res.json(qna);
});

router.post("/:id/answers", auth, async (req, res) => {
  try {
    const qna = await qnaModel.findById(req.params.id);
    if (!qna) return res.status(404).json({ msg: "Question not found" });
    if (!req.body.text) return res.status(400).json({ msg: "Answer cannot be empty" });

    qna.answers.push({
      author: req.user.id,
      text: req.body.text
    });

    await qna.save();
    await qna.populate("answers.author", "username");
    res.json(qna);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const question = await qnaModel.findById(req.params.id);
    if (!question) return res.status(404).json({ msg: "Question not found" });

    if (question.author.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    await qnaModel.findByIdAndDelete(req.params.id);

    res.json({ msg: "Question deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get("/:id", async (req, res) => {
    const question = await qnaModel
      .findById(req.params.id)
      .populate("author", "username")
      .populate("answers.author", "username");
    if (!question) return res.status(404).json({ msg: "Question not found" });
    res.json(question);
  });
  
router.delete("/:id/answers/:answerId", auth, async (req, res) => {
  try {
    const question = await qnaModel.findById(req.params.id);
    if (!question) return res.status(404).json({ msg: "Question not found" });

  const answer = question.answers.id(req.params.answerId);
    if (!answer) return res.status(404).json({ msg: "Answer not found" });

    if (answer.author.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized to delete this answer" });
    }

    answer.deleteOne();
    await question.save();

    res.json({ msg: "Answer deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
    

module.exports = router;
