import React, { useState, useEffect } from "react";
import Nav from "./components/nav";
import Hero from "./components/Hero";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import SciFiDataNode from "./components/SciFiDataNode";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setPath(window.location.pathname);
        };
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    // Set up global Lenis smooth scroll and sync with GSAP ticker
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const LenisClass = Lenis.default || Lenis;
        let lenis;
        try {
            lenis = new LenisClass({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
            });
        } catch (error) {
            console.error("Failed to construct Lenis smooth scroll:", error);
            return;
        }

        lenis.on("scroll", ScrollTrigger.update);

        let destroyed = false;
        const tickerCallback = (time) => {
            if (!destroyed) {
                lenis.raf(time * 1000);
            }
        };

        gsap.ticker.add(tickerCallback);
        if (typeof gsap.ticker.lagSize === "function") {
            gsap.ticker.lagSize(0);
        }

        return () => {
            destroyed = true;
            lenis.destroy();
            gsap.ticker.remove(tickerCallback);
        };
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, "", to);
        setPath(to);
        // Scroll to top instantly on page change
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (path) {
            case "/work":
                return <Work />;
            case "/projects":
                return <Projects />;
            case "/about":
                return <About />;
            case "/contact":
                return <Contact />;
            case "/careers":
                return <Careers />;
            case "/Portfolio":
                return <a href="https://thwyzi.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            case "/":
            default:
                return null;
        }
    };

    const isHome = path === "/" || path === "";

    return (
        <>
            <Nav currentPath={path} onNavigate={navigate} />
            <Hero isHome={isHome} />
            {isHome && <SciFiDataNode />}
            <main className="page-container">
                {renderPage()}
            </main>
        </>
    );
}
