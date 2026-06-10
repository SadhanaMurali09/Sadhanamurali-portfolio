import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" className="section">
      <div className="orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)", top: "0", left: "-10%" }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Projects</div>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">Projects I've built that showcase my skills in frontend development and UI/UX design.</p>
        </motion.div>

        <div style={{ marginTop: 52, display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="glass"
      style={{ padding: "0", overflow: "hidden", transition: "all 0.3s" }}
      whileHover={{ y: -4 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", minHeight: 220 }}>
        {/* Left accent */}
        <div style={{
          background: `linear-gradient(135deg, var(--bg2), var(--bg3))`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: 12, padding: 36, position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(135deg, ${p.gradient.replace("from-", "").replace("to-", "").split(" ").map(c => {
              const map = { "violet-500": "#8b5cf6", "purple-600": "#9333ea", "cyan-500": "#06b6d4", "blue-600": "#2563eb", "amber-500": "#f59e0b", "orange-600": "#ea580c" };
              return map[c] || c;
            }).join(", ")})`,
            opacity: 0.07,
          }} />
          <span style={{ fontSize: "3.5rem", position: "relative", zIndex: 1 }}>{p.icon}</span>
          <div style={{
            padding: "4px 12px", borderRadius: 50, fontSize: "0.72rem",
            fontFamily: "var(--font-display)", letterSpacing: "0.08em",
            background: "rgba(255,255,255,0.07)", color: "var(--text2)", position: "relative", zIndex: 1,
          }}>
            Project {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Right content */}
        <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontSize: "0.72rem", color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {p.subtitle}
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, marginBottom: 12, color: "var(--text)", letterSpacing: "-0.02em" }}>
              {p.title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text2)", lineHeight: 1.7, marginBottom: 16 }}>
              {p.description}
            </p>

            {/* Features */}
            <ul style={{ marginBottom: 16, paddingLeft: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 16px" }}>
              {p.features.map(f => (
                <li key={f} style={{ fontSize: "0.82rem", color: "var(--text3)", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", flexShrink: 0, display: "inline-block" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
              {p.tech.map(t => (
                <span key={t} style={{
                  padding: "3px 10px", borderRadius: 50,
                  background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
                  fontSize: "0.75rem", color: "var(--text3)", fontFamily: "var(--font-display)",
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: 10 }}>
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", color: "var(--text2)", padding: "6px 14px", border: "1px solid var(--border)", borderRadius: 8, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border2)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                <GithubIcon size={14} /> Code
              </a>
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", color: "var(--accent)", padding: "6px 14px", border: "1px solid rgba(108,143,255,0.3)", borderRadius: 8, background: "rgba(108,143,255,0.07)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(108,143,255,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(108,143,255,0.07)"; }}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .project-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  );
}
