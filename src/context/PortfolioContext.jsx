import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider( {children} ) {

    const [version, setVersion] = useState(null);

    const chooseVersion = (value) => setVersion(value);
    const resetPortfolio = () => setVersion(null);

    return (
        <PortfolioContext.Provider value={ {version, chooseVersion, resetPortfolio} }>
            {children}
        </PortfolioContext.Provider>
    );

}

export const usePortfolio = () => useContext(PortfolioContext);