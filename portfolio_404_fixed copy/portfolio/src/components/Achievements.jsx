import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { workshops } from "../data/portfolioData";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const achievements = [
    { icon: "💼", title: "2 Internships Completed", desc: "Frontend development internships at Smart Stream Technologies and Zealous Tech Corp.", tag: "Experience" },
    { icon: "🤖", title: "AI-Powered App Built", desc: "Developed FitFusion — an AI-based virtual try-on e-commerce platform presented at PPG Institute of Technology.", tag: "Innovation" },
    { icon: "⚛️", title: "React.js Application", desc: "Built Smart Learning Portal using React.js to help users explore IT career paths with structured roadmaps.", tag: "Development" },
    { icon: "📱", title: "EmailJS Integration", desc: "Successfully integrated real-time contact form using EmailJS during Smart Stream Technologies internship.", tag: "Integration" },
  ];

  return (
    <section id="achievements" className="section" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.03) 50%, transparent 100%)" }}>
      <div className="container">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Achievements & Workshops</div>
          <h2 className="section-title">Highlights & Recognition</h2>
        </motion.div>

        {/* Achievements */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 52 }}>
          {achievements.map((a, i) => (
            <AchCard key={a.title} a={a} index={i} />
          ))}
        </div>

        {/* Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ marginTop: 48 }}
        >
          <div style={{ fontSize: "0.8rem", color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
            Workshops & Presentations
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {workshops.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="glass"
                style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, flex: "1 1 250px" }}
              >
                <span style={{ fontSize: "1.5rem" }}>{w.icon}</span>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text)", fontFamily: "var(--font-display)" }}>{w.title}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text3)", marginTop: 2 }}>{w.organizer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AchCard({ a, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass"
      style={{ padding: "24px", position: "relative", overflow: "hidden" }}
      whileHover={{ y: -4 }}
    >
      <div style={{ position: "absolute", top: 12, right: 12 }}>
        <span style={{
          padding: "2px 10px", borderRadius: 50, fontSize: "0.68rem",
          background: "rgba(108,143,255,0.1)", color: "var(--accent)",
          fontFamily: "var(--font-display)", letterSpacing: "0.05em",
        }}>
          {a.tag}
        </span>
      </div>
      <div style={{ fontSize: "2rem", marginBottom: 14 }}>{a.icon}</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.98rem", fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
        {a.title}
      </h3>
      <p style={{ fontSize: "0.84rem", color: "var(--text2)", lineHeight: 1.6 }}>{a.desc}</p>
    </motion.div>
  );
}
