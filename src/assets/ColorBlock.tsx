import styles from "@/app/app.module.css";

export default function ColorBlock({ colors }: { colors: Array<string> }) {
    function getContrastColor(bgColor: string) {
        const rgb = parseInt(bgColor.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luminance > 128 ? "#0d1014" : "#ffffff";
    }

    const rows = colors.length % 3 == 0 ? 3 : 2;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                borderRadius: 12,
                overflow: "hidden",
                minHeight: rows * 40,
            }}
        >
            <div
                style={{
                    display: "flex",
                    height: colors.length % 3 == 0 ? "33.33%" : "50%",
                }}
            >
                {colors
                    .slice(
                        0,
                        Math.ceil(
                            colors.length / (colors.length % 3 === 0 ? 3 : 2)
                        )
                    )
                    .map((color, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: color,
                                color: getContrastColor(color),
                                width: "100%",
                                textAlign: "center",
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
                    height: colors.length % 3 == 0 ? "33.33%" : "50%",
                }}
            >
                {colors
                    .slice(
                        Math.ceil(
                            colors.length / (colors.length % 3 === 0 ? 3 : 2)
                        ),
                        Math.ceil(
                            (2 * colors.length) /
                                (colors.length % 3 === 0 ? 3 : 2)
                        )
                    )
                    .map((color, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: color,
                                color: getContrastColor(color),
                                width: "100%",
                                textAlign: "center",
                            }}
                            className={styles.color_block}
                        >
                            <span className={styles.color_text}>{color}</span>
                        </div>
                    ))}
            </div>
            {colors.length % 3 == 0 ? (
                <div
                    style={{
                        display: "flex",
                        height: colors.length % 3 == 0 ? "33.33%" : "0%",
                    }}
                >
                    {colors
                        .slice(
                            Math.ceil((2 * colors.length) / 3),
                            colors.length
                        )
                        .map((color, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: color,
                                    color: getContrastColor(color),
                                    width: "100%",
                                    textAlign: "center",
                                }}
                                className={styles.color_block}
                            >
                                <span className={styles.color_text}>
                                    {color}
                                </span>
                            </div>
                        ))}
                </div>
            ) : null}
        </div>
    );
}
