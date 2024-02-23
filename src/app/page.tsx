"use client";

import Stars from "@/assets/Stars";
import Chip from "@/assets/Chip";
import styles from "@/app/app.module.css";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";
import Me from "@/assets/images/me.jpg";
import NANIKA_DEMO from "@/assets/images/nanika_demo2.png";
import CONCERTO_DEMO from "@/assets/images/concerto_demo2.png";
import MEDIMATE_DEMO from "@/assets/images/medimate7.jpg";
import BRUINBOT_DEMO from "@/assets/images/bruinbot.jpg";
import PORTFOLIO_DEMO from "@/assets/images/portfolio_cover.png";

import {
    PiArrowCircleRightThin,
    PiArrowRightThin,
    PiChatsCircleThin,
    PiCircleHalfTiltThin,
    PiGitMergeThin,
    PiGlobeThin,
    PiPottedPlantThin,
    PiStackThin,
} from "react-icons/pi";

import Timeline from "@/assets/Timeline";
import Socials from "@/assets/Socials";
import FadeInElement from "@/assets/FadeInElement";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import { InView } from "react-intersection-observer";

// Python, CSS, HTML, React, Typescript, Javascript, C++, Java, Git, VBA, Microsoft Suite, Django, SQL, Linux, NodeJS, NextJS, Firebase, Docker, Figma
const programmingTools: { [key: string]: number } = {
    Python: 5,
    JavaScript: 5,
    TypeScript: 3,
    "CSS/3": 5,
    "HTML/5": 5,
    "C++": 4,
    VisualBasic: 4,
};

const technologyTools: { [key: string]: number } = {
    React: 5,
    Django: 2,
    SQL: 3,
    "Node.js": 4,
    "Next.js": 3.5,
    Firebase: 4.5,
};

const developmentTools: { [key: string]: number } = {
    "Git/Gitlab": 4,
    "Microsoft Suite": 5,
    Linux: 3.5,
    Docker: 2.5,
    Figma: 4,
};

const hobbyTools: { [key: string]: number } = {
    Badminton: 4.5,
    "Succulent Care": 2,
    "Video Games": 3,
    Reading: 4.5,
    Baking: 5,
    Anime: 2.5,
};

export default function Page() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <div
            style={{
                padding: 32,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 1600,
            }}
        >
            <div className={styles.row}>
                <FadeInElement width={60}>
                    <div className={styles.landing_tile}>
                        <div
                            style={{
                                height: 150,
                                width: 150,
                                overflow: "hidden",
                                marginBottom: 10,
                                borderRadius: "50%",
                            }}
                        >
                            {Me ? (
                                <Image
                                    src={Me}
                                    alt="hello"
                                    style={{
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        scale: 1.1,
                                    }}
                                    height={150}
                                    width={150}
                                    priority
                                />
                            ) : null}
                        </div>

                        <div>
                            My name is Ethan Shahbazian, a software engineer
                            from the San Francisco Bay Area.
                        </div>
                        <div className={styles.subtext}>
                            I specialize in creating memorable, clean user
                            experiences and developing efficient, innovative
                            solutions to a variety of technical problems.
                        </div>
                        <div className={styles.social_container}>
                            <Socials />
                        </div>
                    </div>
                </FadeInElement>
                <FadeInElement width={40}>
                    <div className={styles.timeline_tile}>
                        <Timeline />
                    </div>
                </FadeInElement>
            </div>

            <div className={styles.skills_row}>
                <div className={styles.division}>
                    <FadeInElement width={50}>
                        <div className={styles.skills_tile}>
                            <div className={styles.skills_title}>
                                <PiGlobeThin
                                    size={60}
                                    className={styles.skills_icon}
                                />
                                <div style={{ marginBottom: 10 }}>
                                    Languages
                                </div>
                            </div>
                            {Object.keys(programmingTools).map(
                                (e: string, i: number) => {
                                    return (
                                        <Stars
                                            key={i}
                                            rating={programmingTools[e]}
                                        >
                                            {e}
                                        </Stars>
                                    );
                                }
                            )}
                        </div>
                    </FadeInElement>
                    <FadeInElement width={50}>
                        <div className={styles.skills_tile}>
                            <div className={styles.skills_title}>
                                <PiStackThin
                                    size={60}
                                    className={styles.skills_icon}
                                />
                                <div style={{ marginBottom: 10 }}>
                                    Technologies
                                </div>
                            </div>
                            {Object.keys(technologyTools).map(
                                (e: string, i: number) => {
                                    return (
                                        <Stars
                                            key={i}
                                            rating={technologyTools[e]}
                                        >
                                            {e}
                                        </Stars>
                                    );
                                }
                            )}
                        </div>
                    </FadeInElement>
                </div>
                <div className={styles.division}>
                    <FadeInElement width={50}>
                        <div className={styles.skills_tile}>
                            <div className={styles.skills_title}>
                                <PiGitMergeThin
                                    size={60}
                                    className={styles.skills_icon}
                                />
                                <div style={{ marginBottom: 10 }}>
                                    Dev Tools{" "}
                                </div>
                            </div>
                            {Object.keys(developmentTools).map(
                                (e: string, i: number) => {
                                    return (
                                        <Stars
                                            key={i}
                                            rating={developmentTools[e]}
                                        >
                                            {e}
                                        </Stars>
                                    );
                                }
                            )}
                        </div>
                    </FadeInElement>
                    <FadeInElement width={50}>
                        <div className={styles.skills_tile}>
                            <div className={styles.skills_title}>
                                <PiPottedPlantThin
                                    size={60}
                                    className={styles.skills_icon}
                                />
                                <div style={{ marginBottom: 10 }}>Hobbies</div>
                            </div>
                            {Object.keys(hobbyTools).map(
                                (e: string, i: number) => {
                                    return (
                                        <Stars key={i} rating={hobbyTools[e]}>
                                            {e}
                                        </Stars>
                                    );
                                }
                            )}
                        </div>
                    </FadeInElement>
                </div>
            </div>
            <div className={styles.row} id="projects">
                <FadeInElement width={50}>
                    <Link href="/nanika" className={styles.project_tile_l}>
                        <div className={styles.title}>
                            nanika
                            <PiArrowCircleRightThin
                                size={40}
                                className={styles.icon}
                            />
                        </div>

                        <div className={styles.chips}>
                            {[
                                "React Native",
                                "Figma",
                                "JavaScript",
                                "Firebase",
                            ].map((text, index) => {
                                return <Chip key={index}>{text}</Chip>;
                            })}
                        </div>
                        <div className={styles.image_container}>
                            <div className={styles.image_wrapper}>
                                {NANIKA_DEMO ? (
                                    <Image
                                        className={styles.image}
                                        src={NANIKA_DEMO}
                                        alt="Nanika Cover Image"
                                        style={{ width: "100%" }}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </Link>
                </FadeInElement>
                <FadeInElement width={50}>
                    <Link href="/concerto" className={styles.project_tile_l}>
                        <div className={styles.title}>
                            concerto
                            <PiArrowCircleRightThin
                                size={40}
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.chips}>
                            {["React", "JavaScript", "Figma", "REST APIs"].map(
                                (text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                }
                            )}
                        </div>
                        <div className={styles.image_container}>
                            <div className={styles.image_wrapper}>
                                {CONCERTO_DEMO ? (
                                    <Image
                                        className={styles.image}
                                        src={CONCERTO_DEMO}
                                        alt="Concerto Cover Image"
                                        style={{ width: "100%" }}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </Link>
                </FadeInElement>
            </div>
            <div className={styles.row}>
                <FadeInElement width={25}>
                    <Link href="/bruinbot" className={styles.project_tile_s}>
                        <div className={styles.image_container}>
                            <div className={styles.image_wrapper}>
                                {BRUINBOT_DEMO ? (
                                    <Image
                                        src={BRUINBOT_DEMO}
                                        alt={"BruinBot Cover Image"}
                                        className={styles.image}
                                    />
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.overlay}>
                            <div className={styles.title}>
                                bruinbot
                                <PiArrowCircleRightThin
                                    size={40}
                                    className={styles.icon}
                                />
                            </div>
                            <div className={styles.chips}>
                                {[
                                    "System Design",
                                    "Python",
                                    "Linux",
                                    "Sensors/Signals",
                                ].map((text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                })}
                            </div>
                        </div>
                    </Link>
                </FadeInElement>
                <FadeInElement width={50}>
                    <Link href="/portfolio" className={styles.project_tile_m}>
                        <div className={styles.title}>
                            portfolio
                            <PiArrowCircleRightThin
                                size={40}
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.chips}>
                            {["React", "Next.js", "Typescript", "Figma"].map(
                                (text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                }
                            )}
                        </div>
                        <div className={styles.image_container}>
                            <div className={styles.image_wrapper}>
                                {PORTFOLIO_DEMO ? (
                                    <Image
                                        className={styles.image}
                                        src={PORTFOLIO_DEMO}
                                        alt="Portfolio Cover Image"
                                    />
                                ) : null}
                            </div>
                        </div>
                    </Link>
                </FadeInElement>
                <FadeInElement width={25}>
                    <Link href="/medimate" className={styles.project_tile_s}>
                        <div className={styles.image_container}>
                            <div className={styles.image_wrapper}>
                                {MEDIMATE_DEMO ? (
                                    <Image
                                        src={MEDIMATE_DEMO}
                                        alt={"MediMate Cover Image"}
                                        className={styles.image}
                                    />
                                ) : null}
                            </div>
                        </div>

                        <div className={styles.overlay}>
                            <div className={styles.title}>
                                medimate
                                <PiArrowCircleRightThin
                                    size={40}
                                    className={styles.icon}
                                />
                            </div>
                            <div className={styles.chips}>
                                {[
                                    "Raspberry Pi",
                                    "OpenCV",
                                    "Python",
                                    "System Design",
                                ].map((text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                })}
                            </div>
                        </div>
                    </Link>
                </FadeInElement>
            </div>
            <div className={styles.row} id="contact">
                <FadeInElement width={50}>
                    <div className={styles.more_tile}>
                        <PiChatsCircleThin size={60} className={styles.icon} />
                        <div>
                            Interested in more?
                            <div
                                style={{
                                    fontSize: 16,
                                    fontFamily: "WorkSans-Regular",
                                    marginTop: 10,
                                    color: "#bbb",
                                }}
                            >
                                Learn more about my experiences, skills, and
                                interests.
                            </div>
                        </div>
                        <Socials />
                    </div>
                </FadeInElement>
                <FadeInElement width={50}>
                    <div className={styles.more_tile_projects}>
                        <div className={styles.container}>
                            <div className={styles.title}>
                                <PiCircleHalfTiltThin
                                    size={60}
                                    className={styles.icon}
                                />
                                <div>All Projects</div>
                            </div>
                            <div className={styles.projects_container}>
                                {[
                                    "nanika",
                                    "concerto",
                                    "bruinbot",
                                    "portfolio",
                                    "medimate",
                                ].map((project, index) => {
                                    return (
                                        <Link href={`/${project}`} key={index}>
                                            <div
                                                style={{
                                                    borderTop:
                                                        index == 0
                                                            ? "none"
                                                            : "1px solid #bbb",
                                                }}
                                                className={styles.project_list}
                                            >
                                                {project}
                                                <PiArrowRightThin
                                                    size={24}
                                                    className={styles.icon}
                                                />
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </FadeInElement>
            </div>
        </div>
    );
}
