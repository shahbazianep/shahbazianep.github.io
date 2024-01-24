import styles from "@/app/app.module.css";

export default function ColorBlock({ colors }: { colors: Array<string> }) {
    function getContrastColor(bgColor: string) {
        // Convert the hex color to RGB
        const rgb = parseInt(bgColor.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;

        // Calculate the relative luminance (per ITU-R BT.709)
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        // Use white text for dark backgrounds and black text for light backgrounds
        return luminance > 128 ? "#0d1014" : "#ffffff";
    }

    return (
        <div
            style={{
                flexDirection: "column", // Change to column to stack rows
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "space-evenly",
                borderRadius: 12,
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    display: "flex",
                    height: "100%",
                }}
            >
                {colors
                    .slice(0, Math.ceil(colors.length / 3))
                    .map((color, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: color,
                                color: getContrastColor(color),
                            }}
                            className={styles.color_block}
                        >
                            <span className={styles.color_text}>{color}</span>
                        </div>
                    ))}
            </div>
            <div
                style={{
                    display: "flex",
                    height: "100%",
                }}
            >
                {colors
                    .slice(
                        Math.ceil(colors.length / 3),
                        Math.ceil((2 * colors.length) / 3)
                    )
                    .map((color, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: color,
                                color: getContrastColor(color),
                            }}
                            className={styles.color_block}
                        >
                            <span className={styles.color_text}>{color}</span>
                        </div>
                    ))}
            </div>
            <div
                style={{
                    display: "flex",
                    height: "100%",
                }}
            >
                {colors
                    .slice(Math.ceil((2 * colors.length) / 3), colors.length)
                    .map((color, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: color,
                                color: getContrastColor(color),
                            }}
                            className={styles.color_block}
                        >
                            <span className={styles.color_text}>{color}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
}
