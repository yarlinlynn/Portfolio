import { usePortfolio } from "./PortfolioContext";

import Contact from "../components/Contact";

function WindowManager() {
    const { activeWindow } = usePortfolio();

    if (!activeWindow) return null;

    return (
        <div>
            { activeWindow === "contact" &&
                <Contact></Contact>
            }
        </div>
    )
}

export default WindowManager