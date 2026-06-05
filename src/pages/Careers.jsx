import React, { useState } from "react";

const POSITIONS = [
    {
        id: "pos-quant-eng",
        title: "QUANTUM INTERFACE ENGINEER",
        loc: "Sector 9 (Mohali Base)",
        comp: "140,000 Credits // Annum",
        department: "Bridge Systems Division",
        desc: "Responsible for designing and deploying high-performance Three.js WebGL rendering pipelines, custom vertex/fragment shaders, and interactive navigation elements to overlay cockpit windshields.",
        requirements: ["Advanced proficiency in GLSL & GPU programming", "Experience with fluid mechanics or vector simulations", "Ability to work under high-gravity environments"]
    },
    {
        id: "pos-net-arch",
        title: "SUBSPACE NETWORK ARCHITECT",
        loc: "Remote (Orion Arm Sector 3)",
        comp: "165,000 Credits // Annum",
        department: "Distributed Telemetry",
        desc: "Design and implement low-latency data syncing routines that run across multi-node quantum networks. You will solve relativistic time-dilation synchronization errors between ground control and exploring vessels.",
        requirements: ["Mastery of network latency optimization", "Familiarity with quantum entanglement telecommunications", "Experience writing self-healing recovery algorithms"]
    },
    {
        id: "pos-holo-ux",
        title: "HOLOGRAPHIC UX DESIGNER",
        loc: "Sector 9 (Mohali Base)",
        comp: "120,000 Credits // Annum",
        department: "Visual Command division",
        desc: "Craft the visual aesthetics of the bridge control arrays. You will build glassmorphic UI models, spatial gesture controls, and liquid-morph SVG layouts that minimize cognitive stress during combat maneuvers.",
        requirements: ["Strong portfolio of 3D spatial user interfaces", "Proficiency in motion design (GSAP, CSS physics)", "Understanding of pilot cognitive load parameters"]
    }
];

export default function Careers() {
    const [activeJob, setActiveJob] = useState(null);
    const [callsign, setCallsign] = useState("");
    const [score, setScore] = useState(85);
    const [applied, setApplied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [appLogs, setAppLogs] = useState([]);

    const handleApply = (e) => {
        e.preventDefault();
        if (!callsign) return;

        setLoading(true);
        setAppLogs(["[SYS] ANALYZING PILOT REGISTRY INDEX..."]);

        const logs = [
            { time: 500, log: `[DATA] Pilot identified: Callsign ${callsign.toUpperCase()}` },
            { time: 1100, log: `[COGNITION] Evaluating cognitive aptitude score: ${score}/100` },
            { time: 1800, log: `[SECURITY] Verifying subspace telemetry clearance level...` },
            { time: 2400, log: `[SUCCESS] Profile verified. Synaptic profile matches parameters.` },
            { time: 3000, log: `[COMPLETE] Application bundle compiled and routed to Command Deck.` }
        ];

        logs.forEach((step) => {
            setTimeout(() => {
                setAppLogs((prev) => [...prev, step.log]);
                if (step.log.includes("[COMPLETE]")) {
                    setLoading(false);
                    setApplied(true);
                }
            }, step.time);
        });
    };

    const closePortal = () => {
        setActiveJob(null);
        setApplied(false);
        setCallsign("");
        setAppLogs([]);
    };

    return (
        <div className="page-wrapper">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Crew Registry</h1>
                    <p className="page-subtitle">ACTIVE RECRUITMENT // ORBITAL & DEEP SPACE STATIONS</p>
                </div>
                <div style={{ textAlign: "right" }}>
                    <span className="hud-label">OPEN VACANCIES</span>
                    <div className="hud-value hud-accent">3 ROLES ACTIVE</div>
                </div>
            </header>

            {/* List of positions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {POSITIONS.map((job) => (
                    <div key={job.id} className="glass-panel glowing-cyan" style={{ border: "1px solid rgba(0, 240, 255, 0.2)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }} className="job-header">
                            <div>
                                <h2 style={{ fontSize: "1.8rem", color: "#edf1ed" }}>{job.title}</h2>
                                <span style={{ color: "#00f0ff", fontFamily: "font1", fontSize: "0.75rem" }}>
                                    {job.department} // {job.loc}
                                </span>
                            </div>
                            <div style={{ textAlign: "right" }} className="job-meta">
                                <span className="hud-label">ESTIMATED COMPENSATION</span>
                                <div style={{ fontSize: "1rem", color: "#edf1ed", fontFamily: "font2" }}>{job.comp}</div>
                            </div>
                        </div>

                        <p style={{
                            fontSize: "0.85rem",
                            textTransform: "none",
                            lineHeight: "1.5",
                            color: "rgba(237, 241, 237, 0.75)",
                            marginBottom: "1.5rem"
                        }}>
                            {job.desc}
                        </p>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <span className="hud-label">QUALIFICATION PARAMETERS</span>
                            <ul style={{
                                paddingLeft: "1.2rem",
                                color: "rgba(237, 241, 237, 0.7)",
                                fontSize: "0.8rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.3rem",
                                marginTop: "0.5rem"
                            }}>
                                {job.requirements.map((req, idx) => (
                                    <li key={idx} style={{ listStyleType: "square" }}>{req}</li>
                                ))}
                            </ul>
                        </div>

                        <button className="sci-fi-button" onClick={() => setActiveJob(job)}>
                            [INITIATE APPLICATION]
                        </button>
                    </div>
                ))}
            </div>

            {/* Application Modal Overlay */}
            {activeJob && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 100 + "%",
                    height: 100 + "svh",
                    background: "rgba(5, 5, 10, 0.85)",
                    backdropFilter: "blur(8px)",
                    zIndex: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    pointerEvents: "all"
                }}>
                    <div className="glass-panel glowing-purple" style={{
                        maxWidth: "600px",
                        width: "100%",
                        border: "1px solid rgba(208, 0, 255, 0.4)",
                        boxShadow: "0 0 30px rgba(208, 0, 255, 0.3)"
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(208, 0, 255, 0.2)", paddingBottom: "1rem", marginBottom: "1.5rem" }}>
                            <div>
                                <span className="hud-label">APPLICATION PORTAL</span>
                                <div style={{ fontSize: "1.2rem", color: "#edf1ed" }}>{activeJob.title}</div>
                            </div>
                            <button
                                onClick={closePortal}
                                style={{
                                    background: "transparent",
                                    color: "#d000ff",
                                    border: "none",
                                    fontSize: "1.5rem",
                                    cursor: "pointer"
                                }}
                            >
                                ×
                            </button>
                        </div>

                        {applied ? (
                            <div style={{ textAlign: "center", padding: "1.5rem" }}>
                                <div style={{ fontSize: "1.8rem", color: "#1bdd1b", marginBottom: "1rem" }}>REGISTRATION COMPLETE</div>
                                <p style={{ fontSize: "0.8rem", textTransform: "none", color: "rgba(237,237,237,0.8)", marginBottom: "1.5rem" }}>
                                    Your profile matrix has been added to our crew ledger. We will reach out to you once the Sector 9 station synchronizes orbital cycles.
                                </p>
                                <button className="sci-fi-button" onClick={closePortal} style={{ borderColor: "#1bdd1b", color: "#1bdd1b" }}>
                                    [DISCONNECT LINK]
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleApply} className="sci-fi-form">
                                <div className="form-group">
                                    <label className="hud-label">[PILOT CALLSIGN] / ALIAS</label>
                                    <input
                                        type="text"
                                        className="sci-fi-input"
                                        style={{ borderColor: "rgba(208,0,255,0.3)" }}
                                        value={callsign}
                                        onChange={(e) => setCallsign(e.target.value)}
                                        placeholder="e.g. Maverick, Neo, Cypher..."
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="form-group">
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <label className="hud-label">[COGNITIVE COMPATIBILITY INDEX]</label>
                                        <span style={{ fontSize: "0.8rem", color: "#d000ff", fontFamily: "font2" }}>{score}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="50"
                                        max="100"
                                        value={score}
                                        onChange={(e) => setScore(parseInt(e.target.value))}
                                        style={{
                                            accentColor: "#d000ff",
                                            width: "100%",
                                            cursor: "pointer",
                                            background: "rgba(208, 0, 255, 0.2)",
                                            height: "6px",
                                            borderRadius: "3px"
                                        }}
                                        disabled={loading}
                                    />
                                </div>

                                {appLogs.length > 0 && (
                                    <div style={{
                                        background: "rgba(0,0,0,0.5)",
                                        border: "1px solid rgba(208,0,255,0.2)",
                                        padding: "1rem",
                                        borderRadius: "2px",
                                        fontFamily: "font1",
                                        fontSize: "0.75rem",
                                        color: "rgba(237,237,237,0.8)",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.3rem"
                                    }}>
                                        {appLogs.map((log, idx) => (
                                            <div key={idx} style={{ textTransform: "none", color: log.includes("[SUCCESS]") || log.includes("[COMPLETE]") ? "#1bdd1b" : "#edf1ed" }}>
                                                {log}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                                    <button
                                        type="submit"
                                        className="sci-fi-button"
                                        style={{
                                            borderColor: "#d000ff",
                                            color: "#d000ff"
                                        }}
                                        disabled={loading}
                                    >
                                        {loading ? "COMPILE DATA..." : "[TRANSMIT PROFILE MEMBRANE]"}
                                    </button>
                                    <button
                                        type="button"
                                        className="sci-fi-button"
                                        style={{
                                            borderColor: "rgba(237,241,237,0.3)",
                                            color: "rgba(237,241,237,0.5)"
                                        }}
                                        onClick={closePortal}
                                        disabled={loading}
                                    >
                                        [CANCEL]
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
