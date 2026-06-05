import React, { useState, useEffect, useRef } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("READY"); // READY, TRANSMITTING, SENT
    const [consoleLogs, setConsoleLogs] = useState(["// TERMINAL IN COLD STANDBY"]);
    const terminalRef = useRef(null);

    const addLog = (msg) => {
        setConsoleLogs((prev) => [...prev, msg]);
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [consoleLogs]);

    const handleTransmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            addLog("[ERROR] FAILED TO TRANSMIT: MISSING REQUIRED IDENTIFIERS");
            return;
        }

        setStatus("TRANSMITTING");
        setConsoleLogs(["[INIT] OPENING TRANSMISSION GATEWAY..."]);

        const logsSequence = [
            { time: 400, log: "[CONNECTING] Subspace relay ping: Ceres Orbital Base #4 - Online (8.4ms)" },
            { time: 900, log: `[CREDENTIALS] Resolving sender: ${name.toUpperCase()} <${email.toUpperCase()}>` },
            { time: 1500, log: "[ENCRYPTION] Packaging payload using 512-bit quantum tangent protocol..." },
            { time: 2200, log: "[BEAM COLLIMATOR] Charging tachyon sweep arrays at 84% power..." },
            { time: 2900, log: "[BROADCASTING] Transmitting payload beam at 12.4 PetaWatts..." },
            { time: 3600, log: "[SUCCESS] Sub-light wave packet verified. Handshake completed." },
            { time: 4200, log: "[COMPLETE] Cruise ground crew notified. Terminal connection closing." }
        ];

        logsSequence.forEach((step) => {
            setTimeout(() => {
                addLog(step.log);
                if (step.log.includes("[COMPLETE]")) {
                    setStatus("SENT");
                    setName("");
                    setEmail("");
                    setMessage("");
                }
            }, step.time);
        });
    };

    return (
        <div className="page-wrapper">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Subspace Console</h1>
                    <p className="page-subtitle">TRANSMISSION PORTAL // DEEP-SPACE RELAY CHANNELS</p>
                </div>
                <div style={{ textAlign: "right" }}>
                    <span className="hud-label">COIL TEMPERATURE</span>
                    <div className="hud-value hud-accent">304.5 K // STABLE</div>
                </div>
            </header>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "2.5rem",
                alignItems: "start"
            }} className="contact-content-grid">
                {/* Form Input Panel */}
                <div className="glass-panel glowing-cyan">
                    <h3 style={{ fontSize: "1.5rem", color: "#00f0ff", marginBottom: "1.5rem" }}>TRANSMIT MESSAGE</h3>

                    {status === "SENT" ? (
                        <div style={{ padding: "2rem", textAlign: "center", border: "1px dashed #1bdd1b", background: "rgba(27,221,27,0.05)" }}>
                            <div style={{ fontSize: "2rem", color: "#1bdd1b", marginBottom: "1rem" }}>TRANSMISSION COMPLETE</div>
                            <p style={{ fontSize: "0.8rem", textTransform: "none", color: "rgba(237,241,237,0.8)", marginBottom: "1.5rem" }}>
                                Your message package has successfully bypassed atmospheric scattering and reached our Sector 9 command array. Our crew will review the telemetry and establish a reverse channel.
                            </p>
                            <button className="sci-fi-button" onClick={() => { setStatus("READY"); setConsoleLogs(["// TERMINAL IN COLD STANDBY"]); }} style={{ borderColor: "#1bdd1b", color: "#1bdd1b" }}>
                                [OPEN NEW CHANNEL]
                            </button>
                        </div>
                    ) : (
                        <form className="sci-fi-form" onSubmit={handleTransmit}>
                            <div className="form-group">
                                <label className="hud-label">[SENDER IDENTIFIER] / FULL NAME</label>
                                <input
                                    type="text"
                                    className="sci-fi-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter identifier..."
                                    required
                                    disabled={status === "TRANSMITTING"}
                                />
                            </div>

                            <div className="form-group">
                                <label className="hud-label">[SUBSPACE COORDINATES] / EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    className="sci-fi-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter subspace freq (e.g. pilot@domain.com)..."
                                    required
                                    disabled={status === "TRANSMITTING"}
                                />
                            </div>

                            <div className="form-group">
                                <label className="hud-label">[COMMUNICATION PAYLOAD] / MESSAGE BODY</label>
                                <textarea
                                    className="sci-fi-textarea"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Enter communication telemetry..."
                                    required
                                    disabled={status === "TRANSMITTING"}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="sci-fi-button"
                                disabled={status === "TRANSMITTING"}
                                style={{
                                    borderColor: status === "TRANSMITTING" ? "rgba(0, 240, 255, 0.3)" : "#00f0ff",
                                    color: status === "TRANSMITTING" ? "rgba(0, 240, 255, 0.4)" : "#00f0ff",
                                    cursor: status === "TRANSMITTING" ? "not-allowed" : "pointer"
                                }}
                            >
                                {status === "TRANSMITTING" ? "BROADCASTING PULSE..." : "[TRANSMIT DATA PACKET]"}
                            </button>
                        </form>
                    )}
                </div>

                {/* Console Terminal Output */}
                <div style={{ position: "sticky", top: "8rem" }}>
                    <div className="glass-panel glowing-purple" style={{ border: "1px solid rgba(208, 0, 255, 0.25)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                            <span className="hud-label">COMS MONITOR</span>
                            <span style={{ color: "#d000ff", fontSize: "0.7rem", fontFamily: "font1" }}>BANDWIDTH: 4.8 TB/s</span>
                        </div>

                        <div
                            ref={terminalRef}
                            style={{
                                background: "rgba(0, 0, 0, 0.6)",
                                border: "1px solid rgba(208, 0, 255, 0.2)",
                                borderRadius: "2px",
                                padding: "1.2rem",
                                height: "280px",
                                overflowY: "auto",
                                fontFamily: "font1",
                                fontSize: "0.75rem",
                                color: "rgba(237, 241, 237, 0.8)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.4rem"
                            }}
                        >
                            {consoleLogs.map((log, index) => {
                                let logColor = "rgba(237, 241, 237, 0.8)";
                                if (log.includes("[ERROR]")) logColor = "#ff3b30";
                                if (log.includes("[SUCCESS]") || log.includes("[COMPLETE]")) logColor = "#1bdd1b";
                                if (log.includes("[CONNECTING]") || log.includes("[INIT]")) logColor = "#00f0ff";
                                if (log.includes("[ENCRYPTION]")) logColor = "#d000ff";

                                return (
                                    <div key={index} style={{ color: logColor, textTransform: "none", letterSpacing: "0.05em", lineBreak: "anywhere" }}>
                                        {log}
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            <div>
                                <span className="hud-label">SIGNAL NOISE</span>
                                <div style={{ fontSize: "0.9rem", color: "#edf1ed" }}>0.041 dB</div>
                            </div>
                            <div>
                                <span className="hud-label">ENCRYPTION PROTOCOL</span>
                                <div style={{ fontSize: "0.9rem", color: "#edf1ed" }}>AES-QA-512</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .contact-content-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}
