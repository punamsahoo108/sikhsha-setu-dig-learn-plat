"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./questionpage.module.css";

type Answer = {
  _id: string;
  text: string;
  author: { username: string; _id: string } | null;
};

type Question = {
  _id: string;
  question: string;
  author: { username: string; _id: string } | null;
  answers: Answer[];
};

const QuestionPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState("");

  const fetchQuestion = async () => {
    try {
      const res = await fetch(`http://localhost:3001/qna/${id}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setQuestion(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteQuestion = async () => {
    try {
      const res = await fetch(`http://localhost:3001/qna/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error(await res.text());
      alert("Question deleted successfully");
      router.push("/qna");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDeleteAnswer = async (answerId: string) => {
    try {
      const res = await fetch(`http://localhost:3001/qna/${id}/answers/${answerId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error(await res.text());
      setQuestion({
        ...question!,
        answers: question!.answers.filter((a) => a._id !== answerId),
      });
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleAddAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/qna/${id}/answers`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: answerText }),
      });
      if (!res.ok) throw new Error(await res.text());
      const updated = await res.json();
      setQuestion(updated);
      setAnswerText("");
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  if (loading) return <p>Loading question...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!question) return <p>Question not found</p>;

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.questionTitle}>Question</h2>
      <div className={styles.questionCard}>
        <p className={styles.questionText}>{question.question}</p>
        <small className={styles.authorText}>By: {question.author?.username || "Unknown"}</small>
        <br />
        <button className={styles.button} onClick={handleDeleteQuestion}>
          Delete Question
        </button>
      </div>

      <h3 className={styles.questionTitle}>Answers</h3>
      {question.answers.length === 0 && <p>No answers yet.</p>}
      {question.answers.map((ans) => (
        <div key={ans._id} className={styles.answerCard}>
          <p className={styles.answerText}>{ans.text}</p>
          <small className={styles.authorText}>By: {ans.author?.username || "Unknown"}</small>
          <br />
          <button className={styles.button} onClick={() => handleDeleteAnswer(ans._id)}>
            Delete Answer
          </button>
        </div>
      ))}

      <form className={styles.answerForm} onSubmit={handleAddAnswer}>
        <textarea
          placeholder="Write your answer..."
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
          rows={4}
          required
        />
        <button type="submit" className={styles.button} style={{ backgroundColor: "#00aaff"}}>
          Post Answer
        </button>
      </form>
    </div>
  );
};

export default QuestionPage;
