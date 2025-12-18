import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider( {children} ) {

    const [version, setVersion] = useState(null); // either want a website or a developer
    const [activeWindow, setActiveWindow] = useState(null) //opens individual windows once clicked eg contact window
    const [startupWindow, setStartupWindow] = useState("welcome"); // start up window page

    const openWindow = (windowName) => setActiveWindow(windowName); // opens window when clicked
    const closeWindow = () => setActiveWindow(null); //closes window when clicked

    const chooseVersion = (value) => {
        setVersion(value);
        setStartupWindow("loading");
    }
    const resetPortfolio = () => {
        setVersion(null);
        setActiveWindow(null);
        setStartupWindow("welcome");
    }

    return (
        <PortfolioContext.Provider 
        value= { {
            version, 
            chooseVersion, 
            resetPortfolio,
            openWindow,
            activeWindow,
            closeWindow,
            startupWindow,
            setStartupWindow

        } }>
            {children}
        </PortfolioContext.Provider>
    );

}

export const usePortfolio = () => useContext(PortfolioContext);