import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/portfolioData";

const SkillBar = ({ name, level, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: "0.88rem", color: "var(--text)", fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: "0.78rem", color: "var(--text3)", fontFamily: "var(--font-display)" }}>{level}%</span>
      </div>
      <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 99 }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: "100%", borderRadius: 99, background: "var(--grad1)" }}
        />
      </div>
    </div>
  );
};

const TagList = ({ items }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
    {items.map(item => (
      <span key={item} style={{
        padding: "5px 12px", borderRadius: 50,
        background: "rgba(108,143,255,0.1)", border: "1px solid rgba(108,143,255,0.2)",
        fontSize: "0.8rem", color: "var(--accent)", fontFamily: "var(--font-display)",
      }}>
        {item}
      </span>
    ))}
  </div>
);

const SkillCard = ({ title, children, delay, accent }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass"
      style={{ padding: "28px 24px" }}
    >
      <div style={{
        fontSize: "0.75rem", fontFamily: "var(--font-display)", letterSpacing: "0.12em",
        textTransform: "uppercase", color: accent || "var(--accent)", marginBottom: 20,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <div style={{ width: 16, height: 2, background: accent || "var(--accent)", borderRadius: 2 }} />
        {title}
      </div>
      {children}
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="section" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(108,143,255,0.03) 50%, transparent 100%)" }}>
      <div className="container">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle">Technologies I work with to build responsive, dynamic web applications.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 52 }}>
          <SkillCard title="Frontend Development" delay={0.1} accent="var(--accent)">
            {skills.frontend.map((s, i) => <SkillBar key={s.name} {...s} delay={0.1 + i * 0.08} />)}
          </SkillCard>

          <SkillCard title="Tools & Workflow" delay={0.2} accent="var(--accent2)">
            {skills.tools.map((s, i) => <SkillBar key={s.name} {...s} delay={0.2 + i * 0.08} />)}
          </SkillCard>

          <SkillCard title="Programming Languages" delay={0.3} accent="var(--accent3)">
            {skills.languages.map((s, i) => <SkillBar key={s.name} {...s} delay={0.3 + i * 0.1} />)}
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent3)", marginBottom: 12 }}>Core Concepts</div>
              <TagList items={skills.concepts} />
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}
