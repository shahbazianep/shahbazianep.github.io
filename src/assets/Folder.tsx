import styles from "@/app/app.module.css";
import { useState } from "react";

interface FolderProps {
    // children: React.ReactNode;
    tabs: number;
    titles: string[];
}

const Folder: React.FC<FolderProps> = ({ tabs, titles }) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className={styles.project_details}>
            <div className={styles.folder_gap}>
                {titles.map((title, index) => {
                    return (
                        <div
                            className={
                                index == activeTab
                                    ? styles.folder_label_active
                                    : styles.folder_label
                            }
                            key={index}
                            onMouseDown={() => {
                                setActiveTab(index);
                            }}
                            style={{
                                left: `${index * ((100 - 35) / (tabs - 1))}%`,
                                zIndex:
                                    index == activeTab
                                        ? tabs
                                        : -Math.abs(activeTab - index) + tabs,
                            }}
                        >
                            {title}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Folder;
