import { useState } from "react";
import { calculateCanadaCRS } from "../calculators/canadaCalculator";

export default function CanadaPR() {
  const [form, setForm] = useState({
    age: "",
    education: "",
    canadaExp: "",
    foreignExp: "",
    clb: "",
    hasSpouse: "",
    pnp: "",
    jobOffer: "",
    sibling: ""
  });

  const [score, setScore] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCalculate() {
    const result = calculateCanadaCRS(form);
    setScore(result);
  }

  return (
    <div style={styles.container}>
      <h1>🇨🇦 Canada PR Points Calculator (CRS)</h1>
      <p>Estimate your CRS score instantly.</p>

      <div style={styles.card}>
        {/* AGE */}
        <label>Age</label>
        <select name="age" onChange={handleChange}>
          <option value="">Select</option>
          {Array.from({ length: 28 }, (_, i) => i + 18).map(a => (
            <option key={a} value={String(a)}>{a}</option>
          ))}
          <option value="45+">45+</option>
        </select>

        {/* EDUCATION */}
        <label>Education Level</label>
        <select name="education" onChange={handleChange}>
          <option value="">Select</option>
          <option value="hs">High School</option>
          <option value="diploma">1-year Diploma</option>
          <option value="bachelor">Bachelor’s Degree</option>
          <option value="two_plus">2+ Diplomas</option>
          <option value="masters">Masters</option>
          <option value="phd">PhD</option>
        </select>

        {/* CANADIAN EXPERIENCE */}
        <label>Canadian Work Experience (years)</label>
        <select name="canadaExp" onChange={handleChange}>
          <option value="">Select</option>
          <option value="0">0</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
        </select>

        {/* FOREIGN EXPERIENCE */}
        <label>Foreign Work Experience (years)</label>
        <select name="foreignExp" onChange={handleChange}>
          <option value="">Select</option>
          <option value="0">0</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3+ years</option>
        </select>

        {/* LANGUAGE */}
        <label>IELTS CLB Level</label>
        <select name="clb" onChange={handleChange}>
          <option value="">Select</option>
          <option value="7">CLB 7</option>
          <option value="8">CLB 8</option>
          <option value="9">CLB 9</option>
          <option value="10">CLB 10</option>
        </select>

        {/* SPOUSE */}
        <label>Do you have a spouse?</label>
        <select name="hasSpouse" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        {/* EXTRA POINTS */}
        <label>Provincial Nomination (PNP)?</label>
        <select name="pnp" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Valid Job Offer in Canada?</label>
        <select name="jobOffer" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Do you have a sibling in Canada?</label>
        <select name="sibling" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <button onClick={handleCalculate} style={styles.button}>Calculate CRS Score</button>
      </div>

      {score !== null && (
        <div style={styles.result}>
          <h2>Your CRS Score: {score}</h2>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 24px 40px",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px",
    padding: "20px",
    background: "#020617",
    borderRadius: "12px",
    border: "1px solid #1e293b",
  },
  button: {
    marginTop: "15px",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
  },
  result: {
    marginTop: "24px",
    padding: "20px",
    background: "#0f172a",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    textAlign: "center",
  },
};
