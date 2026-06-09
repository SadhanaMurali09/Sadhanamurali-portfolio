import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 24px",
          transition: "all 0.4s",
          background: scrolled ? "rgba(6,8,16,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64,
        }}>
          {/* Logo */}
          <a href="#hero" style={{
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem",
            background: "var(--grad1)", WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent", backgroundClip: "text",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <Code2 size={20} color="#6c8fff" />
            SM
          </a>

          {/* Desktop Links */}
          <div style={{ display: "flex", gap: 6, alignItems: "center" }} className="desktop-nav">
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => setActive(l.href)}
                style={{
                  fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 500,
                  color: active === l.href ? "var(--accent)" : "var(--text2)",
                  padding: "6px 14px", borderRadius: 8,
                  transition: "all 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => e.target.style.color = "var(--text)"}
                onMouseLeave={e => e.target.style.color = active === l.href ? "var(--accent)" : "var(--text2)"}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.82rem", marginLeft: 8 }}>
              Hire Me
            </a>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} style={{ color: "var(--text)", display: "none" }} className="mobile-menu-btn">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
              background: "rgba(6,8,16,0.97)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
              padding: "16px 24px 24px",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  display: "block", padding: "12px 0",
                  fontFamily: "var(--font-display)", fontSize: "1.05rem",
                  color: "var(--text2)", borderBottom: "1px solid var(--border)",
                }}
              >
                {l.label}
              </motion.a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary" style={{ marginTop: 16, display: "inline-flex" }}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
