import { InView } from "react-intersection-observer";
import styles from "@/app/app.module.css";

interface FadeInElementProps {
    children: React.ReactNode;
    width: number;
}

const FadeInElement: React.FC<FadeInElementProps> = ({ children, width }) => {
    return (
        <InView triggerOnce threshold={0.1}>
            {({ inView, ref, entry }) => (
                <div
                    ref={ref}
                    className={
                        inView
                            ? `${styles.fadeInSectionVisible} ${
                                  styles[`width${width}`]
                              }`
                            : `${styles.fadeInSectionInvisible} ${
                                  styles[`width${width}`]
                              }`
                    }
                >
                    {children}
                </div>
            )}
        </InView>
    );
};

export default FadeInElement;
