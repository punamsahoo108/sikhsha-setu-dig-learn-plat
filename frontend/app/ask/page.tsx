"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./askpage.module.css";

const AskPage: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:3001/qna", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to post question");
      }

      router.push("/qna");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Ask your doubts</h2>
      {error && <p className={styles.errorText}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.askForm}>
        <textarea
          placeholder="Write your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={5}
          required
        />
        <button type="submit" className={styles.button}>
          Post Question
        </button>
      </form>
    </div>
  );
};

export default AskPage;
