import { createContext, useContext, useState } from "react";

const ScreenContext = createContext();

export function ScreenProvider( {children} ) {
    const [screen, setScreen] = useState("load"); // load -> login -> desktop

    return (
        <ScreenContext.Provider value = { {screen, setScreen} }>
            {children}
        </ScreenContext.Provider>
    )
}

export function useScreen() {
    return useContext(ScreenContext);
}