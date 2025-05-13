import styles from "@/app/app.module.css";
import Link from "next/link";
import { FaLinkedinIn, FaSpotify } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

const socials = [
    {
        name: "Github",
        link: "https://github.com/shahbazianep",
        icon: <BiLogoGithub size={35} className={styles.social_icon} />,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ethanshahbazian/",
        icon: <FaLinkedinIn size={26} className={styles.social_icon} />,
    },
    {
        name: "Leetcode",
        link: "https://leetcode.com/u/eshah22/",
        icon: <SiLeetcode size={25} className={styles.social_icon} />,
    },
    {
        name: "Spotify",
        link: "https://open.spotify.com/user/eshah22",
        icon: <FaSpotify size={27} className={styles.social_icon} />,
    },
];

export default function Socials() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flex: 1,
            }}
        >
            {socials.map((social) => (
                <div
                    // className={styles.social_icon_wrapper}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                        margin: "16px",
                    }}
                >
                    <Link
                        href={social.link}
                        passHref={true}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ width: "100%" }}
                    >
                        <div className={styles.social_icon_wrapper}>
                            {social.icon}
                            {social.name}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
