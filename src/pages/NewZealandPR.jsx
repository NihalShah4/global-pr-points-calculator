// src/pages/NewZealandPR.jsx
import { useState } from "react";
import { calculateNZPoints } from "../calculators/nzCalculator";

export default function NewZealandPR() {
  const [form, setForm] = useState({
    age: "20-29",
    nzEmployment: "1-2",
    qualification: "level7_8",
    nzQualification: "no",
    nzWorkBonus: "none",
    region: "auckland",
    income: "threshold_to_1_5x",
    partner: "no_partner_points",
  });

  const [result, setResult] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCalculate = () => {
    const res = calculateNZPoints(form);
    setResult(res);
  };

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <h1 style={styles.title}>🇳🇿 New Zealand PR Points Calculator</h1>
        <p style={styles.subtitle}>
          Rough, educational-only calculator inspired by New Zealand’s
          points-based Skilled Migrant–style settings. Policies change often –
          always verify against official Immigration NZ information.
        </p>

        <div style={styles.card}>
          {/* LEFT: form grid */}
          <div style={styles.formGrid}>
            {/* Age */}
            <div style={styles.field}>
              <label style={styles.label}>Age</label>
              <select
                value={form.age}
                onChange={handleChange("age")}
                style={styles.select}
              >
                <option value="20-29">20 – 29</option>
                <option value="30-39">30 – 39</option>
                <option value="40-44">40 – 44</option>
                <option value="45-54">45 – 54</option>
                <option value="55+">55 or above</option>
              </select>
            </div>

            {/* Skilled employment in NZ */}
            <div style={styles.field}>
              <label style={styles.label}>
                Skilled employment in New Zealand (years)
              </label>
              <select
                value={form.nzEmployment}
                onChange={handleChange("nzEmployment")}
                style={styles.select}
              >
                <option value="0">No skilled employment yet</option>
                <option value="1-2">1 – 2 years</option>
                <option value="3-5">3 – 5 years</option>
                <option value="6+">6+ years</option>
              </select>
            </div>

            {/* Qualification level */}
            <div style={styles.field}>
              <label style={styles.label}>Highest qualification level</label>
              <select
                value={form.qualification}
                onChange={handleChange("qualification")}
                style={styles.select}
              >
                <option value="level4_6">
                  Level 4–6: Trades / diplomas (approx.)
                </option>
                <option value="level7_8">
                  Level 7–8: Bachelor / graduate diploma
                </option>
                <option value="level9_10">
                  Level 9–10: Masters / Doctorate
                </option>
              </select>
            </div>

            {/* Qualification gained in NZ */}
            <div style={styles.field}>
              <label style={styles.label}>
                Was your main qualification gained in New Zealand?
              </label>
              <select
                value={form.nzQualification}
                onChange={handleChange("nzQualification")}
                style={styles.select}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {/* Extra NZ work bonus */}
            <div style={styles.field}>
              <label style={styles.label}>
                Additional skilled work experience in NZ (beyond minimum)
              </label>
              <select
                value={form.nzWorkBonus}
                onChange={handleChange("nzWorkBonus")}
                style={styles.select}
              >
                <option value="none">None / just starting</option>
                <option value="1-2">1 – 2 extra years</option>
                <option value="3-5">3 – 5 extra years</option>
                <option value="6+">6+ extra years</option>
              </select>
            </div>

            {/* Region */}
            <div style={styles.field}>
              <label style={styles.label}>
                Where is / will your skilled employment be located?
              </label>
              <select
                value={form.region}
                onChange={handleChange("region")}
                style={styles.select}
              >
                <option value="auckland">Auckland</option>
                <option value="outside_auckland">Outside Auckland</option>
              </select>
            </div>

            {/* Income */}
            <div style={styles.field}>
              <label style={styles.label}>
                Skilled employment income (relative to threshold)
              </label>
              <select
                value={form.income}
                onChange={handleChange("income")}
                style={styles.select}
              >
                <option value="below_threshold">
                  Below skilled income threshold
                </option>
                <option value="threshold_to_1_5x">
                  At or up to 1.5× skilled threshold
                </option>
                <option value="1_5x_to_2x">
                  1.5× – 2× skilled threshold
                </option>
                <option value="2x_plus">
                  2× or more of skilled threshold
                </option>
              </select>
            </div>

            {/* Partner points */}
            <div style={styles.field}>
              <label style={styles.label}>
                Partner contribution (if applicable)
              </label>
              <select
                value={form.partner}
                onChange={handleChange("partner")}
                style={styles.select}
              >
                <option value="no_partner_points">
                  No partner points / not applying with partner
                </option>
                <option value="partner_nz_study">
                  Partner with NZ study / qualification
                </option>
                <option value="partner_skilled_employment">
                  Partner with skilled employment in NZ
                </option>
              </select>
            </div>
          </div>

          {/* RIGHT: calculate + results */}
          <div style={styles.sidePanel}>
            <button style={styles.button} onClick={handleCalculate}>
              Calculate New Zealand PR points
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
                  Disclaimer: This tool is a simplified approximation of
                  points-based concepts, created for demonstration only. It is
                  not official advice. Always check policy details on the
                  Immigration New Zealand website or speak with a licensed
                  immigration adviser.
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
    background: "#22c55e",
    color: "black",
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
