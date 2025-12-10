// src/pages/UKPR.jsx
import { useState } from "react";
import { calculateUKPoints } from "../calculators/ukCalculator";

export default function UKPR() {
  const [form, setForm] = useState({
    jobOffer: "yes",
    skillLevel: "eligible_skilled",
    english: "yes",
    salaryBand: "meets_minimum",
    shortage: "no",
    education: "bachelors",
    ukStudy: "no",
    ukExperience: "none",
  });

  const [result, setResult] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCalculate = () => {
    const res = calculateUKPoints(form);
    setResult(res);
  };

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <h1 style={styles.title}>🇬🇧 UK Skilled Worker–Style Points Calculator</h1>
        <p style={styles.subtitle}>
          Approximate, educational-only tool inspired by the UK Skilled Worker points
          framework (job offer, skilled role, English, salary, shortage occupations, etc.).
          This is not official advice – always check the latest rules on GOV.UK.
        </p>

        <div style={styles.card}>
          {/* LEFT: form */}
          <div style={styles.formGrid}>
            {/* Job offer */}
            <div style={styles.field}>
              <label style={styles.label}>
                Do you have a valid job offer from a licensed UK sponsor?
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

            {/* Skill level */}
            <div style={styles.field}>
              <label style={styles.label}>
                Skill level / occupation type
              </label>
              <select
                value={form.skillLevel}
                onChange={handleChange("skillLevel")}
                style={styles.select}
              >
                <option value="eligible_skilled">
                  Eligible skilled occupation (RQF 3+)
                </option>
                <option value="phd_level">
                  Highly skilled / PhD-level role
                </option>
                <option value="non_eligible">
                  Non-eligible / low-skilled role
                </option>
              </select>
            </div>

            {/* English */}
            <div style={styles.field}>
              <label style={styles.label}>
                English language at B1 level (or equivalent) met?
              </label>
              <select
                value={form.english}
                onChange={handleChange("english")}
                style={styles.select}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Salary band */}
            <div style={styles.field}>
              <label style={styles.label}>
                Salary level (relative to general threshold / going rate)
              </label>
              <select
                value={form.salaryBand}
                onChange={handleChange("salaryBand")}
                style={styles.select}
              >
                <option value="below_minimum">
                  Below the usual Skilled Worker minimum / going rate
                </option>
                <option value="meets_minimum">
                  Meets general threshold / going rate
                </option>
                <option value="high">
                  Higher than minimum (tradeable points)
                </option>
                <option value="very_high">
                  Very high salary (top band)
                </option>
              </select>
            </div>

            {/* Shortage occupation */}
            <div style={styles.field}>
              <label style={styles.label}>
                Is the role on a shortage occupation / health &amp; care / high-demand list?
              </label>
              <select
                value={form.shortage}
                onChange={handleChange("shortage")}
                style={styles.select}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {/* Education */}
            <div style={styles.field}>
              <label style={styles.label}>Highest education</label>
              <select
                value={form.education}
                onChange={handleChange("education")}
                style={styles.select}
              >
                <option value="none">No degree / below bachelor</option>
                <option value="bachelors">Bachelor’s degree (or equivalent)</option>
                <option value="stem_phd">
                  STEM PhD / very highly relevant doctorate
                </option>
              </select>
            </div>

            {/* UK study */}
            <div style={styles.field}>
              <label style={styles.label}>
                Have you previously studied in the UK on a valid visa?
              </label>
              <select
                value={form.ukStudy}
                onChange={handleChange("ukStudy")}
                style={styles.select}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {/* UK work experience */}
            <div style={styles.field}>
              <label style={styles.label}>
                Skilled work experience in the UK (e.g. Graduate / other routes)
              </label>
              <select
                value={form.ukExperience}
                onChange={handleChange("ukExperience")}
                style={styles.select}
              >
                <option value="none">None</option>
                <option value="1-2">1 – 2 years</option>
                <option value="3+">3+ years</option>
              </select>
            </div>
          </div>

          {/* RIGHT: results */}
          <div style={styles.sidePanel}>
            <button style={styles.button} onClick={handleCalculate}>
              Calculate UK points
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
                  Disclaimer: This calculator is a simplified illustration of
                  how a points-style assessment might look. The real UK system
                  has strict mandatory requirements and detailed salary / code
                  rules. Always base decisions on the official GOV.UK guidance
                  or professional advice.
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
    background: "#a855f7",
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
