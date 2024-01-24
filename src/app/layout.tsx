import Link from "next/link";
import styles from "@/app/app.module.css";
import "@/app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div
                    style={{
                        width: "100%",
                        backgroundColor: "#0d1014",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            paddingRight: 16,
                            paddingLeft: 16,
                            marginTop: 32,
                            marginRight: 16,
                            marginLeft: 16,
                            fontSize: 24,
                            fontFamily: "Optician-Sans",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "right",
                        }}
                    >
                        <Link href="/">
                            <div className={styles.header}>
                                <div>
                                    <div
                                        style={{
                                            fontSize: 16,
                                            textAlign: "right",
                                        }}
                                    >
                                        01
                                    </div>
                                    Home
                                </div>
                            </div>
                        </Link>

                        <Link href="/#projects">
                            <div className={styles.header}>
                                <div>
                                    <div
                                        style={{
                                            fontSize: 16,
                                            textAlign: "right",
                                        }}
                                    >
                                        02
                                    </div>
                                    Projects
                                </div>
                            </div>
                        </Link>
                        <Link href="/#contact">
                            <div className={styles.header}>
                                <div>
                                    <div
                                        style={{
                                            fontSize: 16,
                                            textAlign: "right",
                                        }}
                                    >
                                        03
                                    </div>
                                    Contact
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div style={{ flex: 1, minHeight: "100vh" }}>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
