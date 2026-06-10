import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={18} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <MapPin size={18} />, label: "Location", value: personalInfo.location, href: null },
    { icon: <GithubIcon size={18} />, label: "GitHub", value: "github.com/SadhanaMurali09", href: personalInfo.github },
    { icon: <LinkedinIcon size={18} />, label: "LinkedIn", value: "linkedin.com/in/Sadhana-murali", href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="section">
      <div className="orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(108,143,255,0.1) 0%, transparent 70%)", top: "0", left: "50%", transform: "translateX(-50%)" }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>Contact</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Let's Work Together</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            I'm actively looking for frontend development internships. Let's connect!
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32, alignItems: "start" }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {contactItems.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                {item.href ? (
                  <a href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass"
                    style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 14, transition: "all 0.2s", color: "inherit" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "var(--surface2)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--surface)"; }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(108,143,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</div>
                      <div style={{ fontSize: "0.88rem", color: "var(--text)", marginTop: 1 }}>{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="glass" style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(108,143,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text3)", fontFamily: "var(--font-display)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</div>
                      <div style={{ fontSize: "0.88rem", color: "var(--text)", marginTop: 1 }}>{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass"
            style={{ padding: "32px 28px" }}
          >
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, marginBottom: 24, color: "var(--text)" }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit}>
              {[
                { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
              ].map(f => (
                <div key={f.key} style={{ marginBottom: 16 }}>
                  <label style={{
                    fontSize: "0.78rem", color: "var(--text3)", fontFamily: "var(--font-display)",
                    letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6
                  }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    value={form[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    placeholder={f.placeholder}
                    required
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: 10,
                      background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                      color: "var(--text)", fontSize: "0.9rem", fontFamily: "var(--font-body)",
                      outline: "none", transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 20 }}>
                <label style={{
                  fontSize: "0.78rem", color: "var(--text3)", fontFamily: "var(--font-display)",
                  letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6
                }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="I'd love to discuss an internship opportunity..."
                  required
                  rows={4}
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: 10,
                    background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                    color: "var(--text)", fontSize: "0.9rem", fontFamily: "var(--font-body)",
                    outline: "none", resize: "vertical", transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "var(--accent)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem" }}
                disabled={loading || sent}
              >
                {sent ? (
                  <><CheckCircle size={16} /> Message Sent!</>
                ) : loading ? (
                  "Sending..."
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--text3); }
      `}</style>
    </section>
  );
}
