export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        © {new Date().getFullYear()} Global PR Points Calculator · Built by Nihal Shah
      </p>
      <p style={styles.sub}>
        Not an immigration consultancy. Always verify rules on official government websites.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
    background: "#0f172a",
    color: "white",
    fontSize: "14px",
  },
  sub: {
    marginTop: "4px",
    fontSize: "12px",
    opacity: 0.8,
  },
};
