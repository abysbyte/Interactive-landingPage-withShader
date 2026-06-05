import React, { useState, useEffect, useRef } from "react";

export default function Projects() {
    const [syncStatus, setSyncStatus] = useState("READY"); // READY, SYNCING, COMPLETED
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState(["// SYSTEM READY FOR SYNCHRONIZATION SEQUENCE"]);
    const logContainerRef = useRef(null);

    const systemNodes = [
        { name: "Plasma Injectors", status: "OPERATIONAL", val: "94.2%", badge: "badge-operational" },
        { name: "Magnetic Coils", status: "STABLE", val: "880 Tesla", badge: "badge-operational" },
        { name: "Deuterium Core", status: "UNBALANCED", val: "CRITICAL", badge: "badge-critical" },
        { name: "Shield Grids", status: "INITIALIZING", val: "22.5%", badge: "badge-initializing" },
        { name: "Warp Converters", status: "OPERATIONAL", val: "100.0%", badge: "badge-operational" },
        { name: "Primary Cooling", status: "STABLE", val: "44.1°C", badge: "badge-operational" }
    ];

    const addLog = (msg) => {
        setLogs((prev) => [...prev, msg]);
    };

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [logs]);

    const handleSync = () => {
        if (syncStatus === "SYNCING") return;

        setSyncStatus("SYNCING");
        setProgress(0);
        setLogs(["[INIT] REACTOR CORE SYNCHRONIZATION SEQUENCE STARTED..."]);

        const sequence = [
            { time: 500, log: "[STAGE 1] Magnetic containment fields charging...", prog: 15 },
            { time: 1200, log: "[STAGE 1] Magnetization complete. Current strength: 920 Tesla.", prog: 30 },
            { time: 2000, log: "[STAGE 2] Injecting dilithium vapor streams...", prog: 55 },
            { time: 2800, log: "[STAGE 2] Subspace feedback loops established.", prog: 70 },
            { time: 3500, log: "[STAGE 3] Polarizing reactor coils (Phase Angle: 44.2°)...", prog: 85 },
            { time: 4200, log: "[SUCCESS] Deuterium core stabilized. Harmonic frequency locked.", prog: 100 },
            { time: 4800, log: "[COMPLETE] Reactor Core sync operational (SYS_STATUS: 1.000 STABLE)", prog: 100 }
        ];

        sequence.forEach((step) => {
            setTimeout(() => {
                addLog(step.log);
                setProgress(step.prog);
                if (step.prog === 100 && step.log.includes("[COMPLETE]")) {
                    setSyncStatus("COMPLETED");
                }
            }, step.time);
        });
    };

    return (
        <div className="page-wrapper">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Projects Control Deck</h1>
                    <p className="page-subtitle">TACTICAL ENGINEERING HUB // SUB-LIGHT CORE SYSTEMS</p>
                </div>
                <div style={{ textAlign: "right" }}>
                    <span className="hud-label">CODELINE OVERLAY</span>
                    <div className="hud-value hud-accent">SYS_ACTV_NODE_6</div>
                </div>
            </header>

            {/* Top Grid: System Nodes */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
                marginBottom: "3rem"
            }}>
                {systemNodes.map((node, index) => (
                    <div key={index} className="glass-panel glowing-cyan" style={{ padding: "1.5rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                            <span className="hud-label" style={{ fontSize: "0.6rem" }}>NODE_0{index + 1}</span>
                            <span className={`badge ${node.status === "UNBALANCED" && syncStatus === "COMPLETED" ? "badge-operational" : node.badge}`}>
                                {node.status === "UNBALANCED" && syncStatus === "COMPLETED" ? "STABLE" : node.status}
                            </span>
                        </div>
                        <div style={{ fontSize: "1.3rem", color: "#edf1ed", marginBottom: "0.5rem" }}>
                            {node.name}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <span className="hud-label">METRIC READOUT:</span>
                            <span className="hud-accent" style={{
                                fontFamily: "font2",
                                color: node.status === "UNBALANCED" && syncStatus === "COMPLETED" ? "#1bdd1b" : "",
                                textShadow: node.status === "UNBALANCED" && syncStatus === "COMPLETED" ? "0 0 5px rgba(27,221,27,0.5)" : ""
                            }}>
                                {node.status === "UNBALANCED" && syncStatus === "COMPLETED" ? "100.0%" : node.val}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section: Sync Terminal Dashboard */}
            <div className="glass-panel glowing-purple" style={{ border: "1px solid rgba(208, 0, 255, 0.2)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                    <div>
                        <h3 style={{ fontSize: "1.5rem", color: "#d000ff" }}>REACTOR CORE SYNCHRONIZATION</h3>
                        <p style={{ fontSize: "0.65rem", fontFamily: "font1", color: "rgba(237,241,237,0.5)", textTransform: "none" }}>
                            A synchronization routine is required when core integrity registers unbalanced readings.
                        </p>
                    </div>
                    <div>
                        <span className="hud-label">SYNC STATE:</span>
                        <div style={{
                            fontFamily: "font2",
                            color: syncStatus === "SYNCING" ? "#00f0ff" : syncStatus === "COMPLETED" ? "#1bdd1b" : "#d000ff",
                            textShadow: `0 0 5px ${syncStatus === "SYNCING" ? "rgba(0,240,255,0.5)" : syncStatus === "COMPLETED" ? "rgba(27,221,27,0.5)" : "rgba(208,0,255,0.5)"}`
                        }}>{syncStatus}</div>
                    </div>
                </div>

                {/* Progress bar */}
                <div style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span className="hud-label">ALIGNMENT PROGRESS</span>
                        <span style={{ fontFamily: "font2", color: "#edf1ed" }}>{progress}%</span>
                    </div>
                    <div style={{
                        width: "100%",
                        height: "10px",
                        background: "rgba(208, 0, 255, 0.1)",
                        border: "1px solid rgba(208, 0, 255, 0.3)",
                        borderRadius: "2px",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            width: `${progress}%`,
                            height: "100%",
                            background: syncStatus === "COMPLETED" ? "#1bdd1b" : "linear-gradient(90deg, #d000ff, #00f0ff)",
                            boxShadow: `0 0 10px ${syncStatus === "COMPLETED" ? "rgba(27,221,27,0.5)" : "rgba(0,240,255,0.5)"}`,
                            transition: "width 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)"
                        }}></div>
                    </div>
                </div>

                {/* Terminal Console */}
                <div
                    ref={logContainerRef}
                    style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        border: "1px solid rgba(208, 0, 255, 0.25)",
                        borderRadius: "2px",
                        padding: "1.5rem",
                        height: "180px",
                        overflowY: "auto",
                        fontFamily: "font1",
                        fontSize: "0.8rem",
                        color: "rgba(237, 241, 237, 0.85)",
                        marginBottom: "1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem"
                    }}
                >
                    {logs.map((log, index) => {
                        let color = "rgba(237, 241, 237, 0.85)";
                        if (log.includes("[SUCCESS]") || log.includes("[COMPLETE]")) color = "#1bdd1b";
                        if (log.includes("[INIT]") || log.includes("CHARGING")) color = "#00f0ff";
                        if (log.includes("[STAGE 3]")) color = "#d000ff";

                        return (
                            <div key={index} style={{ color, textTransform: "none", letterSpacing: "0.05em" }}>
                                {log}
                            </div>
                        );
                    })}
                </div>

                {/* Sync Button */}
                <button
                    className="sci-fi-button"
                    onClick={handleSync}
                    disabled={syncStatus === "SYNCING"}
                    style={{
                        borderColor: syncStatus === "SYNCING" ? "rgba(0,240,255,0.2)" : syncStatus === "COMPLETED" ? "#1bdd1b" : "#d000ff",
                        color: syncStatus === "SYNCING" ? "rgba(0,240,255,0.4)" : syncStatus === "COMPLETED" ? "#1bdd1b" : "#d000ff",
                        cursor: syncStatus === "SYNCING" ? "not-allowed" : "pointer",
                        boxShadow: syncStatus === "COMPLETED" ? "0 0 10px rgba(27,221,27,0.2)" : "none"
                    }}
                >
                    {syncStatus === "SYNCING" ? "SYNCING CORE..." : syncStatus === "COMPLETED" ? "[CORE ALIGNED]" : "[SYNCHRONIZE REACTOR CORE]"}
                </button>
            </div>
        </div>
    );
}
