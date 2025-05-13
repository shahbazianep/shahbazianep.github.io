"use client";

import Chip from "@/assets/Chip";
import Image from "next/image";
import styles from "@/app/app.module.css";
import FadeInElement from "@/assets/FadeInElement";

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
                <div className={styles.development_tile}>
                    <div style={{ width: "100%", height: "100%" }}>
                        This page is currently under development. Please check
                        again later!
                    </div>
                </div>
            </div>
        </div>
    );
}
