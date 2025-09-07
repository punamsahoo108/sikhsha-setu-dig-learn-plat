"use client";
import React, { useState, useMemo } from "react";
import "./gyankosh.css";

// --- SVG Icon Components ---
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);
const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="download-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

// --- Full educational data ---
const educationalData = [
  // --- CBSE ---
  {
    board: "CBSE",
    classes: [
      {
        class: "Class 10",
        subjects: [
          {
            subject: "Maths",
            chapters: [
              {
                title: "Chapter 1: Linear Algebra",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=linear+algebra+class+10+maths",
                },
              },
              {
                title: "Chapter 2: Arithmetic",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=arithmetic+class+10+maths",
                },
              },
              {
                title: "Chapter 3: Geometry",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=geometry+class+10+maths",
                },
              },
            ],
          },
          {
            subject: "Science",
            chapters: [
              {
                title: "Chapter 1: Chemical Reactions and Equations",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=chemical+reactions+and+equations+class+10+science",
                },
              },
              {
                title: "Chapter 2: Acids, Bases, and Salts",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=acids+bases+and+salts+class+10+science",
                },
              },
              {
                title: "Chapter 3: Life Processes",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=life+processes+class+10+science",
                },
              },
            ],
          },
          {
            subject: "Social Science",
            chapters: [
              {
                title: "Chapter 1: The Rise of Nationalism in Europe",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=the+rise+of+nationalism+in+europe+class+10+sst",
                },
              },
              {
                title: "Chapter 2: Nationalism in India",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=nationalism+in+india+class+10+sst",
                },
              },
              {
                title: "Chapter 3: The Making of a Global World",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=the+making+of+a+global+world+class+10+sst",
                },
              },
            ],
          },
        ],
      },
      {
        class: "Class 12",
        subjects: [
          {
            subject: "Physics",
            chapters: [
              {
                title: "Chapter 1: Electric Charges and Fields",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=electric+charges+and+fields+class+12+physics",
                },
              },
              {
                title: "Chapter 2: Electrostatic Potential and Capacitance",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=electrostatic+potential+and+capacitance+class+12+physics",
                },
              },
            ],
          },
          {
            subject: "Chemistry",
            chapters: [
              {
                title: "Chapter 1: The Solid State",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=the+solid+state+class+12+chemistry",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // --- BSE Odisha ---
  {
    board: "BSE Odisha",
    classes: [
      {
        class: "Class 10",
        subjects: [
          {
            subject: "General Science (GSC)",
            chapters: [
              {
                title: "Chapter 1: Chemical Reactions",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=chemical+reactions+class+10+odia",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // --- ICSE ---
  {
    board: "ICSE",
    classes: [
      {
        class: "Class 10",
        subjects: [
          {
            subject: "Maths",
            chapters: [
              {
                title: "Chapter 1: Linear Algebra",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=linear+algebra+class+10+maths",
                },
              },
              {
                title: "Chapter 2: Arithmetic",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=arithmetic+class+10+maths",
                },
              },
              {
                title: "Chapter 3: Geometry",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=geometry+class+10+maths",
                },
              },
            ],
          },
          {
            subject: "Science",
            chapters: [
              {
                title: "Chapter 1: Chemical Reactions and Equations",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=chemical+reactions+and+equations+class+10+science",
                },
              },
              {
                title: "Chapter 2: Acids, Bases, and Salts",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=acids+bases+and+salts+class+10+science",
                },
              },
              {
                title: "Chapter 3: Life Processes",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=life+processes+class+10+science",
                },
              },
            ],
          },
          {
            subject: "Social Science",
            chapters: [
              {
                title: "Chapter 1: The Rise of Nationalism in Europe",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=the+rise+of+nationalism+in+europe+class+10+sst",
                },
              },
              {
                title: "Chapter 2: Nationalism in India",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=nationalism+in+india+class+10+sst",
                },
              },
              {
                title: "Chapter 3: The Making of a Global World",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=the+making+of+a+global+world+class+10+sst",
                },
              },
            ],
          },
        ],
      },
      {
        class: "Class 12",
        subjects: [
          {
            subject: "Physics",
            chapters: [
              {
                title: "Chapter 1: Electric Charges and Fields",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=electric+charges+and+fields+class+12+physics",
                },
              },
              {
                title: "Chapter 2: Electrostatic Potential and Capacitance",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=electrostatic+potential+and+capacitance+class+12+physics",
                },
              },
              {
                title: "Chapter 3: Current Electricity",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=current+electricity+class+12+physics",
                },
              },
            ],
          },
          {
            subject: "Chemistry",
            chapters: [
              {
                title: "Chapter 1: The Solid State",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=the+solid+state+class+12+chemistry",
                },
              },
              {
                title: "Chapter 2: Solutions",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=solutions+class+12+chemistry",
                },
              },
              {
                title: "Chapter 3: Electrochemistry",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=electrochemistry+class+12+chemistry",
                },
              },
            ],
          },
          {
            subject: "Biology",
            chapters: [
              {
                title: "Chapter 1: Reproduction in Organisms",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=reproduction+in+organisms+class+12+biology",
                },
              },
              {
                title: "Chapter 2: Genetics and Evolution",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=genetics+and+evolution+class+12+biology",
                },
              },
              {
                title: "Chapter 3: Biology and Human Welfare",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=biology+and+human+welfare+class+12+biology",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // --- CHSE ---
  {
    board: "CHSE",
    classes: [
      {
        class: "Class 10",
        subjects: [
          {
            subject: "General Science (GSC)",
            chapters: [
              {
                title: "Chapter 1: Chemical Reactions",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=chemical+reactions+class+10+odia",
                },
              },
            ],
          },
          {
            subject: "Mathematics",
            chapters: [
              {
                title: "Chapter 1: Linear Algebra",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=linear+algebra+class+10+maths+odia",
                },
              },
              {
                title: "Chapter 2: Arithmetic",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=arithmetic+class+10+maths+odia",
                },
              },
              {
                title: "Chapter 3: Geometry",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=geometry+class+10+maths+odia",
                },
              },
            ],
          },
          {
            subject: "MIL Odia",
            chapters: [
              {
                title: "Chapter 1: Odia Literature",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=odia+literature+class+10+odia",
                },
              },
              {
                title: "Chapter 2: Odia Grammar",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=odia+grammar+class+10+odia",
                },
              },
              {
                title: "Chapter 3: Odia Poetry",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=odia+poetry+class+10+odia",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // --- UP Board ---
  {
    board: "UP Board",
    classes: [
      {
        class: "Class 10",
        subjects: [
          {
            subject: "General Science (GSC)",
            chapters: [
              {
                title: "Chapter 1: Chemical Reactions",
                resources: {
                  notes: "e-book.pdf",
                  pyqp: "notes.ppt",
                  ebook: "pyqs.pdf",
                  videos: "https://www.youtube.com/results?search_query=chemical+reactions+class+10+odia",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

// --- Main Component ---
const Gyankosh: React.FC = () => {
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const availableClasses = useMemo(() => {
    if (!selectedBoard) return [];
    return educationalData.find((b) => b.board === selectedBoard)?.classes || [];
  }, [selectedBoard]);

  const availableSubjects = useMemo(() => {
    if (!selectedClass) return [];
    return availableClasses.find((c) => c.class === selectedClass)?.subjects || [];
  }, [selectedClass, availableClasses]);

  const content = useMemo(() => {
    if (!selectedSubject) return [];
    return availableSubjects.find((s) => s.subject === selectedSubject)?.chapters || [];
  }, [selectedSubject, availableSubjects]);

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="https://static.vecteezy.com/system/resources/previews/021/761/574/original/library-icon-style-vector.jpg" alt="Shiksha Setu Logo" className="logo" />
        <div>
          <h1>ज्ञान कोष (Gyan Kosh)</h1>
          <p>The Shiksha Setu Knowledge Repository</p>
        </div>
      </header>

      <div className="filters-container card">
        <h2>Find Your Learning Material</h2>
        <p>Select your board, class, and subject to begin.</p>
        <div className="dropdown-group">
          <div className="select-wrapper">
            <select value={selectedBoard} onChange={(e) => { setSelectedBoard(e.target.value); setSelectedClass(""); setSelectedSubject(""); }}>
              <option value="" disabled>1. Select Board</option>
              {educationalData.map((board) => <option key={board.board} value={board.board}>{board.board}</option>)}
            </select>
          </div>
          <div className="select-wrapper">
            <select value={selectedClass} onChange={(e) => { setSelectedClass(e.target.value); setSelectedSubject(""); }} disabled={!selectedBoard}>
              <option value="" disabled>2. Select Class</option>
              {availableClasses.map((c) => <option key={c.class} value={c.class}>{c.class}</option>)}
            </select>
          </div>
          <div className="select-wrapper">
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} disabled={!selectedClass}>
              <option value="" disabled>3. Select Subject</option>
              {availableSubjects.map((s) => <option key={s.subject} value={s.subject}>{s.subject}</option>)}
            </select>
          </div>
        </div>
      </div>

      {selectedSubject && (
        <div className="content-container">
          <h3>Showing Results for: {selectedSubject}</h3>
          {content.length > 0 ? (
            content.map((chapter, idx) => (
              <div key={idx} className="chapter-card card">
                <h4>{chapter.title}</h4>
                <div className="resources">
                  <a href={chapter.resources.notes} target="_blank" rel="noopener noreferrer" className="resource-button notes">
                    <FileTextIcon /> Chapter Notes <DownloadIcon />
                  </a>
                  <a href={chapter.resources.pyqp} target="_blank" rel="noopener noreferrer" className="resource-button pyqp">
                    <FileTextIcon /> Previous Year Questions <DownloadIcon />
                  </a>
                  <a href={chapter.resources.ebook} target="_blank" rel="noopener noreferrer" className="resource-button ebook">
                    <BookIcon /> E-Book Chapter <DownloadIcon />
                  </a>
                  <a href={chapter.resources.videos} target="_blank" rel="noopener noreferrer" className="resource-button notes">
                    <FileTextIcon /> Video Lectures <DownloadIcon />
                  </a>
                </div>
              </div>
            ))
          ) : (<p>No chapters found for this subject.</p>)}
        </div>
      )}

      <footer className="app-footer">
        <p>&copy; 2025 Shiksha Setu. Bridging the educational gap in India.</p>
      </footer>
    </div>
  );
};

export default Gyankosh;
