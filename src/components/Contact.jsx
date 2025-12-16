import { usePortfolio } from "../context/PortfolioContext";

function Contact() {
    const { closeWindow } = usePortfolio();

    return (
        <section className="window contact-window">
            <div className="title-bar">
                <div className="title-bar-text">New Message</div>
                <div className="title-bar-controls">
                <button aria-label="Close" onClick={closeWindow} />
                </div>
            </div>

            <div className="window-body">
                <form className="email-form">
                <label>
                    To:
                    <input type="email" value="yarlinlynn@gmail.com" disabled />
                </label>

                <label>
                    From:
                    <input type="email" placeholder="your@email.com" />
                </label>

                <label className="message">
                    Message:
                    <textarea></textarea>
                </label>

                <div className="actions">
                    <button type="submit">Send</button>
                    <button type="button" onClick={closeWindow}>
                    Cancel
                    </button>
                </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;