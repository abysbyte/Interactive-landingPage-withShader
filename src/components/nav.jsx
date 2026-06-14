import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SVG_WIDTH = 1131;
const SVG_HEIGHT = 861;
const SVG_CENTER_X = 565.5;

const OPEN_HIDDEN = `M${SVG_WIDTH},0 Q${SVG_CENTER_X},0 0,0 L0,0 L${SVG_WIDTH},0 Z`;
const OPEN_BULGE = `M${SVG_WIDTH},345 Q${SVG_CENTER_X},620 0,345 L0,0 L${SVG_WIDTH},0 Z`;
const OPEN_FULL = `M${SVG_WIDTH},${SVG_HEIGHT} Q${SVG_CENTER_X},${SVG_HEIGHT} 0,${SVG_HEIGHT} L0,0 L${SVG_WIDTH},0 Z`;

const CLOSE_START = `M${SVG_WIDTH},0 Q${SVG_CENTER_X},0 0,0 L0,${SVG_HEIGHT} L${SVG_WIDTH},${SVG_HEIGHT} Z`;
const CLOSE_BULGE = `M${SVG_WIDTH},350 Q${SVG_CENTER_X},130 0,350 L0,${SVG_HEIGHT} L${SVG_WIDTH},${SVG_HEIGHT} Z`;
const CLOSE_HIDDEN = `M${SVG_WIDTH},${SVG_HEIGHT} Q${SVG_CENTER_X},${SVG_HEIGHT} 0,${SVG_HEIGHT} L0,${SVG_HEIGHT} L${SVG_WIDTH},${SVG_HEIGHT} Z`;

export default function Nav({ currentPath, onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);

    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleToggle = contextSafe(() => {
        if (isAnimating) return;
        setIsAnimating(true);

        const nextState = !isOpen;
        setIsOpen(nextState);

        if (nextState) {
            // OPEN MENU ANIMATION
            // Fade out Menu text, fade in Close text
            gsap.to(".nav-toggle-menu", { duration: 0.25, opacity: 0, ease: "none" });
            gsap.to(".nav-toggle-close", {
                duration: 0.25,
                opacity: 1,
                ease: "none",
                delay: 0.25,
            });

            const t1 = gsap.timeline({
                onComplete: () => {
                    setIsAnimating(false);
                },
            });

            // SVG Liquid/Bulge Morph
            t1.to(".menu-path", {
                duration: 0.5,
                attr: { d: OPEN_BULGE },
                ease: "power4.in",
            }).to(".menu-path", {
                duration: 0.5,
                attr: { d: OPEN_FULL },
                ease: "power4.out",
            });

            // Logo Fade
            t1.to(".menu-logo", { duration: 0.1, opacity: 1, ease: "none" }, "-=0.75");

            // Info items fade & slide up
            t1.to(
                ".menu-info-item",
                {
                    duration: 0.75,
                    opacity: 1,
                    y: 0,
                    ease: "power3.out",
                    stagger: 0.075,
                },
                "-=0.35",
            );

            // Staggered letters animation for links
            t1.to(
                ".char",
                {
                    duration: 1.5,
                    x: "0%",
                    opacity: 1,
                    ease: "elastic.out(1, 0.25)",
                    stagger: 0.01,
                },
                "-=0.55",
            );
        } else {
            // CLOSE MENU ANIMATION
            gsap.set(".menu-path", { attr: { d: CLOSE_START } });

            // Fade out Close text, fade in Menu text
            gsap.to(".nav-toggle-close", { duration: 0.3, opacity: 0, ease: "none" });
            gsap.to(".nav-toggle-menu", {
                duration: 0.3,
                opacity: 1,
                ease: "none",
                delay: 0.25,
            });

            const t1 = gsap.timeline({
                onComplete: () => {
                    setIsAnimating(false);
                    // Reset elements for next open
                    gsap.set(".char", { opacity: 0, x: "750%" });
                    gsap.set(".menu-col-links a", { opacity: 1 });
                    gsap.set(".menu-info-item", { opacity: 0, y: 100 });
                },
            });

            t1.to(".menu-logo", { duration: 0.3, opacity: 0 })
                .to(".menu-col-links a", { duration: 0.3, opacity: 0 }, "<")
                .to(".menu-info-item", { duration: 0.3, opacity: 0 }, "<");

            t1.to(
                ".menu-path",
                { duration: 0.5, attr: { d: CLOSE_BULGE }, ease: "power3.in" },
                "<",
            ).to(".menu-path", {
                duration: 0.5,
                attr: { d: CLOSE_HIDDEN },
                ease: "power3.out",
            });
        }
    });

    const handleLinkClick = (e, href, isExternal) => {
        if (isExternal) {
            if (isOpen) {
                handleToggle();
            }
            return;
        }
        e.preventDefault();
        if (currentPath === href) {
            if (isOpen) {
                handleToggle();
            }
            return;
        }

        if (isOpen) {
            if (isAnimating) return;
            setIsAnimating(true);
            setIsOpen(false);

            gsap.set(".menu-path", { attr: { d: CLOSE_START } });
            gsap.to(".nav-toggle-close", { duration: 0.3, opacity: 0, ease: "none" });
            gsap.to(".nav-toggle-menu", {
                duration: 0.3,
                opacity: 1,
                ease: "none",
                delay: 0.25,
            });

            const t1 = gsap.timeline({
                onComplete: () => {
                    setIsAnimating(false);
                    gsap.set(".char", { opacity: 0, x: "750%" });
                    gsap.set(".menu-col-links a", { opacity: 1 });
                    gsap.set(".menu-info-item", { opacity: 0, y: 100 });
                    onNavigate(href);
                },
            });

            t1.to(".menu-logo", { duration: 0.3, opacity: 0 })
                .to(".menu-col-links a", { duration: 0.3, opacity: 0 }, "<")
                .to(".menu-info-item", { duration: 0.3, opacity: 0 }, "<");

            t1.to(
                ".menu-path",
                { duration: 0.5, attr: { d: CLOSE_BULGE }, ease: "power3.in" },
                "<",
            ).to(".menu-path", {
                duration: 0.5,
                attr: { d: CLOSE_HIDDEN },
                ease: "power3.out",
            });
        } else {
            onNavigate(href);
        }
    };

    const menuLinks = [
        { label: "Work", href: "/work" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Portfolio", href: "https://thwyzi.vercel.app/", isExternal: true },
    ];

    return (
        <div ref={containerRef} className="nav">
            <div className="nav-logo">
                <a href="/" onClick={(e) => handleLinkClick(e, "/")}>Cruise</a>
            </div>

            <div className="nav-toggle" onClick={handleToggle}>
                <p className="nav-toggle-menu">Menu</p>
                <p className="nav-toggle-close">Close</p>
            </div>

            <div className={`menu ${isOpen ? "is-open" : ""}`}>
                <svg
                    className="menu-bg-svg"
                    viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="menu-path"
                        fill="#121212"
                        d={OPEN_HIDDEN}
                    />
                </svg>

                <div className="menu-logo">
                    <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
                        CRUISE
                    </a>
                </div>

                <div className="menu-col menu-col-info">
                    <p className="menu-info-item" style={{ opacity: 0, transform: "translateY(100px)" }}>
                        Get in touch
                    </p>
                    <h3 className="menu-info-item" style={{ opacity: 0, transform: "translateY(100px)" }}>
                        vishal thakur
                    </h3>
                    <h3 className="menu-info-item" style={{ opacity: 0, transform: "translateY(100px)" }}>
                        +(91)6006569500
                    </h3>
                    <br />
                    <h6 className="menu-info-item" style={{ opacity: 0, transform: "translateY(100px)" }}>
                        sector 9 mohali
                    </h6>
                    <h6 className="menu-info-item" style={{ opacity: 0, transform: "translateY(100px)" }}>
                        Chandigarh, India
                    </h6>
                </div>

                <div className="menu-col menu-col-links">
                    {menuLinks.map((link, linkIdx) => (
                        <a
                            key={linkIdx}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                            className={currentPath === link.href ? "active" : ""}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                        >
                            {link.label.split("").map((char, charIdx) => (
                                <span
                                    key={charIdx}
                                    className="char"
                                    style={{
                                        display: "inline-block",
                                        opacity: 0,
                                        transform: "translateX(750%)",
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}


