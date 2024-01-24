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
                            medimate
                            <div className={styles.chips}>
                                {[
                                    "Python",
                                    "Raspberry Pi",
                                    "OpenCV",
                                    "System Design",
                                ].map((text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                })}
                            </div>
                        </div>
                        <div style={{ fontSize: 24, marginTop: 16 }}>
                            Medimate is a system that enables safer, more
                            independent prescription medication management for
                            elderly and visually impaired populations. I worked
                            in a team of 5 for my robotics capstone project to
                            create several subsystems. When combined these
                            subsystems created a device that would minimize
                            medication related hospitalizations and allow for
                            our target population to operate more independently.
                        </div>
                        <Link href="/">
                            <div className={styles.link}>Visit website</div>
                        </Link>
                    </div>
                </FadeInElement>
                <FadeInElement width={"50%"}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className={styles.typography_tile}>
                            <div style={{ fontFamily: "Optician-Sans" }}>
                                Optician Sans
                            </div>
                            <div style={{ fontFamily: "WorkSans-Regular" }}>
                                WorkSans Regular
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
                    <div style={{ display: "flex", flexDirection: "row" }}>
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
                                ].map((goal, index) => {
                                    return <div>{index + 1 + ". " + goal}</div>;
                                })}
                            </div>
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
                                {/* {[
                                    "95% faster search times",
                                    "Added enhanced filters that allow for greater specificity and more filter options",
                                    "Designed and implemented a smooth, simple UI that mimics the Spotify user experience",
                                ].map((goal, index) => {
                                    return <div>{index + 1 + ". " + goal}</div>;
                                })} */}
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
