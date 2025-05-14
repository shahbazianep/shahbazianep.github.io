"use client";

import styles from "@/app/app.module.css";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";

import {
    PiArrowCircleRightThin,
    PiArrowRightThin,
    PiCircleHalfTiltThin,
    PiCodeThin,
    PiCubeTransparentThin,
    PiGitMergeThin,
    PiStackThin,
} from "react-icons/pi";

import Chip from "@/assets/Chip";
import Timeline from "@/assets/Timeline";
import FadeInElement from "@/assets/FadeInElement";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import { TextLoop } from "@/assets/TextLoop";
import { BiLogoGithub } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn, FaSpotify } from "react-icons/fa";

// Python, CSS, HTML, React, Typescript, Javascript, C++, Java, Git, VBA, Microsoft Suite, Django, SQL, Linux, NodeJS, NextJS, Firebase, Docker, Figma
const programmingTools: string[] = [
    "Python",
    "JavaScript",
    "TypeScript",
    "CSS/3",
    "HTML/5",
    "C++",
    "VisualBasic",
];
const technologyTools: string[] = [
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "Firebase",
    "MongoDB",
    "Flask",
    "Django",
];
const developmentTools: string[] = [
    "Git",
    "Github",
    "Gitlab",
    "Github CI/CD",
    "Figma",
    "Linux",
    "Docker",
];
const libraryTools: string[] = [
    "D3.js",
    "Three.js",
    "Pandas",
    "Tensorflow",
    "Matplotlib",
    "BeautifulSoup4",
    "Scikit-learn",
    "OpenCV",
    "Numpy",
];

export default function Page() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 16,
            }}
        >
            <div className={styles.row}>
                <FadeInElement width={75}>
                    <div className={styles.landing_tile}>
                        <div className={styles.content}>
                            <div
                                style={{
                                    fontFamily: "WorkSans-Regular",
                                    display: "flex",
                                    flexDirection: "column",
                                    marginBottom: "20px",
                                }}
                            >
                                <span className={styles.intro}>My name is</span>
                                <span className={styles.name}>
                                    Ethan Shahbazian
                                </span>
                            </div>
                            <div className={styles.subtext}>
                                <span>I specialize in blending</span>
                                <TextLoop interval={3}>
                                    <span>innovation</span>
                                    <span>performance</span>
                                    <span>design</span>
                                    <span>experiences</span>
                                </TextLoop>
                            </div>
                        </div>
                    </div>
                </FadeInElement>
                <div className={styles.hidden}>
                    <FadeInElement width={80}>
                        <div className={styles.portrait_tile}>
                            <Image
                                src="/images/me.jpg"
                                alt="Personal picture"
                                style={{
                                    objectFit: "cover",
                                }}
                                height={1000}
                                width={400}
                                priority
                            />
                        </div>
                    </FadeInElement>
                </div>
            </div>
            <div className={styles.socials_row}>
                <FadeInElement width={100}>
                    <div className={styles.social_container}>
                        <Link
                            href={"https://github.com/shahbazianep"}
                            passHref={true}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: "100%" }}
                        >
                            <div className={styles.social_icon_wrapper}>
                                <BiLogoGithub
                                    size={35}
                                    className={styles.social_icon}
                                />
                                Github
                            </div>
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/in/ethanshahbazian/"
                            }
                            passHref={true}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: "100%" }}
                        >
                            <div className={styles.social_icon_wrapper}>
                                <FaLinkedinIn
                                    size={26}
                                    className={styles.social_icon}
                                />
                                LinkedIn
                            </div>
                        </Link>
                        <Link
                            href={"https://leetcode.com/u/eshah22/"}
                            passHref={true}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: "100%" }}
                        >
                            <div className={styles.social_icon_wrapper}>
                                <SiLeetcode
                                    size={25}
                                    className={styles.social_icon}
                                />
                                Leetcode
                            </div>
                        </Link>

                        <Link
                            href={"https://open.spotify.com/user/eshah22"}
                            passHref={true}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: "100%" }}
                        >
                            <div className={styles.social_icon_wrapper}>
                                <FaSpotify
                                    size={27}
                                    className={styles.social_icon}
                                />
                                Spotify
                            </div>
                        </Link>
                    </div>
                </FadeInElement>
            </div>

            <div className={styles.skills_row}>
                <FadeInElement width={25}>
                    <div className={styles.timeline_tile}>
                        <div>Experience</div>
                        <Timeline />
                    </div>
                </FadeInElement>
                <FadeInElement width={75}>
                    <div className={styles.skills_container}>
                        <div
                            className={styles.skills_tile}
                            style={{
                                background:
                                    "radial-gradient(at 36.29310797263587% 5.2348996702189945%, #3a3a4b 0px, transparent 50%), radial-gradient(at 43.892653719189354% 78.50111890959259%, #20202c 0px, transparent 50%), radial-gradient(at 79.42756670075887% 40.1342285292794%, #2b2b36 0px, transparent 50%) #2C2C3B",
                            }}
                        >
                            <div className={styles.skills_title}>
                                <PiCodeThin
                                    size={60}
                                    className={styles.skills_icon}
                                />
                                Languages
                            </div>
                            <div className={styles.chip_container}>
                                {programmingTools.map(
                                    (e: string, i: number) => {
                                        return <Chip key={i}>{e}</Chip>;
                                    }
                                )}
                            </div>
                        </div>
                        <div
                            className={styles.skills_tile}
                            style={{
                                background:
                                    "radial-gradient(at 63.03225041421293% 10.492170363731299%, #3a3a4b 0px, transparent 50%), radial-gradient(at 25.667817160324997% 46.51006745545389%, #20202c 0px, transparent 50%), radial-gradient(at 72.46131643308485% 86.55481018476038%, #2b2b36 0px, transparent 50%) #2C2C3B",
                            }}
                        >
                            <div className={styles.skills_title}>
                                <PiStackThin
                                    size={60}
                                    className={styles.skills_icon}
                                />
                                Technologies
                            </div>
                            <div className={styles.chip_container}>
                                {technologyTools.map((e: string, i: number) => {
                                    return <Chip key={i}>{e}</Chip>;
                                })}
                            </div>
                        </div>
                        <div
                            className={styles.skills_tile}
                            style={{
                                background:
                                    "radial-gradient(at 5.824558822102019% 94.72035828319439%, #49495f 0px, transparent 50%), radial-gradient(at 66.97275561612955% 62.50559318252324%, #1e1e2a 0px, transparent 50%), radial-gradient(at 83.29770573835555% 13.624161415185437%, #2a2a32 0px, transparent 50%) #2c2c3b",
                            }}
                        >
                            <div className={styles.skills_title}>
                                <PiGitMergeThin
                                    size={60}
                                    className={styles.skills_icon}
                                />
                                Dev Tools
                            </div>
                            <div className={styles.chip_container}>
                                {developmentTools.map(
                                    (e: string, i: number) => {
                                        return <Chip key={i}>{e}</Chip>;
                                    }
                                )}
                            </div>
                        </div>
                        <div
                            className={styles.skills_tile}
                            style={{
                                background:
                                    "radial-gradient(at 67.32458643772925% 47.74049251138231%, #434356 0px, transparent 50%), radial-gradient(at 62.6100534282933% 24.80984374180736%, #1e1e2a 0px, transparent 50%), radial-gradient(at 28.6935622260824% 76.26398244426821%, #2a2a32 0px, transparent 50%) #2c2c3b",
                            }}
                        >
                            <div className={styles.skills_title}>
                                <PiCubeTransparentThin
                                    size={60}
                                    className={styles.skills_icon}
                                />
                                Libraries
                            </div>
                            <div className={styles.chip_container}>
                                {libraryTools.map((e: string, i: number) => {
                                    return <Chip key={i}>{e}</Chip>;
                                })}
                            </div>
                        </div>
                    </div>
                </FadeInElement>
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
                                <Image
                                    className={styles.image}
                                    src="/images/nanika_cover.png"
                                    alt="Nanika Cover Image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                />
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
                                <Image
                                    className={styles.image}
                                    src="/images/concerto_cover.png"
                                    alt="Concerto Cover Image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                />
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
                                <Image
                                    src="/images/bruinbot_cover.jpg"
                                    alt="BruinBot Cover Image"
                                    className={styles.image}
                                    fill
                                />
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
                                <Image
                                    className={styles.image}
                                    src="/images/portfolio_cover.png"
                                    alt="Portfolio Cover Image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </Link>
                </FadeInElement>
                <FadeInElement width={25}>
                    <Link href="/medimate" className={styles.project_tile_s}>
                        <div className={styles.image_container}>
                            <div className={styles.image_wrapper}>
                                <Image
                                    src="/images/medimate_cover.jpg"
                                    alt="Medimate Cover Image"
                                    className={styles.image}
                                    fill
                                />
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
                                    "Python",
                                    "System Design",
                                    "OpenCV",
                                    "Raspberry Pi",
                                ].map((text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                })}
                            </div>
                        </div>
                    </Link>
                </FadeInElement>
            </div>
            <div className={styles.row} id="contact">
                <FadeInElement width={100}>
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
                                    "stockml",
                                    "prolol",
                                    "plantz",
                                ].map((project, index) => {
                                    return (
                                        <Link
                                            href={`/${project}`}
                                            key={index}
                                            className={styles.project_link}
                                        >
                                            <div
                                                style={{
                                                    borderTop:
                                                        index == 0 || index == 5
                                                            ? "none"
                                                            : "1px solid #bbb",
                                                    height: "100%",
                                                    width: "100%",
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
                            {/* <div className={styles.projects_container}>
                                {["stockml", "prolol", "plantz"].map(
                                    (project, index) => {
                                        return (
                                            <Link
                                                href={`/${project}`}
                                                key={index}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    height: "20%",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        borderTop:
                                                            index == 0
                                                                ? "none"
                                                                : "1px solid #bbb",
                                                        height: "100%",
                                                        width: "100%",
                                                    }}
                                                    className={
                                                        styles.project_list
                                                    }
                                                >
                                                    {project}
                                                    <PiArrowRightThin
                                                        size={24}
                                                        className={styles.icon}
                                                    />
                                                </div>
                                            </Link>
                                        );
                                    }
                                )}
                            </div> */}
                        </div>
                    </div>
                </FadeInElement>
            </div>
        </div>
    );
}
