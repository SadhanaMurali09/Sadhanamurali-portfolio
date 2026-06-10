import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "32px 24px",
      textAlign: "center",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", background: "var(--grad1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          <Code2 size={16} color="#6c8fff" />
          Sadhana M
        </div>
        <p style={{ fontSize: "0.82rem", color: "var(--text3)", display: "flex", alignItems: "center", gap: 5 }}>
          Built with <Heart size={12} color="#ef4444" fill="#ef4444" /> using React & Framer Motion
        </p>
        <p style={{ fontSize: "0.82rem", color: "var(--text3)" }}>© 2025 Sadhana M. All rights reserved.</p>
      </div>
    </footer>
  );
}
