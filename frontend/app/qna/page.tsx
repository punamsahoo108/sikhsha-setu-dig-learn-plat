"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./QnA.module.css";

type Question = {
  _id: string;
  question: string;
  author: { username: string; _id: string } | null;
};

const QnAPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuestions = async () => {
    try {
      const res = await fetch("http://localhost:3001/qna", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setQuestions(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3001/qna/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error(await res.text());
      setQuestions(questions.filter((q) => q._id !== id));
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) return <p className={styles.loading}>Loading questions...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Questions</h2>
      <Link href="/ask">
        <button className={styles.askButton}>Ask a Question</button>
      </Link>
      {questions.map((q) => (
        <div key={q._id} className={styles.questionCard}>
          <p className={styles.questionText}>{q.question || "No question text"}</p>
          <small className={styles.author}>By: {q.author?.username || "Unknown"}</small>
          <div className={styles.cardButtons}>
            <Link href={`/qna/${q._id}`}>
              <button className={`${styles.viewBtn}`}>View & Answer</button>
            </Link>
            <button
              className={`${styles.deleteBtn}`}
              onClick={() => handleDelete(q._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QnAPage;
