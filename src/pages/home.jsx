import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>🌍 Global PR Points Calculator</h1>
      <p>Your one-stop platform to compare PR eligibility for major countries.</p>

      <div style={styles.grid}>
        <Link to="/canada" style={styles.card}>🇨🇦 Canada PR</Link>
        <Link to="/australia" style={styles.card}>🇦🇺 Australia PR</Link>
        <Link to="/new-zealand" style={styles.card}>🇳🇿 New Zealand PR</Link>
        <Link to="/uk" style={styles.card}>🇬🇧 UK Skilled Worker Points</Link>
        <Link to="/germany" style={styles.card}>🇩🇪 Germany Points System</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    padding: "20px",
    background: "#f1f5f9",
    borderRadius: "10px",
    textDecoration: "none",
    color: "black",
    fontWeight: "600",
    fontSize: "18px",
  }
};

