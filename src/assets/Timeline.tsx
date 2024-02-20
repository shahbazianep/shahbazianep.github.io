import { timelineData } from "@/assets/data";
import styles from "@/app/app.module.css";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import anime from "animejs";

type TimelineData = {
    company: string;
    subcompany: string | null;
    role: string;
    startDate: Date;
    endDate: Date;
    description: string;
};

function convertDate(startDate: Date, endDate: Date) {
    let tempDate = startDate.toLocaleString("default", { month: "short" });

    if (startDate.getFullYear() !== endDate.getFullYear()) {
        tempDate += " " + startDate.getFullYear();
    }
    tempDate +=
        " - " +
        endDate.toLocaleString("default", { month: "short" }) +
        " " +
        endDate.getFullYear();
    return tempDate;
}
// const fadeCircles = anime({
//     targets: "#circle",
//     backgroundColor: [
//         { value: "#9077e1", duration: 2000 },
//         { value: "#fff", duration: 4000 },
//     ],
//     loop: true,
//     delay: anime.stagger(3200),
//     easing: "easeInOutExpo",
// });
// const fadeDates = anime({
//     targets: "#date",
//     opacity: [
//         { value: 1, duration: 2000 },
//         { value: 0, duration: 4000 },
//     ],
//     loop: true,
//     delay: anime.stagger(3200),
//     easing: "easeInOutExpo",
// });

function TimelineComponent({ data }: { data: TimelineData }) {
    useEffect(() => {
        const fadeCircles = anime({
            targets: "#circle",
            backgroundColor: [
                { value: "#9077e1", duration: 2000 },
                { value: "#fff", duration: 4000 },
            ],
            loop: true,
            delay: anime.stagger(3200),
            easing: "easeInOutExpo",
            autoplay: true,
        });
        const fadeDates = anime({
            targets: "#date",
            opacity: [
                { value: 1, duration: 2000 },
                { value: 0, duration: 4000 },
            ],
            loop: true,
            delay: anime.stagger(3200),
            easing: "easeInOutExpo",
            autoplay: true,
        });
    }, []);

    return (
        <div className={styles.timelineElement}>
            <div
                className={styles.elementContainer}
                // onMouseEnter={() => {
                //     // fadeCircles.restart();
                //     // fadeDates.restart();
                //     fadeCircles.pause();
                //     fadeDates.pause();
                // }}
                // onMouseLeave={() => {
                //     fadeCircles.play();
                //     fadeDates.play();
                // }}
            >
                <div style={{ fontFamily: "WorkSans-SemiBold" }}>
                    {data.company}
                    {data.subcompany ? " | " + data.subcompany : ""}
                </div>
                <div
                    style={{
                        fontFamily: "WorkSans-Regular",
                        color: "#888888",
                    }}
                >
                    {data.role}
                </div>
                {/* <div style={{ fontSize: 16 }}>{data.description}</div> */}
                <div className={styles.date} id="date">
                    {convertDate(data.startDate, data.endDate)}
                </div>
                <span className={styles.circle} id="circle" />
            </div>
        </div>
    );
}

export default function Timeline() {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
            }}
        >
            <div className={styles.timeline}>
                <div className={styles.timelineContainer}>
                    <div className={styles.startCircle} />
                    {timelineData.map((data: TimelineData, i: number) => {
                        return <TimelineComponent data={data} key={i} />;
                    })}
                    <div className={styles.endCircle} />
                </div>
            </div>
        </div>
    );
}
