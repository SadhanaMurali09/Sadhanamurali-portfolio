import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experience" className="section" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(167,139,250,0.03) 50%, transparent 100%)" }}>
      <div className="container">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Work Experience</div>
          <h2 className="section-title">Internship Journey</h2>
          <p className="section-subtitle">Real-world experience gained through impactful internship roles.</p>
        </motion.div>

        <div style={{ marginTop: 52, position: "relative" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, var(--accent), var(--accent2), transparent)", borderRadius: 2 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingLeft: 60 }}>
            {experiences.map((exp, i) => (
              <ExpCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{ position: "relative" }}
    >
      {/* Dot */}
      <div style={{
        position: "absolute", left: -48, top: 20,
        width: 16, height: 16, borderRadius: "50%",
        background: index === 0 ? "var(--grad1)" : "var(--grad2)",
        border: "3px solid var(--bg)",
        boxShadow: `0 0 12px ${index === 0 ? "rgba(108,143,255,0.6)" : "rgba(56,189,248,0.5)"}`,
      }} />

      <div className="glass" style={{ padding: "28px 28px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <Briefcase size={14} color="var(--accent)" />
              <span style={{ fontSize: "0.75rem", color: "var(--accent)", fontFamily: "var(--font-display)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {exp.role}
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>
              {exp.company}
            </h3>
          </div>
          <div style={{
            padding: "4px 14px", borderRadius: 50, fontSize: "0.78rem",
            background: "rgba(108,143,255,0.1)", border: "1px solid rgba(108,143,255,0.2)",
            color: "var(--accent)", fontFamily: "var(--font-display)",
          }}>
            {exp.period}
          </div>
        </div>

        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {exp.highlights.map(h => (
            <li key={h} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <CheckCircle2 size={14} color="var(--accent)" style={{ marginTop: 3, flexShrink: 0, opacity: 0.7 }} />
              <span style={{ fontSize: "0.9rem", color: "var(--text2)", lineHeight: 1.6 }}>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
