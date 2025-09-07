"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./Videos.css";

import faculty1 from "@/public/faculty1.jpg"; // Physics
import faculty7 from "@/public/faculty7.jpg"; // Chemistry
import faculty6 from "@/public/faculty6.jpg"; // English
import faculty2 from "@/public/faculty2.jpg"; // Math
import faculty3 from "@/public/faculty3.jpg"; // Botany
import faculty9 from "@/public/faculty9.jpg"; // Zoology
import faculty10 from "@/public/faculty10.jpg";
import faculty11 from "@/public/faculty11.jpg";
import faculty12 from "@/public/faculty12.webp";
import faculty4 from "@/public/faculty4.jpg";
import faculty5 from "@/public/faculty5.jpg";
import faculty8 from "@/public/faculty8.jpg";
import QRCode from "@/public/QRCode.jpg";

type Schedule = {
  day: string;
  time: string;
  topic: string;
};

type Faculty = {
  name: string;
  subject: string;
  image: StaticImageData;
  experience: string;
  position: string;
  scheduleXI: Schedule[];
  scheduleXII: Schedule[];
  meetXI: string;
  meetXII: string;
};

type SelectedFaculty = (Faculty & { isPaid?: boolean }) | null;

const facultyData: Faculty[] = [
  {
    name: "Mrs. Jayashree Mishra",
    subject: "Physics",
    image: faculty1,
    experience: "5 years of teaching experience",
    position: "Physics faculty at RamaDevi University",
    scheduleXI: [
      { day: "Monday", time: "5:00 PM - 6:00 PM", topic: "Mechanics" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", topic: "Optics" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", topic: "Waves" },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "6:30 PM - 7:30 PM", topic: "Electrostatics" },
      { day: "Thursday", time: "6:30 PM - 7:30 PM", topic: "Magnetism" },
      { day: "Saturday", time: "6:30 PM - 7:30 PM", topic: "Modern Physics" },
    ],
    meetXI: "https://meet.google.com/physics-xi",
    meetXII: "https://meet.google.com/physics-xii",
  },
  {
    name: "Mr. Prakash Das",
    subject: "Chemistry",
    image: faculty7,
    experience: "4 years of teaching experience",
    position: "Chemistry faculty at College of Basic Science and Humanities",
    scheduleXI: [
      { day: "Monday", time: "4:00 PM - 5:00 PM", topic: "Atomic Structure" },
      {
        day: "Wednesday",
        time: "4:00 PM - 5:00 PM",
        topic: "Chemical Bonding",
      },
      { day: "Friday", time: "4:00 PM - 5:00 PM", topic: "Periodic Table" },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "7:30 PM - 8:30 PM", topic: "Organic Chemistry" },
      { day: "Thursday", time: "7:30 PM - 8:30 PM", topic: "Electrochemistry" },
      {
        day: "Saturday",
        time: "7:30 PM - 8:30 PM",
        topic: "Coordination Compounds",
      },
    ],
    meetXI: "https://meet.google.com/chemistry-xi",
    meetXII: "https://meet.google.com/chemistry-xii",
  },
  {
    name: "Miss Sushree Pattnaik",
    subject: "English",
    image: faculty6,
    experience: "5 years of teaching experience",
    position: "English faculty at BJB HSS",
    scheduleXI: [
      { day: "Monday", time: "3:00 PM - 4:00 PM", topic: "Grammar" },
      { day: "Wednesday", time: "3:00 PM - 4:00 PM", topic: "Poetry" },
      { day: "Friday", time: "3:00 PM - 4:00 PM", topic: "Prose" },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "5:30 PM - 6:30 PM", topic: "Drama" },
      { day: "Thursday", time: "5:30 PM - 6:30 PM", topic: "Essay Writing" },
      {
        day: "Saturday",
        time: "5:30 PM - 6:30 PM",
        topic: "Literature Review",
      },
    ],
    meetXI: "https://meet.google.com/english-xi",
    meetXII: "https://meet.google.com/english-xii",
  },
  {
    name: "Mr. Manoj Kumar Nayak",
    subject: "Mathematics",
    image: faculty2,
    experience: "6 years of teaching experience",
    position: "Mathematics faculty at JKBK College",
    scheduleXI: [
      { day: "Monday", time: "2:00 PM - 3:00 PM", topic: "Algebra" },
      { day: "Wednesday", time: "2:00 PM - 3:00 PM", topic: "Trigonometry" },
      { day: "Friday", time: "2:00 PM - 3:00 PM", topic: "Geometry" },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "4:30 PM - 5:30 PM", topic: "Calculus" },
      { day: "Thursday", time: "4:30 PM - 5:30 PM", topic: "Probability" },
      { day: "Saturday", time: "4:30 PM - 5:30 PM", topic: "Vectors & 3D" },
    ],
    meetXI: "https://meet.google.com/math-xi",
    meetXII: "https://meet.google.com/math-xii",
  },
  {
    name: "Mrs. Anusaya Patra",
    subject: "Botany",
    image: faculty3,
    experience: "8 years of teaching experience",
    position: "Botany faculty at Berhampur University",
    scheduleXI: [
      { day: "Monday", time: "1:00 PM - 2:00 PM", topic: "Plant Physiology" },
      { day: "Wednesday", time: "1:00 PM - 2:00 PM", topic: "Cell Biology" },
      { day: "Friday", time: "1:00 PM - 2:00 PM", topic: "Genetics" },
    ],
    scheduleXII: [
      {
        day: "Tuesday",
        time: "3:30 PM - 4:30 PM",
        topic: "Plant Reproduction",
      },
      { day: "Thursday", time: "3:30 PM - 4:30 PM", topic: "Plant Ecology" },
      { day: "Saturday", time: "3:30 PM - 4:30 PM", topic: "Biotechnology" },
    ],
    meetXI: "https://meet.google.com/botany-xi",
    meetXII: "https://meet.google.com/botany-xii",
  },
  {
    name: "Mr. Dillip Kumar Panda",
    subject: "Zoology",
    image: faculty9,
    experience: "6 years of teaching experience",
    position: "Zoology faculty at FM College",
    scheduleXI: [
      { day: "Monday", time: "12:00 PM - 1:00 PM", topic: "Human Physiology" },
      { day: "Wednesday", time: "12:00 PM - 1:00 PM", topic: "Animal Kingdom" },
      {
        day: "Friday",
        time: "12:00 PM - 1:00 PM",
        topic: "Reproductive Biology",
      },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "2:30 PM - 3:30 PM", topic: "Evolution" },
      {
        day: "Thursday",
        time: "2:30 PM - 3:30 PM",
        topic: "Genetics & Heredity",
      },
      {
        day: "Saturday",
        time: "2:30 PM - 3:30 PM",
        topic: "Human Health & Disease",
      },
    ],
    meetXI: "https://meet.google.com/zoology-xi",
    meetXII: "https://meet.google.com/zoology-xii",
  },
];

const paidfacultydata: Faculty[] = [
  {
    name: "Dr. Ramesh Choudhury",
    subject: "Physics",
    image: faculty4,
    experience: "10 years of teaching experience",
    position: "Physics HOD at Ravenshaw University",
    scheduleXI: [
      { day: "Monday", time: "10:00 AM - 11:00 AM", topic: "Scalar & Vector" },
      { day: "Wednesday", time: "10:00 AM - 11:00 AM", topic: "KInematics" },
      { day: "Friday", time: "10:00 AM - 11:00 AM", topic: "Simple Harmonic Motion" },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "11:30 AM - 12:30 PM", topic: "Mechanics" },
      { day: "Thursday", time: "11:30 AM - 12:30 PM", topic: "Optics" },
      { day: "Saturday", time: "11:30 AM - 12:30 PM", topic: "AC" },
    ],
    meetXI: "https://meet.google.com/Physics-xi",
    meetXII: "https://meet.google.com/Physics-xii",
  },
  {
    name: "Mr Krunal Ray",
    subject: "Chemistry",
    image: faculty5,
    experience: "16 years of teaching experience",
    position: "Faculty at BJB Higher Secondary School",
    scheduleXI: [
      { day: "Monday", time: "9:00 AM - 10:00 AM", topic: "Gaseous state" },
      { day: "Wednesday", time: "9:00 AM - 10:00 AM", topic: "d-block elements" },
      { day: "Friday", time: "9:00 AM - 10:00 AM", topic: "f-block elements" },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "12:30 PM - 1:30 PM", topic: "Solutions" },
      { day: "Thursday", time: "12:30 PM - 1:30 PM", topic: "Chemical Kinetics" },
      { day: "Saturday", time: "12:30 PM - 1:30 PM", topic: "Amines" },
    ],
    meetXI: "https://meet.google.com/Chemistry-xi",
    meetXII: "https://meet.google.com/Chemistry-xii",
  },
  {
    name: "Mr. Ajit Kumar Behera",
    subject: "English",
    image: faculty8,
    experience: "25 years of teaching experience",
    position: "English faculty at DPS Khordha",
    scheduleXI: [
      { day: "Monday", time: "8:00 AM - 9:00 AM", topic: "Grammar" },
      { day: "Wednesday", time: "8:00 AM - 9:00 AM", topic: "Poetry" },
      { day: "Friday", time: "8:00 AM - 9:00 AM", topic: "Prose" },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "2:00 PM - 3:00 PM", topic: "Story" },
      { day: "Thursday", time: "2:00 PM - 3:00 PM", topic: "Grammar" },
      { day: "Saturday", time: "2:00 PM - 3:00 PM", topic: "Drama" },
    ],
    meetXI: "https://meet.google.com/English-xi",
    meetXII: "https://meet.google.com/English-xii",
  },
  {
    name: "Miss Ananwit Rout",
    subject: "Mathematics",
    image: faculty10,
    experience: "16 years of teaching experience",
    position: "Senior faculty at FM University",
    scheduleXI: [
      { day: "Monday", time: "11:00 AM - 12:00 PM", topic: "Algebra" },
      { day: "Wednesday", time: "11:00 AM - 12:00 PM", topic: "Geometry" },
      { day: "Friday", time: "11:00 AM - 12:00 PM", topic: "Probability" },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "4:00 PM - 5:00 PM", topic: "Statistics" },
      { day: "Thursday", time: "4:00 PM - 5:00 PM", topic: "Algebra" },
      { day: "Saturday", time: "4:00 PM - 5:00 PM", topic: "Geometry" },
    ],
    meetXI: "https://meet.google.com/Mathematics-xi",
    meetXII: "https://meet.google.com/Mathematics-xii",
  },
  {
    name: "Dr. Ipsit Mohanty",
    subject: "Botany",
    image: faculty11,
    experience: "30 years of teaching experience",
    position: "Botany HOD at Utkal University",
    scheduleXI: [
      { day: "Monday", time: "7:00 AM - 8:00 AM", topic: "- Plant Physiology" },
      { day: "Wednesday", time: "7:00 AM - 8:00 AM", topic: "Cell Biology" },
      { day: "Friday", time: "7:00 AM - 8:00 AM", topic: "Genetics" },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "5:00 PM - 6:00 PM", topic: "Plant Reproduction " },
      { day: "Thursday", time: "5:00 PM - 6:00 PM", topic: "Biotechnology " },
      { day: "Saturday", time: "5:00 PM - 6:00 PM", topic: " Plant Ecology " },
    ],
    meetXI: "https://meet.google.com/Botany-xi",
    meetXII: "https://meet.google.com/Botany-xii",
  },
  {
    name: "Mr. Satya Prakash Jena",
    subject: "Zoology",
    image: faculty12,
    experience: "15 years of teaching experience",
    position: "Zoology faculty at SCS, Puri",
    scheduleXI: [
      { day: "Monday", time: "6:00 PM - 7:00 PM", topic: "Human Physiology" },
      { day: "Wednesday", time: "6:00 PM - 7:00 PM", topic: "Animal Kingdom " },
      { day: "Friday", time: "6:00 PM - 7:00 PM", topic: "Reproductive Biology " },
    ],
    scheduleXII: [
      { day: "Tuesday", time: "7:00 AM - 8:00 AM", topic: "Evolution " },
      { day: "Thursday", time: "7:00 AM - 8:00 AM", topic: "Genetics & Heredity" },
      { day: "Saturday", time: "7:00 AM - 8:00 AM", topic: "Human Health & Diseaseo" },
    ],
    meetXI: "https://meet.google.com/zoology-xi",
    meetXII: "https://meet.google.com/zology-xii",
  },
];

const Videos: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<SelectedFaculty>(null);

  const openModal = (faculty: Faculty, isPaid = false) => {
    setSelectedFaculty({ ...faculty, isPaid });
  };
  const closeModal = () => setSelectedFaculty(null);

  return (
    <>
      <section>
        <div className="LiveClassHeader">
          <h1>Live classes by professional faculties</h1>
          <p>Meet our faculties team</p>
        </div>

        <div className="XI-XIIFree">
          <div className="XI-XIIFreeHead">
            <h4>Free Live classes Team</h4>
          </div>

          <div className="XI-XIIFreeTeam">
            {facultyData.map((faculty, index) => (
              <div className="card LiveTutiorCard" key={index} style={{ position: "relative" }}>
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  width={320}
                  height={180}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{faculty.name}</h5>
                  <p className="card-text">
                    <strong>Subject:</strong> {faculty.subject} <br />
                    <strong>Experience:</strong> {faculty.experience} <br />
                    <strong>Position:</strong> {faculty.position}
                  </p>
                  <button
                    className="btn btn-primary CardfacBtn"
                    onClick={() => openModal(faculty, false)}
                  >
                    Take Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedFaculty && (
          <>
            <div
              className="modal fade show custom-modal"
              style={{ display: "block" }}
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      Class Schedule – {selectedFaculty.name} (
                      {selectedFaculty.subject})
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    {selectedFaculty.isPaid && (
                      <div className="text-center mb-4">
                        <h6>
                          Scan & pay one time 1000 rupees to Join Paid Class
                        </h6>
                        <Image
                          src={QRCode}
                          alt="QR Code for Paid Class"
                          width={150}
                          height={150}
                          className="img-fluid"
                        />
                      </div>
                    )}
                    <p>
                      <strong>Experience:</strong> {selectedFaculty.experience}
                    </p>
                    <p>
                      <strong>Current Position:</strong>{" "}
                      {selectedFaculty.position}
                    </p>

                    <h6>Class XI Schedule</h6>
                    <ul>
                      {selectedFaculty.scheduleXI.map((cls, idx) => (
                        <li key={idx}>
                          {cls.day} - {cls.topic} ({cls.time})
                        </li>
                      ))}
                    </ul>
                    <p>
                      Meet Link:{" "}
                      {selectedFaculty.isPaid ? (
                        <span
                          className="disabled-link"
                          title="Complete payment to access link"
                        >
                          {selectedFaculty.meetXI}
                        </span>
                      ) : (
                        <a
                          href={selectedFaculty.meetXI}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {selectedFaculty.meetXI}
                        </a>
                      )}
                    </p>

                    <h6>Class XII Schedule</h6>
                    <ul>
                      {selectedFaculty.scheduleXII.map((cls, idx) => (
                        <li key={idx}>
                          {cls.day} - {cls.topic} ({cls.time})
                        </li>
                      ))}
                    </ul>
                    <p>
                      Meet Link:{" "}
                      {selectedFaculty.isPaid ? (
                        <span
                          className="disabled-link"
                          title="Complete payment to access link"
                        >
                          {selectedFaculty.meetXII}
                        </span>
                      ) : (
                        <a
                          href={selectedFaculty.meetXII}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {selectedFaculty.meetXII}
                        </a>
                      )}
                    </p>
                  </div>

                  <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-backdrop fade show"></div>
          </>
        )}
        <div className="XI-XIIFree">
          <div className="XI-XIIPaidHead">
            <h4>Paid Live classes Team</h4>
          </div>

          <div className="XI-XIIFreeTeam">
            {paidfacultydata.map((faculty, index) => (
              <div className="card LiveTutiorCard" key={index} style={{ position: "relative" }}>
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  width={320}
                  height={180}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{faculty.name}</h5>
                  <p className="card-text">
                    <strong>Subject:</strong> {faculty.subject} <br />
                    <strong>Experience:</strong> {faculty.experience} <br />
                    <strong>Position:</strong> {faculty.position}
                  </p>
                  <button
                    className="btn btn-primary CardfacBtn"
                    onClick={() => openModal(faculty, true)}
                  >
                    Take Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer>
        <div className="footer1">@2025 Shiksha Setu. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Videos;
