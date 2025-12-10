// src/pages/GermanyPR.jsx
import { useState } from "react";
import { calculateGermanyPoints } from "../calculators/germanyCalculator";

export default function GermanyPR() {
  const [form, setForm] = useState({
    age: "30-39",
    education: "bachelor",
    german: "b1",
    jobOffer: "yes",
    salaryBand: "meets_minimum",
    shortage: "no",
    experienceDE: "none",
    experienceEU: "none",
    region: "anywhere",
    spouseGerman: "none",
  });

  const [result, setResult] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCalculate = () => {
    const res = calculateGermanyPoints(form);
    setResult(res);
  };

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <h1 style={styles.title}>🇩🇪 Germany Skilled Migration Points (Demo)</h1>
        <p style={styles.subtitle}>
          This calculator gives an approximate, points-style view of how your
          profile might look for German skilled routes (e.g. Skilled Worker,
          EU Blue Card). Germany doesn&apos;t use a formal points system like this
          yet – this is for education only. Always rely on official
          information from German authorities.
        </p>

        <div style={styles.card}>
          {/* LEFT: form inputs */}
          <div style={styles.formGrid}>
            {/* Age */}
            <div style={styles.field}>
              <label style={styles.label}>Age</label>
              <select
                value={form.age}
                onChange={handleChange("age")}
                style={styles.select}
              >
                <option value="<30">&lt; 30</option>
                <option value="30-39">30 – 39</option>
                <option value="40-44">40 – 44</option>
                <option value="45-54">45 – 54</option>
                <option value="55+">55 or above</option>
              </select>
            </div>

            {/* Education */}
            <div style={styles.field}>
              <label style={styles.label}>Highest recognised qualification</label>
              <select
                value={form.education}
                onChange={handleChange("education")}
                style={styles.select}
              >
                <option value="vocational">
                  Recognised vocational training (Ausbildung, etc.)
                </option>
                <option value="bachelor">Bachelor&apos;s degree</option>
                <option value="master">Master&apos;s degree</option>
                <option value="phd">PhD / Doctorate</option>
              </select>
            </div>

            {/* German language */}
            <div style={styles.field}>
              <label style={styles.label}>German language level</label>
              <select
                value={form.german}
                onChange={handleChange("german")}
                style={styles.select}
              >
                <option value="none">No German yet</option>
                <option value="a1">A1</option>
                <option value="a2">A2</option>
                <option value="b1">B1</option>
                <option value="b2">B2</option>
                <option value="c1">C1 or above</option>
              </select>
            </div>

            {/* Job offer */}
            <div style={styles.field}>
              <label style={styles.label}>
                Do you have a concrete job offer / contract in Germany?
              </label>
              <select
                value={form.jobOffer}
                onChange={handleChange("jobOffer")}
                style={styles.select}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Salary band */}
            <div style={styles.field}>
              <label style={styles.label}>
                Expected gross salary (relative to official thresholds)
              </label>
              <select
                value={form.salaryBand}
                onChange={handleChange("salaryBand")}
                style={styles.select}
              >
                <option value="below_minimum">
                  Below typical skilled / Blue Card minimum
                </option>
                <option value="meets_minimum">
                  Around the minimum threshold
                </option>
                <option value="1_2x">
                  Around 1.2× threshold (stronger)
                </option>
                <option value="1_5x_plus">
                  1.5× or more of the typical threshold
                </option>
              </select>
            </div>

            {/* Shortage occupation */}
            <div style={styles.field}>
              <label style={styles.label}>
                Is your role in a shortage field (e.g. IT, engineering, healthcare, MINT)?
              </label>
              <select
                value={form.shortage}
                onChange={handleChange("shortage")}
                style={styles.select}
              >
                <option value="no">No / unsure</option>
                <option value="yes">Yes, clearly shortage / MINT</option>
              </select>
            </div>

            {/* Experience in Germany */}
            <div style={styles.field}>
              <label style={styles.label}>
                Prior work or study experience in Germany
              </label>
              <select
                value={form.experienceDE}
                onChange={handleChange("experienceDE")}
                style={styles.select}
              >
                <option value="none">None yet</option>
                <option value="1-2">1 – 2 years</option>
                <option value="3-5">3 – 5 years</option>
                <option value="6+">6+ years</option>
              </select>
            </div>

            {/* Experience in EU */}
            <div style={styles.field}>
              <label style={styles.label}>
                Professional experience in other EU countries
              </label>
              <select
                value={form.experienceEU}
                onChange={handleChange("experienceEU")}
                style={styles.select}
              >
                <option value="none">None</option>
                <option value="1-3">1 – 3 years</option>
                <option value="4+">4+ years</option>
              </select>
            </div>

            {/* Region preference */}
            <div style={styles.field}>
              <label style={styles.label}>
                Would you consider high-demand regions (smaller cities / East Germany)?
              </label>
              <select
                value={form.region}
                onChange={handleChange("region")}
                style={styles.select}
              >
                <option value="anywhere">Prefer large cities only</option>
                <option value="high_demand_region">
                  Yes, open to high-demand / regional areas
                </option>
              </select>
            </div>

            {/* Spouse German */}
            <div style={styles.field}>
              <label style={styles.label}>
                Spouse / partner German level (if joining you)
              </label>
              <select
                value={form.spouseGerman}
                onChange={handleChange("spouseGerman")}
                style={styles.select}
              >
                <option value="none">No spouse / no German</option>
                <option value="basic">Basic (A1–A2)</option>
                <option value="good">Good (B1+)</option>
              </select>
            </div>
          </div>

          {/* RIGHT: results */}
          <div style={styles.sidePanel}>
            <button style={styles.button} onClick={handleCalculate}>
              Calculate Germany points
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

                {result.notes && result.notes.length > 0 && (
                  <>
                    <h4 style={styles.notesTitle}>Important notes</h4>
                    <ul style={styles.notesList}>
                      {result.notes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))}
                    </ul>
                  </>
                )}

                <p style={styles.disclaimer}>
                  Disclaimer: This is a conceptual, simplified model created for
                  demonstration. Germany&apos;s real immigration rules focus on job
                  offer, recognition of qualifications, salary thresholds and
                  other legal conditions rather than a single points score. Always
                  confirm details with official German government sources or a
                  qualified adviser.
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
    background: "#38bdf8",
    color: "#020617",
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
  notesTitle: {
    fontSize: "13px",
    marginTop: "10px",
    marginBottom: "4px",
    color: "#e5e7eb",
  },
  notesList: {
    margin: 0,
    paddingLeft: "18px",
    fontSize: "12px",
    color: "#d1d5db",
  },
  disclaimer: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#6b7280",
    lineHeight: 1.5,
  },
};
