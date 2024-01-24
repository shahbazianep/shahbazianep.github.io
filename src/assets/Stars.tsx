import {
    MdOutlineStar,
    MdOutlineStarHalf,
    MdOutlineStarBorder,
} from "react-icons/md";

import styles from "@/app/app.module.css";

export default function Stars({
    children,
    rating,
}: {
    children: string;
    rating: number;
}) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<MdOutlineStar key={i} />);
        } else if (i - 0.5 === rating) {
            stars.push(<MdOutlineStarHalf key={i} />);
        } else {
            stars.push(<MdOutlineStarBorder key={i} />);
        }
    }

    return (
        <div className={styles.stars}>
            {children}
            <div>{stars}</div>
        </div>
    );
}
