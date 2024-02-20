// DarkModeContext.tsx
import { createContext } from "react";

interface DarkModeContextType {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext<DarkModeContextType>({
    darkMode: true,
    setDarkMode: () => {},
});
