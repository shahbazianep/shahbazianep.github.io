"use client";

import Link from "next/link";
import styles from "@/app/app.module.css";
import "@/app/globals.css";
import { PiSunThin } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import anime from "animejs";
import { DarkModeContext } from "@/contexts/DarkModeContext";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--color-background",
            darkMode ? "#0d1014" : "#dde4ff"
        );
        document.documentElement.style.setProperty(
            "--color-foreground",
            darkMode ? "#1b2024" : "#f8faff"
        );
        document.documentElement.style.setProperty(
            "--color-text",
            darkMode ? "#f8faff" : "#0d1014"
        );
        document.documentElement.style.setProperty(
            "--color-accent",
            darkMode ? "#bbb" : "#888"
        );
        document.documentElement.style.setProperty(
            "--gradient",
            darkMode
                ? "linear-gradient(90deg,rgba(27, 32, 36, 1) 0%,rgba(37, 31, 57, 1) 100%)"
                : "linear-gradient(90deg, rgba(187, 197, 253, 1)0%,rgba(242,244,255, 1) 100%)"
        );
        document.documentElement.style.setProperty(
            "--image-overlay",
            darkMode ? "rgba(27, 32, 36, 0.5)" : "rgba(242, 244, 255, 0.3)"
        );
    }, [darkMode]);

    return (
        <html lang="en">
            <body>
                <div className={styles.background}>
                    <div className={styles.header_container}>
                        <div
                            className={styles.sun_button}
                            onMouseDown={() => {
                                setDarkMode(!darkMode);
                            }}
                        >
                            <div className={styles.pulse}></div>
                            <PiSunThin size={40} />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Link href="/">
                                <div className={styles.header}>
                                    <div>
                                        <div className={styles.header_label}>
                                            01
                                        </div>
                                        Home
                                    </div>
                                </div>
                            </Link>

                            <Link href="/#projects">
                                <div className={styles.header}>
                                    <div>
                                        <div className={styles.header_label}>
                                            02
                                        </div>
                                        Projects
                                    </div>
                                </div>
                            </Link>
                            <Link href="/#contact">
                                <div className={styles.header}>
                                    <div>
                                        <div className={styles.header_label}>
                                            03
                                        </div>
                                        Contact
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
                        <div
                            style={{
                                flex: 1,
                                minHeight: "100vh",
                                width: "100%",
                            }}
                        >
                            {children}
                        </div>
                    </DarkModeContext.Provider>
                </div>
            </body>
        </html>
    );
}
