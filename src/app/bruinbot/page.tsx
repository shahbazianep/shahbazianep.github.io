"use client";

import Chip from "@/assets/Chip";
import styles from "@/app/app.module.css";
import FadeInElement from "@/assets/FadeInElement";
import Image from "next/image";

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

        // <div
        //     style={{
        //         width: "100%",
        //         height: "100%",
        //         display: "flex",
        //         flexDirection: "column",
        //         alignItems: "center",
        //         // marginLeft: "auto",
        //         // marginRight: "auto",
        //         marginBottom: 16,
        //     }}
        // >
        //     <div className={styles.project_page}>
        //         {/* <FadeInElement width={100}> */}
        //         <div className={styles.project_description_tile}>
        //             <div>
        //                 <div className={styles.title}>bruinbot</div>
        //                 <div className={styles.chips}>
        //                     {[
        //                         "React Native",
        //                         "Figma",
        //                         "JavaScript",
        //                         "Firebase",
        //                     ].map((text, index) => {
        //                         return <Chip key={index}>{text}</Chip>;
        //                     })}
        //                 </div>
        //             </div>

        //             <div className={styles.subtext}>
        //                 Nanika is a mobile application designed to improve
        //                 mental health by leveraging the principle of emotional
        //                 contagion. It allows users to securely log and track
        //                 their emotions over time while providing an anonymous,
        //                 summarized view into a their friends' emotional states.
        //                 Users can join and create clusters which enable the
        //                 emotional contagion, helping bias their moods towards
        //                 more positive emotions over time.
        //             </div>
        //             {/* <div className={styles.inverse_corner}>
        //                 <div className={styles.button}>
        //                     <a
        //                         href="https://www.google.com"
        //                         target="_blank"
        //                         rel="noopener noreferrer"
        //                         style={{
        //                             display: "flex",
        //                             alignItems: "center",
        //                             justifyContent: "center",
        //                             width: "100%",
        //                             height: "100%",
        //                             borderRadius: 24,
        //                         }}
        //                     >
        //                         <BiLogoGithub size={48} />
        //                     </a>
        //                 </div>
        //             </div> */}
        //         </div>
        //         {/* </FadeInElement> */}
        //         {/* <FadeInElement width={100}> */}
        //         <div className={styles.bruinbot_project_image}>
        //             {/* <Timeline /> */}
        //             <Image
        //                 src="/images/me.jpg"
        //                 alt="Personal picture"
        //                 style={{
        //                     objectFit: "cover",
        //                 }}
        //                 height={1000}
        //                 width={500}
        //                 priority
        //             />
        //         </div>
        //         {/* </FadeInElement> */}
        //         <Folder
        //             tabs={3}
        //             titles={["Problem", "Development", "Results"]}
        //         />
        //     </div>
        // </div>
        // <div
        //     style={{
        //         padding: 32,
        //         width: "100%",
        //         height: "100%",
        //         display: "flex",
        //         flexDirection: "column",
        //         fontFamily: "WorkSans-Regular",
        //         color: "#fff",
        //         maxWidth: 1600,
        //         marginLeft: "auto",
        //         marginRight: "auto",
        //     }}
        // >
        //     <div className={styles.project_row}>
        //         <FadeInElement width={50}>
        //             <div className={styles.project_description_tile}>
        //                 <div>
        //                     bruinbot
        //                     <div className={styles.chips}>
        //                         {[
        //                             "System Design",
        //                             "Python",
        //                             "Linux",
        //                             "Sensors & Signals",
        //                         ].map((text, index) => {
        //                             return <Chip key={index}>{text}</Chip>;
        //                         })}
        //                     </div>
        //                 </div>
        //                 <div style={{ fontSize: 24, marginTop: 16 }}>
        //                     Bruinbot is a UCLA DevX team of student engineers
        //                     and designers designing and creating an anonymous
        //                     rover system. This rover is intended to be provided
        //                     for free use by the school and local businesses for
        //                     food delivery, mail delivery, security, tours, and
        //                     more. I led the electrical team to design,
        //                     implement, and integrate several sensor systems on
        //                     the initial mechanical prototype. These systems
        //                     provide critical data that is used to provide the
        //                     rover with autonomy and independence.
        //                 </div>
        //             </div>
        //         </FadeInElement>

        //         <FadeInElement width={25}>
        //             <div className={styles.project_goals_tile}>
        //                 <div>Goals</div>
        //                 <div className={styles.list}>
        //                     {[
        //                         "Using provided specs and requirements for data type, data quality, robustness, and performance, choose parts for camera system, GPS system, and power system",
        //                         "Design and implement each of these subsystems using Python and our central computing system (RPi 4)",
        //                         "Integrate these systems with the existing mechanical skeleton",
        //                         "Provide accurate testing data to be used by autonomy and software teams in the development of mapping, computer vision, and obstacle avoidance algorithms",
        //                     ].map((goal, index) => {
        //                         return (
        //                             <div key={index}>
        //                                 {index + 1 + ". " + goal}
        //                             </div>
        //                         );
        //                     })}
        //                 </div>
        //             </div>
        //         </FadeInElement>
        //         <FadeInElement width={25}>
        //             <div className={styles.project_details_tile}>
        //                 <div>Results</div>
        //                 <div className={styles.list}>
        //                     {[
        //                         "Successful selection of parts that satisfy these 3 core subsystems and provide accurate signal collection under budget and integration constraints",
        //                         "Full integration and unit testing of each subsystem, as well as exploration of adjacent signal data",
        //                         "Power subsystem was successfully integrated while design considerations chose to separate other subsystems until further prototyping",
        //                         "Collection and testing of sample data in order to provide software and autonomy teams with more realistic data sets",
        //                     ].map((goal, index) => {
        //                         return (
        //                             <div key={index}>
        //                                 {index + 1 + ". " + goal}
        //                             </div>
        //                         );
        //                     })}
        //                 </div>
        //             </div>
        //         </FadeInElement>
        //     </div>
        // </div>
    );
}
