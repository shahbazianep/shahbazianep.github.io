"use client";

import ColorBlock from "@/assets/ColorBlock";
import Chip from "@/assets/Chip";
import Test from "@/assets/images/concerto_demo2.png";
import LOADING from "@/assets/images/concerto_loading.png";
import HOME from "@/assets/images/concerto_home.png";
import RESULTS from "@/assets/images/concerto_results.png";
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
                <FadeInElement width={50}>
                    <div className={styles.project_description_tile}>
                        <div>
                            concerto
                            <div className={styles.chips}>
                                {[
                                    "React",
                                    "JavaScript",
                                    "Figma",
                                    "REST APIs",
                                ].map((text, index) => {
                                    return <Chip key={index}>{text}</Chip>;
                                })}
                            </div>
                        </div>
                        <div style={{ fontSize: 24, marginTop: 16 }}>
                            Concerto is a project designed to ease the struggles
                            faced by many when finding concerts and events for
                            their favorite musical artists. While Spotify gives
                            infrequent local recommendations and TicketMaster
                            allows you to search for a single artist, neither
                            process is efficient. Concerto allows a user to find
                            all concerts from all artists on a given Spotify
                            playlist and then filter the results to be exactly
                            what fits their schedule, budget, tastes, or
                            location.
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
                                <div style={{ fontFamily: "Raleway-Bold" }}>
                                    Raleway Bold
                                </div>
                                <div style={{ fontFamily: "Raleway-Semibold" }}>
                                    Raleway Semibold
                                </div>
                                <div style={{ fontFamily: "Raleway-Regular" }}>
                                    Raleway Regular
                                </div>
                                <div style={{ fontFamily: "Raleway-Light" }}>
                                    Raleway Light
                                </div>
                                <div
                                    style={{
                                        fontFamily: "SourceSerif4-Medium",
                                    }}
                                >
                                    SourceSerif4 Medium
                                </div>
                            </div>
                            <div className={styles.color_block_tile}>
                                <ColorBlock
                                    colors={[
                                        "#0d1014",
                                        "#1b2024",
                                        "#757575",
                                        "#e2e2e2",
                                        "#fefefe",
                                        "#5339f8",
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
                                        "Reduce time spent finding concerts and events",
                                        "Provide improved filters for a more satisfying experience",
                                        "Develop a thematic yet clean UI which follows music-based themes while integrating smoothly into a Spotify user's UX expectations",
                                    ].map((goal, index) => {
                                        return (
                                            <div key={index}>
                                                {index + 1 + ". " + goal}
                                            </div>
                                        );
                                    })}
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
                                        return (
                                            <div key={index}>
                                                {index + 1 + ". " + goal}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInElement>
            </div>

            <div className={styles.row}>
                <FadeInElement width={100}>
                    <div className={styles.project_demo_image}>
                        <Image
                            src={HOME}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
            </div>
            <div className={styles.row}>
                <FadeInElement width={100}>
                    <div className={styles.project_highlight_image}>
                        <Image
                            src={LOADING}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
            </div>
            <div className={styles.row}>
                <FadeInElement width={100}>
                    <div className={styles.project_highlight_image}>
                        <Image
                            src={RESULTS}
                            alt="test"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </FadeInElement>
            </div>
        </div>
    );
}
