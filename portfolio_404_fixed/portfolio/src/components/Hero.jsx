import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Glow orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(108,143,255,0.12) 0%, transparent 70%)", top: "10%", left: "-10%" }} />
      <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)", top: "20%", right: "-5%" }} />
      <div className="orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)", bottom: "5%", left: "40%" }} />

      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 100 }}>
        <div style={{ maxWidth: 800 }}>
          {/* Status badge */}
          <motion.div {...fadeUp(0.1)} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, padding: "6px 14px",
              background: "rgba(108,143,255,0.1)", border: "1px solid rgba(108,143,255,0.2)",
              borderRadius: 50, fontSize: "0.8rem", color: "var(--accent)",
              fontFamily: "var(--font-display)", letterSpacing: "0.05em",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", display: "inline-block" }} />
              Available for Internship
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.2)} style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem, 6vw, 5rem)",
            fontWeight: 800, lineHeight: 1.05, marginBottom: 12, letterSpacing: "-0.02em",
          }}>
            Hi, I'm{" "}
            <span style={{ background: "var(--grad1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div {...fadeUp(0.3)} style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
            color: "var(--text2)", fontWeight: 400, marginBottom: 24, letterSpacing: "-0.01em",
          }}>
            {personalInfo.title} &nbsp;·&nbsp; B.Tech IT Student
          </motion.div>

          {/* Summary */}
          <motion.p {...fadeUp(0.4)} style={{
            fontSize: "1.05rem", color: "var(--text2)", lineHeight: 1.8,
            maxWidth: 580, marginBottom: 40,
          }}>
            {personalInfo.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.5)} style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 56 }}>
            <a href="mailto:sadhanamurali65@gmail.com" className="btn-primary">
              <Mail size={16} /> Get In Touch
            </a>
            <a href="#projects" className="btn-outline">
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-outline"
              style={{ borderColor: "rgba(108,143,255,0.3)", color: "var(--accent)" }}
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div {...fadeUp(0.6)} style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Find me on
            </span>
            <div style={{ width: 32, height: 1, background: "var(--border2)" }} />
            {[
              { icon: <GithubIcon size={18} />, href: personalInfo.github, label: "GitHub" },
              { icon: <LinkedinIcon size={18} />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "var(--surface)", border: "1px solid var(--border)",
                  color: "var(--text2)", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "rgba(108,143,255,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--surface)"; }}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", color: "var(--text3)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
      >
        <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-display)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
