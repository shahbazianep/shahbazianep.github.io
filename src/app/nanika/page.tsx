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
            }}
        >
            <div className={styles.row}>
                <FadeInElement width={"50%"}>
                    <div className={styles.project_description_tile}>
                        <div>
                            nanika
                            <div className={styles.chips}>
                                {[
                                    "React Native",
                                    "JavaScript",
                                    "Firebase",
                                    "Figma",
                                ].map((text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                })}
                            </div>
                        </div>
                        <div style={{ fontSize: 24, marginTop: 16 }}>
                            Nanika is a mobile application designed to improve
                            mental health by leveraging the principle of
                            emotional contagion. It allows users to securely log
                            and track their emotions over time while providing
                            an anonymous, summarized view into a their friends'
                            emotional states. Users can join and create clusters
                            which enable the emotional contagion, helping bias
                            their moods towards more positive emotions over
                            time.
                        </div>
                        <Link href="/">
                            <div className={styles.link}>Visit website</div>
                        </Link>
                    </div>
                </FadeInElement>
                <FadeInElement width={"25%"}>
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
                            <div style={{ fontFamily: "TenorSans-Regular" }}>
                                TenorSans Regular
                            </div>
                        </div>
                        <div className={styles.project_details_tile}>
                            <div>Results</div>
                            <div className={styles.list}>
                                {[
                                    "95% faster search times",
                                    "Added enhanced filters that allow for greater specificity and more filter options",
                                    "Designed and implemented a smooth, simple UI that mimics the Spotify user experience",
                                ].map((goal, index) => {
                                    return <div>{index + 1 + ". " + goal}</div>;
                                })}
                            </div>
                        </div>
                    </div>
                </FadeInElement>
                <FadeInElement width={"25%"}>
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
                                    "#0E0E0E",
                                    "#5C5C5C",
                                    "#A9A9B8",
                                    "#D9D9D9",
                                    "#FCFCFF",
                                    "#EAEAFF",
                                    "#5453A6",
                                    "#C6C6ED",
                                    "#EEC7CC",
                                    "#D1EFC8",
                                    "#FFFBBA",
                                    "#E3E3E3",
                                ]}
                            />
                        </div>
                        <div className={styles.project_goals_tile}>
                            <div>Goals</div>
                            <div className={styles.list}>
                                {[
                                    "Provide private journaling and mood tracking capabilities",
                                    "Improve general emotional conditions by enabling the principle of emotional contagion",
                                    "Allow for anonymized social interaction via clusters",
                                ].map((goal, index) => {
                                    return <div>{index + 1 + ". " + goal}</div>;
                                })}
                            </div>
                        </div>
                    </div>
                </FadeInElement>
            </div>

            <div className={styles.row}>
                <FadeInElement width={"100%"}>
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
                <FadeInElement width={"50%"}>
                    <div className={styles.project_highlight_image}>
                        <Image
                            src={Test}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
                <FadeInElement width={"50%"}>
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
