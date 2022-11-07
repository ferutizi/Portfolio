import { useState, createContext } from "react";

const ThemeContext = createContext();

const initialTheme = 'dark';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e) => {
        if(e.target.value === 'dark'){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const data = {theme, handleTheme};

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    );
}

export {ThemeProvider};
export default ThemeContext;