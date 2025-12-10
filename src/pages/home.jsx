const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",              // wider content area
    margin: "40px auto 0",          // <-- center it
    padding: "0 24px 40px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
