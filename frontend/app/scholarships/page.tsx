"use client";

import Image from "next/image";
import scholarshipImg4 from "@/public/scholarshipimg4.png";
import scholarshipImg5 from "@/public/scholarshipimg5.png";
import './scholarship.css'

const scholarships = [
  {
    title: "State Scholarship Portal (Odisha)",
    desc: "Scholarships provided by the Government of Odisha for students of the state.",
    link: "https://scholarship.odisha.gov.in/",
    img: "data:image/png;base64,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",
    isLocal: false,
    alt: "Odisha State Scholarship Portal Logo",
  },
  {
    title: "National Scholarship Portal (NSP)",
    desc: "A central portal for applying to various scholarship schemes by the Government of India.",
    link: "https://scholarships.gov.in/",
    img: "https://scholarships.gov.in/public/assets2425/images/nsp-logo.svg",
    isLocal: false,
    alt: "National Scholarship Portal Logo",
  },
  {
    title: "Buddy4Study",
    desc: "India's largest scholarship platform, connecting students with scholarship opportunities.",
    link: "https://www.buddy4study.com/",
    img: "https://imgs.search.brave.com/n8vcAB-ZKUW5WMDr_N9ycBpJuK1MW99pi4uAjsSMryg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS91bjNyYXpTQk5U/TTltaHV3TUF0UVlv/TG5qNkhjRUJmY3di/WW1JYWE2SUtrMDBj/ZENZYXp4cWpfOVo4/Z1dtVDBqOTFn",
    isLocal: false,
    alt: "Buddy4Study Logo",
  },
  {
    title: "Vidyasaarathi",
    desc: "A platform for students to apply for various scholarships provided by corporations and industries.",
    link: "https://www.vidyasaarathi.co.in/Vidyasaarathi/scholarship",
    img: scholarshipImg4,
    isLocal: true,
    alt: "Vidyasaarathi Logo",
  },
  {
    title: "The Polar Foundation",
    desc: "Focuses on environmental awareness and science, offering scholarships for related fields of study.",
    link: "https://www.thepolarfoundation.com/scholarship",
    img: scholarshipImg5,
    isLocal: true,
    alt: "The Polar Foundation Logo",
  },
];

const ScholarshipsPage = () => {
  return (
    <section className="scholarship-section">
      <div className="container">
        <div className="section-header">
          <h2>Find Your Scholarship 🎓</h2>
          <p>Explore these top portals to find scholarships that match your needs. Click on any card to visit the site.</p>
        </div>

        <div className="scholarship-grid">
          {scholarships.map((scholarship, index) => (
            <a
              key={index}
              href={scholarship.link}
              target="_blank"
              rel="noopener noreferrer"
              className="scholarship-card"
            >
              {scholarship.isLocal ? (
                <Image src={scholarship.img} alt={scholarship.alt} width={150} height={150} />
              ) : (
                <Image src={scholarship.img} alt={scholarship.alt} width={150} height={150} unoptimized />
              )}
              <h3>{scholarship.title}</h3>
              <p>{scholarship.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsPage;
