import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./SciFiDataNode.css";

export default function SciFiDataNode() {
    const scrollWrapperRef = useRef(null);
    const pinnedViewportRef = useRef(null);
    const coreRef = useRef(null);

    useGSAP(() => {
        if (!scrollWrapperRef.current || !pinnedViewportRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: scrollWrapperRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin: pinnedViewportRef.current,
            }
        });

        // PHASE 1: The Biometric Scan (0% - 30%)
        masterTimeline.fromTo(
            ".scanner-line",
            { y: "-10vh", opacity: 0 },
            { y: "110vh", opacity: 1, duration: 3, ease: "power1.inOut" }
        );

        masterTimeline.fromTo(
            ".core-object",
            { clipPath: "inset(0% 0% 100% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.8, ease: "none" },
            "-=2.4"
        );

        masterTimeline.to(".scanner-line", { opacity: 0, duration: 0.3 }, "-=0.3");

        // PHASE 2: The Glitch (30% - 40%)
        const glitchTimeline = gsap.timeline();
        const steps = 14;
        
        for (let i = 0; i < steps; i++) {
            glitchTimeline.to(".core-object", {
                x: () => (Math.random() - 0.5) * 45,
                y: () => (Math.random() - 0.5) * 20,
                skewX: () => (Math.random() - 0.5) * 35,
                scale: () => 0.9 + Math.random() * 0.2,
                filter: () => `brightness(${1.2 + Math.random() * 2.8}) contrast(${1.5 + Math.random() * 1.5}) hue-rotate(${Math.random() * 360}deg) drop-shadow(0 0 15px rgba(0, 255, 255, 0.6))`,
                duration: 0.07,
                ease: "none"
            });
        }
        
        glitchTimeline.to(".core-object", { 
            x: 0, 
            y: 0, 
            skewX: 0, 
            scale: 1, 
            filter: "none", 
            duration: 0.05 
        });
        
        masterTimeline.add(glitchTimeline);

        // PHASE 3: Holographic Explosion (40% - 100%)
        masterTimeline.to(".core-object", {
            scale: 0.1,
            opacity: 0,
            duration: 1.5,
            ease: "power4.in"
        });

        const panelConfigs = [
            { x: -380, y: -240, z: 400, rotX: 18, rotY: -28, rotZ: -5 },
            { x: 380, y: -240, z: 300, rotX: -18, rotY: 28, rotZ: 5 },
            { x: -440, y: 220, z: 350, rotX: 12, rotY: -20, rotZ: -8 },
            { x: 440, y: 220, z: 450, rotX: -12, rotY: 20, rotZ: 8 },
            { x: 0, y: -320, z: 500, rotX: 30, rotY: 0, rotZ: 0 },
            { x: 0, y: 320, z: 300, rotX: -30, rotY: 0, rotZ: 0 }
        ];

        panelConfigs.forEach((conf, idx) => {
            masterTimeline.to(
                `.data-panel-${idx}`,
                {
                    opacity: 1,
                    x: conf.x,
                    y: conf.y,
                    z: conf.z,
                    rotateX: conf.rotX,
                    rotateY: conf.rotY,
                    rotateZ: conf.rotZ,
                    duration: 3,
                    ease: "power3.out"
                },
                "-=1.5"
            );
        });

    }, { scope: scrollWrapperRef });

    const panelsData = [
        {
            title: "BIOMETRIC SPECTRUM",
            subtitle: "SCAN IDENT // SYNC: 99.4%",
            stat: "CORE TEMP: 310 K",
            content: "Neural alignment buffers online. Synaptic transmission vectors synchronized with mainframe registry templates."
        },
        {
            title: "REACTOR CONTROLLER",
            subtitle: "MAGNETICS // STABLE",
            stat: "STRENGTH: 920 T",
            content: "Dilithium flow pressure stable. Containment field grid operating at optimal threshold envelope."
        },
        {
            title: "WARP DYNAMICS",
            subtitle: "COORDINATE RELAY // FTL",
            stat: "INDEX: W-8.21",
            content: "Manifold alignment locked. Subspace vector computations complete. Dimensional portals configured."
        },
        {
            title: "DEFENSIVE CORE",
            subtitle: "AEGIS SHIELDING // CHARGED",
            stat: "EFFICIENCY: 99.1%",
            content: "Flux shield capacitors charged to capacity. Dynamic defense line structural bounds operational."
        },
        {
            title: "COGNITIVE APERTURE",
            subtitle: "NEURAL NETWORK // SECURE",
            stat: "DAMPING: 12.4ms",
            content: "Mental feedback matrices configured. Target integration bounds mapped to human visual cortex."
        },
        {
            title: "SYSTEM TELEMETRY",
            subtitle: "MONITOR DECK // LOGGING",
            stat: "NOISE: 0.041 dB",
            content: "Subspace telemetries reporting zero packet corruption. Connection lines clear for cross-system transmission."
        }
    ];

    return (
        <div ref={scrollWrapperRef} className="scroll-wrapper">
            <div ref={pinnedViewportRef} className="pinned-viewport">
                <div className="grid-overlay" />
                <div className="scanner-line" />

                <div ref={coreRef} className="core-object">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                                <stop offset="60%" stopColor="#d000ff" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#050505" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <circle cx="100" cy="100" r="85" fill="url(#glow)" />
                        <circle cx="100" cy="100" r="75" stroke="#00ffff" strokeWidth="1" strokeDasharray="10 15 30 10" fill="none" className="ring-slow" />
                        <circle cx="100" cy="100" r="62" stroke="#d000ff" strokeWidth="1.5" strokeDasharray="40 10 5 15" fill="none" className="ring-fast" />
                        <circle cx="100" cy="100" r="50" stroke="#00ffff" strokeWidth="0.5" strokeDasharray="2 4" fill="none" />
                        <polygon points="100,58 136,80 136,120 100,142 64,120 64,80" stroke="#edf1ed" strokeWidth="1.5" fill="none" className="core-poly" />
                        <polygon points="100,70 125,85 125,115 100,130 75,115 75,85" stroke="#00ffff" strokeWidth="1" fill="rgba(0, 255, 255, 0.05)" className="core-poly-inner" />
                        <circle cx="100" cy="100" r="10" fill="#edf1ed" className="core-node" />
                    </svg>
                </div>

                <div className="panels-container">
                    {panelsData.map((panel, idx) => (
                        <div key={idx} className={`data-panel data-panel-${idx} glass-panel`}>
                            <div className="panel-header">
                                <div>
                                    <span className="panel-id">NODE_0{idx + 1}</span>
                                    <h4 className="panel-title">{panel.title}</h4>
                                </div>
                                <span className="panel-status">{panel.stat}</span>
                            </div>
                            <div className="panel-subtitle">{panel.subtitle}</div>
                            <p className="panel-desc">{panel.content}</p>
                            <div className="panel-footer">
                                <span className="panel-link">[CONNECT LINK]</span>
                                <span className="panel-marker">SYS_R_0{idx + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="scroll-prompt-hud">
                    <span className="hud-label">SCENE STATUS: READY</span>
                    <p className="hud-value hud-accent">SCROLL DOWN TO INITIATE SCAN</p>
                </div>
            </div>
        </div>
    );
}
