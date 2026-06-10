import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="education" className="section">
      <div className="orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(108,143,255,0.07) 0%, transparent 70%)", bottom: 0, right: 0 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic Background</h2>
        </motion.div>

        <div style={{ marginTop: 52, display: "grid", gap: 20 }}>
          {education.map((edu, i) => (
            <EduCard key={edu.degree} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EduCard({ edu, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass"
      style={{ padding: "24px 28px", display: "flex", alignItems: "flex-start", gap: 20 }}
      whileHover={{ y: -3 }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 12, flexShrink: 0,
        background: edu.current ? "var(--grad1)" : "rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: edu.current ? "0 4px 20px rgba(108,143,255,0.3)" : "none",
      }}>
        <GraduationCap size={20} color={edu.current ? "#fff" : "var(--text3)"} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>
              {edu.institution}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text2)", marginBottom: 8 }}>{edu.degree}</p>
          </div>
          {edu.current && (
            <span style={{
              padding: "3px 12px", borderRadius: 50, fontSize: "0.72rem",
              background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)",
              color: "#4ade80", fontFamily: "var(--font-display)",
            }}>
              Current
            </span>
          )}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.82rem", color: "var(--text3)" }}>
            <Calendar size={12} /> {edu.period}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.82rem", color: "var(--text3)" }}>
            <MapPin size={12} /> {edu.location}
          </span>
          <span style={{
            display: "flex", alignItems: "center", gap: 5, fontSize: "0.82rem",
            color: "var(--accent)", fontWeight: 600, fontFamily: "var(--font-display)",
          }}>
            🎯 {edu.score}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
