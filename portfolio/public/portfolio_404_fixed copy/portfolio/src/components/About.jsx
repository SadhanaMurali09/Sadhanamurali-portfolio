import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Code, Target } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Card = ({ icon, title, value, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass" style={{ padding: "24px", flex: "1 1 200px" }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(108,143,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, color: "var(--accent)" }}>
        {icon}
      </div>
      <div style={{ fontSize: "0.75rem", color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text)", fontFamily: "var(--font-display)" }}>{value}</div>
    </motion.div>
  );
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="section">
      <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)", top: "0%", right: "0%" }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">About Me</div>
          <h2 className="section-title">Passionate about building<br />great web experiences</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 52, alignItems: "start" }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ fontSize: "1.05rem", color: "var(--text2)", lineHeight: 1.8, marginBottom: 20 }}>
              I'm a B.Tech Information Technology student at <span style={{ color: "var(--text)" }}>Erode Sengunthar Engineering College</span>, passionate about creating clean, responsive web applications that deliver great user experiences.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--text2)", lineHeight: 1.8, marginBottom: 32 }}>
              Through internships at <span style={{ color: "var(--text)" }}>Smart Stream Technologies</span> and <span style={{ color: "var(--text)" }}>Zealous Tech Corp</span>, I've gained hands-on experience in frontend development, UI design, and real-world project implementation.
            </p>

            {/* Objective */}
            <div className="glass" style={{ padding: "20px 24px", borderLeft: "3px solid var(--accent)" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <Target size={16} color="var(--accent)" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--accent)", fontFamily: "var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Career Objective</div>
                  <p style={{ fontSize: "0.95rem", color: "var(--text2)", lineHeight: 1.7 }}>{personalInfo.objective}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Card icon={<MapPin size={18} />} title="Location" value="Tamil Nadu, India" delay={0.3} />
              <Card icon={<GraduationCap size={18} />} title="Degree" value="B.Tech IT (2027)" delay={0.4} />
              <Card icon={<Code size={18} />} title="Focus" value="Frontend Dev" delay={0.5} />
            </div>

            {/* Quick facts */}
            <div className="glass" style={{ padding: "24px" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Quick Facts</div>
              {[
                ["CGPA", "7.95 / 10"],
                ["Internships", "2 Completed"],
                ["Projects", "3+ Built"],
                ["Workshops", "3 Attended"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "0.9rem", color: "var(--text2)" }}>{k}</span>
                  <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", fontFamily: "var(--font-display)" }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:last-child { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}
