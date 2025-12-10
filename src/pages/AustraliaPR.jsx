// src/pages/AustraliaPR.jsx
import { useState } from "react";
import { calculateAustraliaPoints } from "../calculators/australiaCalculator";

export default function AustraliaPR() {
  const [form, setForm] = useState({
    age: "25-32",
    english: "proficient",
    overseasExp: "3-4",
    ausExp: "0",
    education: "bachelor",
    ausStudy: "no",
    specialistEdu: "no",
    regionalStudy: "no",
    profYear: "no",
    ccl: "no",
    partner: "single",
  });

  const [result, setResult] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCalculate = () => {
    const res = calculateAustraliaPoints(form);
    setResult(res);
  };

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <h1 style={styles.title}>🇦🇺 Australia PR Points Calculator</h1>
        <p style={styles.subtitle}>
          Rough General Skilled Migration (GSM) style calculator. This tool is
          for educational purposes only – always verify against the official
          Department of Home Affairs guidelines.
        </p>

        <div style={styles.card}>
          {/* LEFT: form fields */}
          <div style={styles.formGrid}>
            {/* Age */}
            <div style={styles.field}>
              <label style={styles.label}>Age</label>
              <select
                value={form.age}
                onChange={handleChange("age")}
                style={styles.select}
              >
                <option value="18-24">18 – 24</option>
                <option value="25-32">25 – 32</option>
                <option value="33-39">33 – 39</option>
                <option value="40-44">40 – 44</option>
                <option value="45-49">45 – 49</option>
              </select>
            </div>

            {/* English */}
            <div style={styles.field}>
              <label style={styles.label}>English language ability</label>
              <select
                value={form.english}
                onChange={handleChange("english")}
                style={styles.select}
              >
                <option value="competent">Competent (IELTS 6 / PTE 50)</option>
                <option value="proficient">Proficient (IELTS 7 / PTE 65)</option>
                <option value="superior">Superior (IELTS 8 / PTE 79)</option>
              </select>
            </div>

            {/* Overseas experience */}
            <div style={styles.field}>
              <label style={styles.label}>
                Overseas skilled employment (last 10 years)
              </label>
              <select
                value={form.overseasExp}
                onChange={handleChange("overseasExp")}
                style={styles.select}
              >
                <option value="0">0 years</option>
                <option value="1-2">1 – 2 years</option>
                <option value="3-4">3 – 4 years</option>
                <option value="5-7">5 – 7 years</option>
                <option value="8+">8+ years</option>
              </select>
            </div>

            {/* Australian experience */}
            <div style={styles.field}>
              <label style={styles.label}>
                Australian skilled employment (last 10 years)
              </label>
              <select
                value={form.ausExp}
                onChange={handleChange("ausExp")}
                style={styles.select}
              >
                <option value="0">0 years</option>
                <option value="1-2">1 – 2 years</option>
                <option value="3-4">3 – 4 years</option>
                <option value="5-7">5 – 7 years</option>
                <option value="8+">8+ years</option>
              </select>
            </div>

            {/* Education */}
            <div style={styles.field}>
              <label style={styles.label}>Highest qualification</label>
              <select
                value={form.education}
                onChange={handleChange("education")}
                style={styles.select}
              >
                <option value="trade">
                  Trade qualification / Diploma / AQF III–IV
                </option>
                <option value="bachelor">Bachelor degree (or equivalent)</option>
                <option value="masters_phd">Masters / PhD</option>
              </select>
            </div>

            {/* Australian study requirement */}
            <div style={styles.field}>
              <label style={styles.label}>
                Completed at least 2 academic years of study in Australia?
              </label>
              <select
                value={form.ausStudy}
                onChange={handleChange("ausStudy")}
                style={styles.select}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {/* Specialist education */}
            <div style={styles.field}>
              <label style={styles.label}>
                Australian specialist education (STEM Masters/PhD)?
              </label>
              <select
                value={form.specialistEdu}
                onChange={handleChange("specialistEdu")}
                style={styles.select}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {/* Regional study */}
            <div style={styles.field}>
              <label style={styles.label}>
                Completed eligible study in regional Australia?
              </label>
              <select
                value={form.regionalStudy}
                onChange={handleChange("regionalStudy")}
                style={styles.select}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {/* Professional year */}
            <div style={styles.field}>
              <label style={styles.label}>
                Completed a Professional Year in Australia (Accounting, IT, or
                Engineering)?
              </label>
              <select
                value={form.profYear}
                onChange={handleChange("profYear")}
                style={styles.select}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {/* CCL */}
            <div style={styles.field}>
              <label style={styles.label}>
                Credentialed Community Language (NAATI CCL) passed?
              </label>
              <select
                value={form.ccl}
                onChange={handleChange("ccl")}
                style={styles.select}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {/* Partner */}
            <div style={styles.field}>
              <label style={styles.label}>Partner / relationship status</label>
              <select
                value={form.partner}
                onChange={handleChange("partner")}
                style={styles.select}
              >
                <option value="single">
                  Single / partner is Australian citizen or PR
                </option>
                <option value="skilled_partner">
                  Partner with skilled assessment + competent English
                </option>
                <option value="english_partner">
                  Partner with competent English only
                </option>
                <option value="other_partner">
                  Partner does not meet above criteria
                </option>
              </select>
            </div>
          </div>

          {/* RIGHT: button + result */}
          <div style={styles.sidePanel}>
            <button style={styles.button} onClick={handleCalculate}>
              Calculate Australia PR points
            </button>

            {result && (
              <div style={styles.result}>
                <p style={styles.pointsLabel}>Estimated total points</p>
                <p style={styles.pointsValue}>{result.totalPoints}</p>
                <p style={styles.verdict}>{result.verdict}</p>

                <h3 style={styles.breakdownTitle}>Breakdown</h3>
                <ul style={styles.breakdownList}>
                  {result.breakdown.map((item) => (
                    <li key={item.label} style={styles.breakdownItem}>
                      <span>{item.label}</span>
                      <span>{item.points}</span>
                    </li>
                  ))}
                </ul>

                <p style={styles.disclaimer}>
                  Disclaimer: This is a simplified, unofficial calculator.
                  Immigration policy changes frequently – always confirm details
                  on the official Department of Home Affairs website or with a
                  licensed migration agent.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: "1100px",
    margin: "40px auto 40px",
    padding: "0 32px 40px",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#cbd5f5",
    marginBottom: "24px",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 2.1fr) minmax(0, 1.2fr)",
    gap: "24px",
    padding: "24px",
    background: "#020617",
    borderRadius: "16px",
    border: "1px solid #1e293b",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px 20px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    color: "#9ca3af",
  },
  select: {
    padding: "8px 10px",
    borderRadius: "8px",
    border: "1px solid #374151",
    background: "#020617",
    color: "#e5e7eb",
    fontSize: "13px",
  },
  sidePanel: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  button: {
    padding: "12px 14px",
    borderRadius: "999px",
    border: "none",
    background: "#2563eb",
    color: "white",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
  },
  result: {
    padding: "18px 16px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    background: "#020617",
  },
  pointsLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#9ca3af",
    marginBottom: "4px",
  },
  pointsValue: {
    fontSize: "32px",
    fontWeight: 700,
    margin: "0 0 4px",
  },
  verdict: {
    fontSize: "13px",
    color: "#cbd5f5",
    marginBottom: "12px",
  },
  breakdownTitle: {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#9ca3af",
    marginTop: "8px",
    marginBottom: "6px",
  },
  breakdownList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "13px",
  },
  breakdownItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px 0",
    borderBottom: "1px dashed #1f2933",
  },
  disclaimer: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#6b7280",
    lineHeight: 1.5,
  },
};
