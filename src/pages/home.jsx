import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.container}>
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
      </section>
    </main>
  );
}

const styles = {
  page: {
    width: "100%",
  },
  container: {
    width: "100%",
    margin: "40px 32px 40px",       // center horizontally
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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "18px 16px",
    background: "#020617",
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
