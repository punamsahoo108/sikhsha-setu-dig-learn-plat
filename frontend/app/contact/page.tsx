"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  // State for the contact form
  const [contactStatus, setContactStatus] = useState("");
  const [contactSending, setContactSending] = useState(false);

  // State for the idea form
  const [ideaStatus, setIdeaStatus] = useState("");
  const [ideaSending, setIdeaSending] = useState(false);

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSending(true);
    setContactStatus("");

    const form = event.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setContactStatus("Message sent successfully! We will get back to you soon.");
        form.reset();
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setContactStatus(`An error occurred: ${error.message}`);
      } else {
        setContactStatus("An unexpected error occurred.");
      }
    } finally {
      setContactSending(false);
    }
  };

  const handleIdeaSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIdeaSending(true);
    setIdeaStatus("");

    const form = event.currentTarget;
    const formData = {
      ideaEmail: (form.elements.namedItem("ideaEmail") as HTMLInputElement).value,
      ideaMessage: (form.elements.namedItem("ideaMessage") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("http://localhost:3001/api/contact/submit-idea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIdeaStatus("Thank you! Your idea has been submitted.");
        form.reset();
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setIdeaStatus(`An error occurred: ${error.message}`);
      } else {
        setIdeaStatus("An unexpected error occurred.");
      }
    } finally {
      setIdeaSending(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* IDEA SUBMISSION */}
      <section className={styles.ideaSection}>
        <div className={styles.container}>
          <div className={styles.ideaSubmission}>
            <h3>Have an Idea to Improve Learning? 💡</h3>
            <p>
              We believe great ideas can come from anyone. Share your thoughts on new features or improvements below!
            </p>

            <form id="ideaForm" onSubmit={handleIdeaSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="ideaEmail">Your Email (Optional)</label>
                <input type="email" id="ideaEmail" name="ideaEmail" placeholder="So we can thank you!" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="ideaMessage">Your Brilliant Idea</label>
                <textarea
                  id="ideaMessage"
                  name="ideaMessage"
                  rows={4}
                  required
                  placeholder="Describe your idea..."
                ></textarea>
              </div>
              <button type="submit" id="idea-submit-btn" className={styles.button} disabled={ideaSending}>
                {ideaSending ? "Submitting..." : "Submit Idea"}
              </button>
              <p className={styles.statusMessage}>
                {ideaStatus}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Get In Touch With Us 🤝</h2>
            <p>Have a question or a technical issue? We are here to help. Reach out to us through any of the methods below.</p>
          </div>

          <div className={styles.contactWrapper}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <p>Fill up the form and our team will get back to you within 24 hours.</p>
              <div className={styles.infoItem} style={{marginTop:'2rem'}}>
                <i className="fas fa-phone"></i>
                <span>+91 687687XXXX (Technical Support)</span>
              </div>
              <div className={styles.infoItem}>
                <i className="fas fa-envelope"></i>
                <span>shikshasetuportal@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Bhubaneswar, Odisha, India</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <form id="contactForm" onSubmit={handleContactSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" id="submit-btn" className={styles.button} disabled={contactSending}>
                  {contactSending ? "Sending..." : "Send Message"}
                </button>
                <p className={styles.statusMessage}>
                  {contactStatus}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
