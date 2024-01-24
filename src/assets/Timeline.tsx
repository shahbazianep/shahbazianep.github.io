import { timelineData } from "@/assets/data";
import styles from "@/app/app.module.css";

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

function TimelineComponent({ data }: { data: TimelineData }) {
    return (
        <div className={styles.timelineElement}>
            <div className={styles.elementContainer}>
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
                <div className={styles.date}>
                    {convertDate(data.startDate, data.endDate)}
                </div>
                <span className={styles.circle} />
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
