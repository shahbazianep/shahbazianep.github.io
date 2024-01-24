import styles from "@/app/app.module.css";
import Link from "next/link";
import { FaLinkedinIn, FaSpotify } from "react-icons/fa";
import { BiLogoGithub, BiLogoInstagramAlt } from "react-icons/bi";

export default function Socials() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 200,
            }}
        >
            <Link
                href="https://github.com/shahbazianep"
                passHref={true}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.social_icon_wrapper}>
                    <BiLogoGithub size={35} className={styles.social_icon} />
                </div>
            </Link>
            <Link
                href="https://www.linkedin.com/in/ethanshahbazian/"
                passHref={true}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.social_icon_wrapper}>
                    <FaLinkedinIn size={20} className={styles.social_icon} />
                </div>
            </Link>
            <Link
                href="https://open.spotify.com/user/eshah22"
                passHref={true}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.social_icon_wrapper}>
                    <FaSpotify size={25} className={styles.social_icon} />
                </div>
            </Link>

            <Link
                href="https://www.instagram.com/eshah.224/"
                passHref={true}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.social_icon_wrapper}>
                    <BiLogoInstagramAlt
                        size={30}
                        className={styles.social_icon}
                    />
                </div>
            </Link>
        </div>
    );
}
