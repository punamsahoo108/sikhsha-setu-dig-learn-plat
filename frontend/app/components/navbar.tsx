"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoPic from '@/public/logo-hackodisha.png';
import "./navbar.css";
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    return (
        <>
            <header>
                <nav>
                    <div className="webLogo" style={{ display: "flex" }}>
                        <Image
                            src={LogoPic}
                            alt="Logo"
                            priority
                            style={{ width: "7rem", height: "auto", marginLeft: "0.5rem" }}
                        />
                    </div>
                    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="nav-link">
                        <ul className={menuOpen ? "open" : ""}>
                            {[
                                { href: "/", label: "Home" },
                                { href: "/notes", label: "E-Library" },
                                { href: "/livetutorial", label: "Live Tutorial" },
                                { href: "/scholarships", label: "Scholarships" },
                                { href: "/qna", label: "Doubts Box" },
                                { href: "/contact", label: "Contact" },
                            ].map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={pathname === href ? "active" : ""}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="subNav">
                    <div className="registration-nav">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={()=>router.push('/login')}
                        >
                            Log in
                        </button>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={()=>router.push('/signup')}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="update">
                        <div className="updatehead">Updates:</div>
                        <div className="marquee">
                            <div className="marquee-content">
                                <span>
                                    <a href="https://indianexpress.com/article/education/bse-odisha-board-class-10-supplementary-results-2025-declared-how-to-check-results-orissaresults-nic-in-10193180/">
                                        ..BSE Odisha Class 10 Supplementary Results 2025 Declared..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://indianexpress.com/article/education/odisha-govt-introduces-fail-system-for-classes-5th-8th-annual-exams-10118159/">
                                        ..Odisha govt introduces fail system for Classes 5th, 8th annual exams..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://indianexpress.com/article/education/odisha-board-chse-12th-result-2025-out-hsc-plus-two-results-declared-link-active-results-odisha-gov-in-chseodisha-nic-in-and-orissaresults-nic-in-pass-percent-topper-recheck-9963522/">
                                        ..Odisha Board CHSE +2 Result 2025 (Out): Check Arts, Commerce, Science pass percentage..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.thehindu.com/news/national/odisha/odisha-introduces-academic-accountability-in-schools-through-examinations/article69791794.ece">
                                        ..Odisha introduces academic accountability in schools through examinations..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://timesofindia.indiatimes.com/city/bhubaneswar/odisha-chief-minister-mohan-charan-majhi-unveils-new-curriculum-framework-for-school-education-on-teachers-day/articleshow/123722795.cms">
                                        ..Odisha chief minister Mohan Charan Majhi unveils new curriculum framework for school education on Teacher’s Day..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.hindustantimes.com/education/news/five-higher-educational-institutes-from-odisha-in-nirf-top-100-list-101757067875182.html">
                                        ..Five higher educational institutes from Odisha in NIRF top 100 list..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.deccanchronicle.com/news/odisha-to-merge-bse-chse-free-textbooks-for-class-ix-and-x-students-1899003">
                                        ..Odisha to Merge BSE, CHSE; Free Textbooks for Class IX and X Students..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://indianexpress.com/article/education/bse-odisha-board-class-10-supplementary-results-2025-declared-how-to-check-results-orissaresults-nic-in-10193180/">
                                        ..BSE Odisha Class 10 Supplementary Results 2025 Declared..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://indianexpress.com/article/education/odisha-govt-introduces-fail-system-for-classes-5th-8th-annual-exams-10118159/">
                                        ..Odisha govt introduces fail system for Classes 5th, 8th annual exams..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://indianexpress.com/article/education/odisha-board-chse-12th-result-2025-out-hsc-plus-two-results-declared-link-active-results-odisha-gov-in-chseodisha-nic-in-and-orissaresults-nic-in-pass-percent-topper-recheck-9963522/">
                                        ..Odisha Board CHSE +2 Result 2025 (Out): Check Arts, Commerce, Science pass percentage..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.thehindu.com/news/national/odisha/odisha-introduces-academic-accountability-in-schools-through-examinations/article69791794.ece">
                                        ..Odisha introduces academic accountability in schools through examinations..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://timesofindia.indiatimes.com/city/bhubaneswar/odisha-chief-minister-mohan-charan-majhi-unveils-new-curriculum-framework-for-school-education-on-teachers-day/articleshow/123722795.cms">
                                        ..Odisha chief minister Mohan Charan Majhi unveils new curriculum framework for school education on Teacher’s Day..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.hindustantimes.com/education/news/five-higher-educational-institutes-from-odisha-in-nirf-top-100-list-101757067875182.html">
                                        ..Five higher educational institutes from Odisha in NIRF top 100 list..
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.deccanchronicle.com/news/odisha-to-merge-bse-chse-free-textbooks-for-class-ix-and-x-students-1899003">
                                        ..Odisha to Merge BSE, CHSE; Free Textbooks for Class IX and X Students..
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Navbar;
