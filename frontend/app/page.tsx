
"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/public/carouselimg1.png";
import img2 from "@/public/carouselimg2.png";
import img3 from "@/public/carouselimg3.png";
import img4 from "@/public/carouselimg4.png";
import Notes from "@/public/Notes.png";
import Doubts from "@/public/Doubts.png";
import Scholarship from "@/public/Scholarships.png";
import learningSource from "@/public/Learning-sources.png";

import styles from "./Home.module.css";

const carouselImages = [img1, img2, img3, img4];

const faqItems = [
  {
    question: "Are all the services free?",
    answer:
      "Yes, all the services are free. But If you want to do live classes from Professional faculties, some classes of theirs are paid. But the fees amount is very low.",
  },
  {
    question: "This website is for which class students?",
    answer: "This website is for VIII, IX, X, XI, XII class students.",
  },
  {
    question: "How to ask academic doubts?",
    answer:
      "You can ask any doubts in our Doubt box section, where interested faculties or students can answer your doubt.",
  },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Auto-slide carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* Carousel */}
      <div className={`${styles.carouselComp} bg-nav`} style={{backgroundColor:"white"}}>
        <div className="position-relative">
          <div className={styles.carouselInner}>
            {carouselImages.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.carouselItem} ${
                  idx === currentSlide ? styles.active : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className={styles.carouselImg}
                />
              </div>
            ))}
          </div>
          <button
            className={styles.carouselPrev}
            onClick={prevSlide}
            aria-label="Previous"
          >
            &#10094;
          </button>
          <button
            className={styles.carouselNext}
            onClick={nextSlide}
            aria-label="Next"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cardCont}>
        {[
          {
            img: Notes,
            title: "Notes",
            text: "Click here to get your notes",
            href: "/notes",
          },
          {
            img: learningSource,
            title: "Learning Sources",
            text: "Click here to attend best lectures",
            href: "/livetutorial",
          },
          {
            img: Scholarship,
            title: "Scholarships",
            text: "Click here to know available scholarships",
            href: "/scholarships",
          },
          {
            img: Doubts,
            title: "Doubts",
            text: "Click here to ask your doubts to seniors and Faculties",
            href: "/qna",
          },
        ].map((card, idx) => (
          <div className={styles.card} key={idx} style={{ width: "18rem" }}>
            <Image src={card.img} alt={card.title} className="card-img-top" style={{ width: "100%", height: "auto", borderRadius: "10px" }}/>
            <div className="card-body" style={{display:"flex", flexDirection:"column", gap:'1rem'}}>
              <h3 className="card-title">{card.title}</h3>
              <div className="card-text">{card.text}</div>
              <div><Link href={card.href} className="btn btn-primary" style={{backgroundColor:"#cccccc", color:"black", padding:"4px", paddingLeft:"4px", paddingRight:"4px", borderRadius:"2px"}}>
                Click
              </Link></div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className={styles.FAQCont}>
        <div className={styles.FAQHead}>
          <h2 style={{marginBottom:"1rem"}}>Frequently Asked Questions</h2>
          <p>Here’s everything you may ask.</p>
        </div>
        <div className={styles.AccordContainer}>
          {faqItems.map((item, idx) => (
            <div className={styles.accordionItem} key={idx}>
              <button
                className={styles.accordionButton}
                onClick={() => toggleFaq(idx)}
              >
                {item.question}
              </button>
              {activeFaq === idx && (
                <div className={styles.accordionBody}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className={styles.backToTop} onClick={scrollToTop}>
          <button>Back to Top</button>
        </div>
        <div className={styles.footer1}>
          @2025 Shiksha Setu. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
