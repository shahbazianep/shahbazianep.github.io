"use client";

import ColorBlock from "@/assets/ColorBlock";
import Chip from "@/assets/Chip";
import Test from "@/assets/images/concerto_demo2.png";
import Image from "next/image";
import styles from "@/app/app.module.css";
import FadeInElement from "@/assets/FadeInElement";
import Link from "next/link";

export default function Page() {
    return (
        <div
            style={{
                padding: 32,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                fontFamily: "WorkSans-Regular",
                color: "#fff",
                maxWidth: 1600,
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <div className={styles.row}>
                <FadeInElement width={50}>
                    <div className={styles.project_description_tile}>
                        <div>
                            portfolio
                            <div className={styles.chips}>
                                {[
                                    "React",
                                    "Typescript",
                                    "Next.js",
                                    "Figma",
                                ].map((text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                })}
                            </div>
                        </div>
                        <div style={{ fontSize: 24, marginTop: 16 }}>
                            This portfolio was developed in Next.js with
                            Typescript, and inspired by the popular Japanese
                            bento organizational system. Distinct sections are
                            created to house separate yet adjacent ideas. This
                            organization system provided me a simple yet
                            effective way to include the all the projects and
                            experiences that reflect my wide variety of
                            interests.
                        </div>
                        <Link href="/">
                            <div className={styles.link}>Visit website</div>
                        </Link>
                    </div>
                </FadeInElement>
                <FadeInElement width={50}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            gap: 32,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 32,
                                height: "25vh",
                            }}
                        >
                            <div className={styles.typography_tile}>
                                <div style={{ fontFamily: "Optician-Sans" }}>
                                    Optician Sans
                                </div>
                                <div
                                    style={{ fontFamily: "TenorSans-Regular" }}
                                >
                                    TenorSans Regular
                                </div>
                            </div>
                            <div className={styles.color_block_tile}>
                                <ColorBlock
                                    colors={[
                                        "#0d1014",
                                        "#1b2024",
                                        "#9077e1",
                                        "#ffffff",
                                    ]}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 32,
                                height: "100%",
                            }}
                        >
                            <div className={styles.project_goals_tile}>
                                <div>Goals</div>
                                <div className={styles.list}>
                                    {[
                                        "Highlight my past experiences and accomplishments, both professional and person",
                                        "Showcase my web development abilities",
                                        "Expand my Next.js and Typescript familiarity",
                                        "Explore novel design styles",
                                    ].map((goal, index) => {
                                        return (
                                            <div>{index + 1 + ". " + goal}</div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className={styles.project_details_tile}>
                                <div>Results</div>
                                <div className={styles.list}>
                                    Furthered my experience in Next.js pages,
                                    layouts, routing, while creating an elegant
                                    UI that houses my most important personal
                                    projects and professional experiences. The
                                    chosen layout also easily allows for
                                    responsive design, which was an unforeseen
                                    benefit.
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInElement>
            </div>
            {/* <div className={styles.row}>
                <FadeInElement width={50}>
                    <div className={styles.project_description_tile}>
                        <div>
                            portfolio
                            <div className={styles.chips}>
                                {[
                                    "React",
                                    "Typescript",
                                    "Next.js",
                                    "Figma",
                                ].map((text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                })}
                            </div>
                        </div>
                        <div style={{ fontSize: 24, marginTop: 16 }}>
                            This portfolio was developed in Next.js with
                            Typescript, and inspired by the popular Japanese
                            bento organizational system. Distinct sections are
                            created to house separate yet adjacent ideas. This
                            organization system provided me a simple yet
                            effective way to include the all the projects and
                            experiences that reflect my wide variety of
                            interests.
                        </div>
                        <Link href="/">
                            <div className={styles.link}>Visit website</div>
                        </Link>
                    </div>
                </FadeInElement>
                <FadeInElement width={25}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <div className={styles.typography_tile}>
                            <div style={{ fontFamily: "Optician-Sans" }}>
                                Optician Sans
                            </div>
                            <div style={{ fontFamily: "WorkSans-Regular" }}>
                                WorkSans Regular
                            </div>
                        </div>
                        <div className={styles.project_goals_tile}>
                            <div>Goals</div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    fontSize: 16,
                                    marginTop: 16,
                                    gap: 10,
                                }}
                            >
                                {[
                                    "Highlight my past experiences and accomplishments, both professional and person",
                                    "Showcase my web development abilities",
                                    "Expand my Next.js and Typescript familiarity",
                                    "Explore novel design styles",
                                ].map((goal, index) => {
                                    return <div>{index + 1 + ". " + goal}</div>;
                                })}
                            </div>
                        </div>
                    </div>
                </FadeInElement>
                <FadeInElement width={25}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <div className={styles.color_block_tile}>
                            <ColorBlock
                                colors={[
                                    "#0d1014",
                                    "#1b2024",
                                    "#9077e1",
                                    "#ffffff",
                                ]}
                            />
                        </div>
                        <div className={styles.project_details_tile}>
                            <div>Results</div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    fontSize: 16,
                                    marginTop: 16,
                                    gap: 10,
                                }}
                            >
                                
                                Furthered my experience in Next.js pages,
                                layouts, routing, while creating an elegant UI
                                that houses my most important personal projects
                                and professional experiences. The chosen layout
                                also easily allows for responsive design, which
                                was an unforeseen benefit.
                            </div>
                        </div>
                    </div>
                </FadeInElement>
            </div> */}

            <div className={styles.row}>
                <FadeInElement width={100}>
                    <div className={styles.project_demo_image}>
                        <Image
                            src={Test}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
            </div>
            <div className={styles.row}>
                <FadeInElement width={50}>
                    <div className={styles.project_highlight_image}>
                        <Image
                            src={Test}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
                <FadeInElement width={50}>
                    <div className={styles.project_highlight_image}>
                        <Image
                            src={Test}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
            </div>
        </div>
    );
}
