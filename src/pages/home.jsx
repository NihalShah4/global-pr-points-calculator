import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>🌍 Global PR Points Calculator</h1>
        <p style={styles.subtitle}>
          Your one-stop platform to compare PR eligibility for major countries.
        </p>

        <div style={styles.grid}>
          <Link to="/canada" style={styles.card}>
            <span style={styles.flag}>CA</span>
            <span>Canada PR</span>
          </Link>

          <Link to="/australia" style={styles.card}>
            <span style={styles.flag}>AU</span>
            <span>Australia PR</span>
          </Link>

          <Link to="/new-zealand" style={styles.card}>
            <span style={styles.flag}>NZ</span>
            <span>New Zealand PR</span>
          </Link>

          <Link to="/uk" style={styles.card}>
            <span style={styles.flag}>GB</span>
            <span>UK Skilled Worker Points</span>
          </Link>

          <Link to="/germany" style={styles.card}>
            <span style={styles.flag}>DE</span>
            <span>Germany Points System</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: "1100px",        // wider content area
    padding: "48px 24px",
  },
  title: {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#cbd5f5",
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "18px 16px",
    background: "#0f172a",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    textDecoration: "none",
    color: "#e5e7eb",
    fontWeight: 500,
    fontSize: "15px",
    cursor: "pointer",
  },
  flag: {
    fontSize: "11px",
    padding: "2px 6px",
    borderRadius: "999px",
    border: "1px solid #334155",
    display: "inline-block",
    marginBottom: "4px",
    color: "#cbd5f5",
  },
};
