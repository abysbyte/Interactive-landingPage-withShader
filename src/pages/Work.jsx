import React, { useState } from "react";

const WORK_ITEMS = [
    {
        id: "op-nebula",
        num: "OP-08",
        title: "NEBULA LINK",
        category: "Subspace Comm Array",
        status: "OPERATIONAL",
        metric: "SYNC RATE: 99.82%",
        desc: "A planetary-scale subspace communications grid deployed in orbit around Ceres, utilizing quantum entanglement to maintain zero-latency telemetry channels with outer-rim scout vessels.",
        specs: [
            { label: "FREQUENCY", val: "442.10 PHz" },
            { label: "BANDWIDTH", val: "4.8 TB/sec" },
            { label: "ENTANGLEMENT STATE", val: "COHERENT" }
        ],
        details: "Nebula Link acts as the core communication spine for CRUISE operations. By routing signals through high-dimensional manifolds, it bypasses standard relativistic time-dilation, allowing direct planetary coordination across the solar system."
    },
    {
        id: "op-chronos",
        num: "OP-14",
        title: "CHRONOS ENGINE",
        category: "Temporal Warp Processor",
        status: "INITIALIZING",
        metric: "THERMAL CORE: 44.5%",
        desc: "Research prototype designed to manipulate microscopic gravitational anomalies. Creates localized temporal acceleration fields for hardware testing and advanced chronal simulations.",
        specs: [
            { label: "CORE LOAD", val: "1.21 GW" },
            { label: "DILATION INDEX", val: "t+1.004s" },
            { label: "COOLANT VOL", val: "92.4 L/m" }
        ],
        details: "Designed inside the Mohali Sector 9 laboratories, the Chronos Engine aims to synchronize computational processors outside of standard time-streams, achieving infinite parallel execution loops for core ship algorithms."
    },
    {
        id: "op-aegis",
        num: "OP-03",
        title: "AEGIS SHIELDING",
        category: "Magnetospheric Grid",
        status: "OPERATIONAL",
        metric: "INTEGRITY: 100.0%",
        desc: "Defensive field generator capable of neutralizing high-yield plasma discharge and cosmic radiation. Currently protecting the main orbital shipyards and drydocks.",
        specs: [
            { label: "EMISSION STRENGTH", val: "880 Tesla" },
            { label: "GRID RESOLUTION", val: "4096px/m²" },
            { label: "CHARGE EFFICIENCY", val: "99.1%" }
        ],
        details: "Using structured magnetic flux lines, the Aegis Shielding isolates structures from the harsh vacuum environment and hostile thermal radiation, ensuring stable conditions inside industrial workspaces."
    },
    {
        id: "op-helix",
        num: "OP-22",
        title: "HELIX PROTOCOL",
        category: "Bio-Mechanical Sync",
        status: "CRITICAL",
        metric: "MUTATION INDEX: 8.41%",
        desc: "Cybernetic neural interfaces designed to merge human cognitive feedback loops with spaceship computer systems, maximizing combat and navigation reaction times.",
        specs: [
            { label: "NEURAL DAMPING", val: "12.4 ms" },
            { label: "SYNAPTIC FLOW", val: "942 Gbps" },
            { label: "HOST COMPATIBILITY", val: "98.9%" }
        ],
        details: "Helix Protocol represents the bleeding edge of cybernetic pilot interface research. By directly mapping vascular pressure and motor-cortex neurons, it makes the ship feel like an extension of the pilot's own nervous system."
    }
];

export default function Work() {
    const [selectedItem, setSelectedItem] = useState(WORK_ITEMS[0]);

    return (
        <div className="page-wrapper">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Creative Operations</h1>
                    <p className="page-subtitle">CRUISE MISSION ARCHIVES // CLASS-A PROTOCOLS</p>
                </div>
                <div style={{ textAlign: "right" }}>
                    <span className="hud-label">LOGGED IN AS:</span>
                    <div className="hud-value hud-accent">PILOT_USER_01</div>
                </div>
            </header>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2.5rem",
                alignItems: "start"
            }} className="work-content-grid">
                {/* Left Side: Work Items Grid */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {WORK_ITEMS.map((item) => {
                        const isSelected = selectedItem.id === item.id;
                        let badgeClass = "badge-operational";
                        if (item.status === "INITIALIZING") badgeClass = "badge-initializing";
                        if (item.status === "CRITICAL") badgeClass = "badge-critical";

                        return (
                            <div
                                key={item.id}
                                className={`glass-panel glowing-cyan ${isSelected ? "active-panel" : ""}`}
                                onClick={() => setSelectedItem(item)}
                                style={{
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    borderLeftWidth: isSelected ? "4px" : "1px",
                                    borderLeftColor: isSelected ? "#00f0ff" : "rgba(0, 240, 255, 0.15)",
                                    background: isSelected ? "rgba(10, 20, 30, 0.85)" : "rgba(10, 10, 15, 0.75)"
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                                    <span style={{ fontSize: "0.8rem", color: "#00f0ff", fontFamily: "font1" }}>
                                        {item.num} // {item.category}
                                    </span>
                                    <span className={`badge ${badgeClass}`}>{item.status}</span>
                                </div>
                                <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#edf1ed" }}>
                                    {item.title}
                                </h2>
                                <p style={{ fontSize: "0.8rem", textTransform: "none", color: "rgba(237, 241, 237, 0.7)", lineBreak: "normal", lineHeight: "1.4" }}>
                                    {item.desc}
                                </p>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", borderTop: "1px solid rgba(237, 241, 237, 0.1)", paddingTop: "0.75rem" }}>
                                    <span style={{ fontSize: "0.7rem", color: "rgba(0, 240, 255, 0.6)", fontFamily: "font1" }}>
                                        {item.metric}
                                    </span>
                                    <span style={{ fontSize: "0.7rem", color: "#00f0ff", textDecoration: "underline", fontFamily: "font1" }}>
                                        [VIEW SCHEMATICS]
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Side: Detail schematic panel */}
                <div style={{ position: "sticky", top: "8rem" }}>
                    <div className="glass-panel glowing-purple" style={{ border: "1px solid rgba(208, 0, 255, 0.25)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                            <span className="hud-label">SCHEMATIC READOUT</span>
                            <span style={{ color: "#d000ff", fontSize: "0.75rem", fontFamily: "font1" }}>SECURE LINK // ACTIVE</span>
                        </div>

                        <div style={{
                            border: "1px solid rgba(208, 0, 255, 0.2)",
                            background: "rgba(0,0,0,0.3)",
                            padding: "1.5rem",
                            marginBottom: "1.5rem",
                            borderRadius: "2px",
                            fontFamily: "font1"
                        }}>
                            <div style={{ fontSize: "1.2rem", color: "#d000ff", marginBottom: "0.5rem" }}>
                                {selectedItem.title} SYSTEM DETAIL
                            </div>
                            <div style={{ color: "rgba(237, 241, 237, 0.8)", fontSize: "0.85rem", textTransform: "none", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                                {selectedItem.details}
                            </div>

                            {/* Core Specs Grid */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", borderTop: "1px dashed rgba(208, 0, 255, 0.3)", paddingTop: "1rem" }}>
                                {selectedItem.specs.map((spec, idx) => (
                                    <div key={idx}>
                                        <div className="hud-label" style={{ fontSize: "0.55rem" }}>{spec.label}</div>
                                        <div style={{ fontSize: "0.9rem", color: "#edf1ed" }}>{spec.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive UI decorations */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span className="hud-label">COGNITIVE LOAD INDICATOR</span>
                                <span style={{ color: "#d000ff", fontSize: "0.65rem", fontFamily: "font1" }}>76.4 GigaFLOPs</span>
                            </div>
                            <div style={{
                                width: "100%",
                                height: "4px",
                                background: "rgba(208, 0, 255, 0.1)",
                                borderRadius: "2px",
                                overflow: "hidden"
                            }}>
                                <div style={{
                                    width: "74%",
                                    height: "100%",
                                    background: "#d000ff",
                                    animation: "widthPulse 3s infinite alternate"
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes widthPulse {
                    from { width: 70%; }
                    to { width: 85%; }
                }
                @media (max-width: 900px) {
                    .work-content-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}
