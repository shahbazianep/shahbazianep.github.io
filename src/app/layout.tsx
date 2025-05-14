"use client";

import Link from "next/link";
import styles from "@/app/app.module.css";
import "@/app/globals.css";
import { useEffect, useState } from "react";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import { Head } from "next/document";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--color-background",
            darkMode ? "#0d1014" : "#dde4ff"
        );
        document.documentElement.style.setProperty(
            "--color-foreground",
            darkMode ? "#1F2026" : "#f8faff"
        );
        document.documentElement.style.setProperty(
            "--color-foreground2",
            darkMode ? "#2C2C3B" : "#f8faff"
        );
        document.documentElement.style.setProperty(
            "--color-text",
            darkMode ? "#f8faff" : "#0d1014"
        );
        document.documentElement.style.setProperty(
            "--color-accent",
            darkMode ? "#d0ccdc" : "#d0ccdc"
        );
        document.documentElement.style.setProperty(
            "--gradient",
            darkMode
                ? "linear-gradient(90deg,rgba(37, 31, 57, 1) 0%,rgba(27, 32, 36, 1) 100%)"
                : "linear-gradient(90deg, rgba(187, 197, 253, 1)0%,rgba(242,244,255, 1) 100%)"
        );
        document.documentElement.style.setProperty(
            "--image-overlay",
            darkMode ? "rgba(27, 32, 36, 0.5)" : "rgba(242, 244, 255, 0.3)"
        );
    }, [darkMode]);

    return (
        <html lang="en">
            <head>
                <link
                    rel="preload"
                    href="/fonts/WorkSans-Light.ttf"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/WorkSans-Regular.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/WorkSans-SemiBold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
            </head>
            <body>
                <div className={styles.background}>
                    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
                        <div className={styles.row}>
                            <div className={styles.header_container}>
                                <Link href="/">
                                    <div className={styles.header}>Home</div>
                                </Link>
                                <Link href="/#projects">
                                    <div className={styles.header}>
                                        Projects
                                    </div>
                                </Link>
                                <Link href="/#contact">
                                    <div className={styles.header}>Contact</div>
                                </Link>
                            </div>
                        </div>
                        <div
                            style={{
                                flex: 1,
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
