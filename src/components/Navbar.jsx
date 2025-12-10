import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🌍 Global PR Points Calculator</div>
      
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/canada">Canada</Link>
        <Link to="/australia">Australia</Link>
        <Link to="/new-zealand">New Zealand</Link>
        <Link to="/uk">UK</Link>
        <Link to="/germany">Germany</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "15px 30px",
    background: "#0f172a",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: { 
    fontSize: "20px",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "20px",
  }
};
