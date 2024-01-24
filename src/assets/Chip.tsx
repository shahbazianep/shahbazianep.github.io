import styles from "@/app/app.module.css";

export default function Chip({ children }: { children: string }) {
    return <div className={styles.chip}>{children}</div>;
}
