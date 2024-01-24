// FadeInElement.tsx
import { useState, useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
import styles from "@/app/app.module.css"; // Create a CSS module for styling

interface FadeInElementProps {
    children: React.ReactNode;
    width: string;
}

const FadeInElement: React.FC<FadeInElementProps> = ({ children, width }) => {
    return (
        <InView triggerOnce threshold={0}>
            {({ inView, ref, entry }) => (
                <div
                    ref={ref}
                    className={
                        inView
                            ? styles.fadeInSectionVisible
                            : styles.fadeInSectionInvisible
                    }
                    style={{ width: width }}
                >
                    {children}
                </div>
            )}
        </InView>
    );
};

export default FadeInElement;
