import React from "react";

export default function About() {
    const pillars = [
        {
            title: "THE MISSION",
            desc: "To explore, define, and build the interfaces of the next age. We believe that communication between humans and machines should not feel separated by glass, but blended in fluid, high-dimensional space.",
            accent: "rgba(0, 240, 255, 0.15)",
            border: "#00f0ff"
        },
        {
            title: "THE TECHNOLOGY",
            desc: "Our systems run on custom WebGL render loops, mathematical fluid vector fields, and high-frequency shaders. We bypass standard browser limitations to render hyper-immersive visual portals.",
            accent: "rgba(208, 0, 255, 0.15)",
            border: "#d000ff"
        },
        {
            title: "THE CREW",
            desc: "An elite division of interface pilots, deep-space web architects, and warp field engineers working from orbital dry docks and ground-control bases in Sector 9, Mohali.",
            accent: "rgba(27, 221, 27, 0.15)",
            border: "#1bdd1b"
        }
    ];

    const timeline = [
        { year: "2088", event: "PROJECT FOUNDED", desc: "Cruise is established in low-orbit Ceres to design HUD systems for outer-rim mining fleets." },
        { year: "2102", event: "LIQUID PORTALS", desc: "First morphable SVG-liquid navigation membrane successfully deployed on flagship exploration vessels." },
        { year: "2115", event: "SECTOR 9 SHIELDING", desc: "Orbital laboratory in Mohali Sector 9 completes integration of Three.js fluid simulation with physical deflector controls." },
        { year: "2120", event: "DEEP SPACE SYNC", desc: "Successful telemetry linkage between Ceres control systems and outer-system explorers, maintaining zero lag across warp thresholds." }
    ];

    return (
        <div className="page-wrapper">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Mission Archives</h1>
                    <p className="page-subtitle">CRUISE OVERVIEW // PROTOCOL & HISTORICAL LOGS</p>
                </div>
                <div style={{ textAlign: "right" }}>
                    <span className="hud-label">LOG CLASSIFICATION</span>
                    <div className="hud-value hud-accent">LEVEL 5 // SECURE</div>
                </div>
            </header>

            {/* Lore Intro */}
            <div className="glass-panel glowing-cyan" style={{ marginBottom: "3rem" }}>
                <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="about-intro-flex">
                    <div style={{ flex: 1 }}>
                        <div className="hud-label">COGNITIVE RECORDING</div>
                        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>ENGINEERING REALITY</h2>
                        <p style={{
                            fontSize: "0.85rem",
                            textTransform: "none",
                            lineHeight: "1.6",
                            color: "rgba(237, 241, 237, 0.8)"
                        }}>
                            Founded at the junction of design and interstellar propulsion engineering, CRUISE is a studio focused on visual excellence in space flight operations. We do not design simple web pages. We engineer dynamic feedback systems, holographic control arrays, and spatial interfaces that assist crew members in navigating gravity anomalies and asteroid fields. Our work balances high-tech mathematical precision with organic user experience.
                        </p>
                    </div>
                    <div style={{
                        width: "150px",
                        height: "150px",
                        border: "1px dashed rgba(0, 240, 255, 0.3)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        animation: "spin 20s linear infinite"
                    }} className="about-intro-spinner">
                        <div style={{
                            width: "80%",
                            height: "80%",
                            border: "1px solid #00f0ff",
                            borderRadius: "50%",
                            borderStyle: "double"
                        }}></div>
                        <div style={{
                            position: "absolute",
                            color: "#00f0ff",
                            fontSize: "0.5rem",
                            fontFamily: "font1"
                        }}>CORE SYNCED</div>
                    </div>
                </div>
            </div>

            {/* Pillars Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                marginBottom: "4rem"
            }} className="about-pillars-grid">
                {pillars.map((pillar, idx) => (
                    <div
                        key={idx}
                        className="glass-panel"
                        style={{
                            borderColor: pillar.border,
                            background: `linear-gradient(180deg, ${pillar.accent} 0%, rgba(10,10,15,0.75) 100%)`
                        }}
                    >
                        <h3 style={{ fontSize: "1.3rem", color: pillar.border, marginBottom: "1rem" }}>
                            {pillar.title}
                        </h3>
                        <p style={{
                            fontSize: "0.8rem",
                            textTransform: "none",
                            lineHeight: "1.5",
                            color: "rgba(237, 241, 237, 0.75)"
                        }}>
                            {pillar.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Timeline Section */}
            <div className="glass-panel glowing-purple">
                <h3 style={{ fontSize: "1.8rem", color: "#d000ff", marginBottom: "2rem" }}>HISTORICAL TIMELINE</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative" }}>
                    {/* Center line */}
                    <div style={{
                        position: "absolute",
                        left: "40px",
                        top: "10px",
                        bottom: "10px",
                        width: "1px",
                        background: "rgba(208, 0, 255, 0.3)"
                    }}></div>

                    {timeline.map((item, idx) => (
                        <div key={idx} style={{ display: "flex", gap: "2rem", position: "relative", alignItems: "flex-start" }}>
                            {/* Bullet */}
                            <div style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                background: "#1a1a1a",
                                border: "2px solid #d000ff",
                                marginLeft: "31px",
                                zIndex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <div style={{ width: "6px", height: "6px", background: "#d000ff", borderRadius: "50%" }}></div>
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1 }}>
                                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.25rem" }}>
                                    <span style={{ fontFamily: "font2", fontSize: "1.2rem", color: "#d000ff" }}>{item.year}</span>
                                    <span style={{ fontSize: "0.75rem", color: "#edf1ed", fontFamily: "font1", letterSpacing: "0.1em" }}>
                                        // {item.event}
                                    </span>
                                </div>
                                <p style={{
                                    fontSize: "0.8rem",
                                    textTransform: "none",
                                    lineHeight: "1.4",
                                    color: "rgba(237, 241, 237, 0.7)"
                                }}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 900px) {
                    .about-intro-flex {
                        flex-direction: column !important;
                        text-align: center;
                    }
                    .about-intro-spinner {
                        margin-top: 1.5rem;
                    }
                    .about-pillars-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}
