"use client";

import ColorBlock from "@/assets/ColorBlock";
import Chip from "@/assets/Chip";
import Image from "next/image";
import styles from "@/app/app.module.css";
import { BiLogoGithub } from "react-icons/bi";

export default function Page() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 16,
            }}
        >
            <div className={styles.project_page}>
                <div
                    style={{
                        display: "grid",
                        gap: 24,
                        gridColumn: "span 2",
                        gridRow: "span 1",
                    }}
                >
                    <div className={styles.project_description_tile}>
                        <div>
                            <div className={styles.title}>nanika</div>
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
                        </div>

                        <div className={styles.subtext}>
                            Nanika is a mobile application designed to improve
                            mental health by leveraging the principle of
                            emotional contagion. It allows users to securely log
                            and track their emotions over time while providing
                            an anonymous, summarized view into a their
                            friends&apos; emotional states. Users can join and
                            create clusters which enable the emotional
                            contagion, helping bias their moods towards more
                            positive emotions over time.
                        </div>
                        <div className={styles.inverse_corner}>
                            <div className={styles.button}>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 24,
                                    }}
                                >
                                    <BiLogoGithub size={48} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.project_details_tile}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "100%",
                                    border: "2px solid #FFF",
                                    width: 64,
                                    height: 64,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 32,
                                }}
                            >
                                1
                            </div>
                            Goals
                        </div>
                        <div style={{ fontSize: 20 }}>
                            Provide journaling, anonymous social interaction,
                            and mood tracking capabilities to improve the mental
                            health of its users through the phenomenon of social
                            contagion.
                        </div>
                    </div>
                    <div className={styles.project_details_tile}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "100%",
                                    border: "2px solid #FFF",
                                    width: 64,
                                    height: 64,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 32,
                                }}
                            >
                                2
                            </div>
                            Design
                        </div>
                        <div style={{ fontSize: 20 }}>
                            Emphasis placed on soft pastel colors and simple
                            button-based UX to minimize time spent and simplify
                            emotions in order to more effectively enable social
                            contagion.
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "grid",
                        gap: 24,
                        gridColumn: "3",
                        gridRow: "span 2",
                        gridTemplateRows: "auto 1fr 1fr",
                    }}
                >
                    <div className={styles.project_image}>
                        <Image
                            src="/images/me.jpg"
                            alt="Personal picture"
                            style={{
                                objectFit: "cover",
                            }}
                            height={1000}
                            width={500}
                            priority
                        />
                    </div>
                    <div className={styles.project_details_tile}>
                        <span style={{ fontFamily: "Optician-Sans" }}>
                            Optician Sans
                        </span>
                        <span style={{ fontFamily: "TenorSans-Regular" }}>
                            TenorSans Regular
                        </span>
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
                    <div className={styles.project_details_tile}>
                        <Image
                            src="/images/nanika_cover.png"
                            alt="Nanika Cover Image"
                            style={{
                                objectFit: "contain",
                                padding: 36,
                            }}
                            fill
                            priority
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "3fr 5fr",
                        gridTemplateRows: "3fr 2fr",
                        gap: 24,
                        gridColumn: "span 2",
                        gridRow: "span 1",
                    }}
                >
                    <div
                        className={styles.project_tile_video_mobile}
                        style={{
                            background:
                                "radial-gradient(at 15.605455662573627% 92.38674496644296%, #3a3a4b 0px, transparent 50%), radial-gradient(at 31.508208798879984% 69.00866890380313%, #191924 0px, transparent 50%), radial-gradient(at 81.04598848011749% 20.239093959731544%, #2b2b36 0px, transparent 50%), radial-gradient(at 78.51280656459964% 15.541107382550335%, #2b2b36 0px, transparent 50%) #000000",
                        }}
                    >
                        <div className={styles.project_demo_video}>
                            <video autoPlay loop muted playsInline>
                                <source
                                    src="/nanika_recording.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div
                        className={styles.project_details_tile}
                        style={{
                            background:
                                "radial-gradient(at 15.605455662573627% 92.38674496644296%, #3a3a4b 0px, transparent 50%), radial-gradient(at 50.78853782254345% 79.2994966442953%, #191924 0px, transparent 50%), radial-gradient(at 48.88865138590507% 71.91694630872483%, #2b2b36 0px, transparent 50%), radial-gradient(at 86.67528162571266% 87.35318791946308%, #2b2b36 0px, transparent 50%) #000000",
                        }}
                    >
                        <Image
                            src="/images/nanika_demo.png"
                            alt="Nanika Demo Image"
                            style={{
                                objectFit: "contain",
                            }}
                            fill
                            priority
                        />
                    </div>
                    <div
                        className={styles.project_details_tile}
                        style={{
                            justifyContent: "center",
                            fontSize: 24,
                            gridColumn: 2,
                            gridRow: 2,
                        }}
                    >
                        a gentle reminder that no matter what you feel, you are
                        not alone
                    </div>
                </div>
            </div>
        </div>
    );
}
