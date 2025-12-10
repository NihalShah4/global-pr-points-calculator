import { Link } from "react-router-dom";

const countries = [
  {
    code: "CA",
    name: "Canada PR",
    path: "/canada",
    blurb: "Express Entry–style CRS points for skilled workers.",
  },
  {
    code: "AU",
    name: "Australia PR",
    path: "/australia",
    blurb: "General Skilled Migration points (age, skills, English).",
  },
  {
    code: "NZ",
    name: "New Zealand PR",
    path: "/new-zealand",
    blurb: "Skilled Migrant–style points with NZ-specific factors.",
  },
  {
    code: "GB",
    name: "UK Skilled Worker",
    path: "/uk",
    blurb: "Salary, sponsorship and shortage-occupation style rules.",
  },
  {
    code: "DE",
    name: "Germany Points System",
    path: "/germany",
    blurb: "Skilled migration / Blue Card–style demo calculator.",
  },
];

export default function Home() {
  return (
    <main style={styles.page}>
      {/* Hero section */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <span style={styles.badge}>Multi-country PR planning</span>

          <h1 style={styles.title}>Global PR Points Calculator</h1>

          <p style={styles.subtitle}>
            Quickly estimate your points for popular PR and skilled-migration
            programs across Canada, Australia, New Zealand, the UK and Germany.
          </p>

          <ul style={styles.featureList}>
            <li>Country-specific scoring logic (not just generic maths).</li>
            <li>Live points breakdown with “strength” verdicts.</li>
            <li>Fully client-side &mdash; no signup, no data stored.</li>
          </ul>
        </div>

        {/* Cards */}
        <div style={styles.heroRight}>
          <p style={styles.gridTitle}>Start with a country</p>
          <div style={styles.grid}>
            {countries.map((c) => (
              <Link key={c.code} to={c.path} style={styles.card}>
                <div style={styles.cardHeader}>
                  <span style={styles.flag}>{c.code}</span>
                  <span style={styles.cardName}>{c.name}</span>
                </div>
                <p style={styles.cardBlurb}>{c.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer strip */}
      <section style={styles.disclaimerSection}>
        <p style={styles.disclaimerTitle}>Heads-up</p>
        <p style={styles.disclaimerText}>
          This tool is for educational and comparison purposes only. It is{" "}
          <strong>not</strong> legal or immigration advice. Always verify rules
          and eligibility on official government websites.
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "calc(100vh - 80px)", // nav + footer space
    padding: "40px 32px 40px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  hero: {
    maxWidth: "1120px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "flex-start",
  },
  heroLeft: {
    flex: "1 1 320px",
    minWidth: "280px",
  },
  heroRight: {
    flex: "1.2 1 360px",
    minWidth: "320px",
    background:
      "radial-gradient(circle at top left, rgba(56,189,248,0.08), transparent 55%)",
    padding: "20px 20px 24px",
    borderRadius: "18px",
    border: "1px solid #1f2937",
    boxShadow: "0 18px 45px rgba(15,23,42,0.7)",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    padding: "4px 10px",
    borderRadius: "999px",
    border: "1px solid #1d4ed8",
    background:
      "linear-gradient(135deg, rgba(37,99,235,0.2), rgba(15,23,42,0.8))",
    color: "#bfdbfe",
    marginBottom: "14px",
  },
  title: {
    fontSize: "32px",
    lineHeight: 1.25,
    margin: 0,
    marginBottom: "10px",
    color: "#e5e7eb",
  },
  subtitle: {
    margin: 0,
    marginBottom: "18px",
    fontSize: "14px",
    color: "#9ca3af",
    maxWidth: "520px",
  },
  featureList: {
    margin: 0,
    paddingLeft: "18px",
    fontSize: "13px",
    color: "#9ca3af",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  gridTitle: {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    color: "#9ca3af",
    margin: "0 0 10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "14px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "14px 14px 12px",
    background: "rgba(15,23,42,0.9)",
    borderRadius: "14px",
    border: "1px solid #111827",
    textDecoration: "none",
    color: "#e5e7eb",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(15,23,42,0.85)",
    transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out, border-color 0.15s ease-out, background 0.15s ease-out",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "2px",
  },
  cardName: {
    fontWeight: 500,
  },
  cardBlurb: {
    margin: 0,
    fontSize: "12px",
    color: "#9ca3af",
  },
  flag: {
    fontSize: "11px",
    padding: "2px 7px",
    borderRadius: "999px",
    border: "1px solid #334155",
    display: "inline-block",
    color: "#cbd5f5",
    background: "rgba(15,23,42,0.9)",
  },
  disclaimerSection: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1px dashed #374151",
    background: "rgba(15,23,42,0.7)",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  disclaimerTitle: {
    margin: 0,
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "#9ca3af",
  },
  disclaimerText: {
    margin: 0,
    fontSize: "12px",
    color: "#6b7280",
  },
};
