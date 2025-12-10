// src/calculators/germanyCalculator.js

// Simplified, *unofficial* points-style calculator for Germany.
// It loosely mixes ideas from the EU Blue Card / Skilled Worker rules,
// just for learning + comparison across countries.
// NOT legal or immigration advice.

export function calculateGermanyPoints(form) {
  let pts = 0;
  const breakdown = [];

  // 1. Age (younger = more points, but still allow older)
  const ageMap = {
    "<30": 30,
    "30-39": 25,
    "40-44": 18,
    "45-54": 10,
    "55+": 0,
  };
  const agePts = ageMap[form.age] || 0;
  pts += agePts;
  breakdown.push({ label: "Age", points: agePts });

  // 2. Education
  const eduMap = {
    vocational: 30, // Ausbildung / recognised vocational
    bachelor: 40,
    master: 50,
    phd: 60,
  };
  const eduPts = eduMap[form.education] || 0;
  pts += eduPts;
  breakdown.push({ label: "Recognised qualification level", points: eduPts });

  // 3. German language
  const langMap = {
    none: 0,
    a1: 5,
    a2: 10,
    b1: 20,
    b2: 25,
    c1: 30,
  };
  const langPts = langMap[form.german] || 0;
  pts += langPts;
  breakdown.push({ label: "German language proficiency", points: langPts });

  // 4. Job offer / contract in Germany
  const jobOfferPts = form.jobOffer === "yes" ? 20 : 0;
  pts += jobOfferPts;
  breakdown.push({ label: "Job offer / work contract in Germany", points: jobOfferPts });

  // 5. Salary level relative to threshold
  const salaryMap = {
    below_minimum: 0,
    meets_minimum: 20,   // roughly at threshold
    "1_2x": 30,          // 1.2x threshold
    "1_5x_plus": 40,     // 1.5x or higher
  };
  const salaryPts = salaryMap[form.salaryBand] || 0;
  pts += salaryPts;
  breakdown.push({ label: "Salary relative to Blue Card / skilled threshold", points: salaryPts });

  // 6. Shortage / MINT / IT occupation
  const shortagePts = form.shortage === "yes" ? 15 : 0;
  pts += shortagePts;
  breakdown.push({
    label: "Shortage occupation (e.g. MINT, healthcare, IT)",
    points: shortagePts,
  });

  // 7. Experience in Germany
  const deExpMap = {
    none: 0,
    "1-2": 10,
    "3-5": 15,
    "6+": 20,
  };
  const deExpPts = deExpMap[form.experienceDE] || 0;
  pts += deExpPts;
  breakdown.push({ label: "Work / study experience in Germany", points: deExpPts });

  // 8. Experience in EU (outside Germany)
  const euExpMap = {
    none: 0,
    "1-3": 5,
    "4+": 10,
  };
  const euExpPts = euExpMap[form.experienceEU] || 0;
  pts += euExpPts;
  breakdown.push({ label: "Professional experience in other EU countries", points: euExpPts });

  // 9. Region bonus – willing to work in smaller cities / East Germany
  const regionPts = form.region === "high_demand_region" ? 10 : 0;
  pts += regionPts;
  breakdown.push({
    label: "Willing to work in high-demand / regional areas",
    points: regionPts,
  });

  // 10. Spouse / partner language integration
  const spouseMap = {
    none: 0,
    basic: 5,
    good: 10,
  };
  const spousePts = spouseMap[form.spouseGerman] || 0;
  pts += spousePts;
  breakdown.push({
    label: "Spouse / partner German language",
    points: spousePts,
  });

  // Score interpretation (totals here are arbitrary but intuitive)
  let verdict = "";
  if (pts < 70) {
    verdict =
      "Profile looks relatively weak under this simplified model. You may need stronger language, salary, or qualification.";
  } else if (pts < 90) {
    verdict =
      "Moderate profile. Might fit some skilled worker options depending on occupation and salary.";
  } else if (pts < 110) {
    verdict =
      "Strong profile for Germany’s skilled routes, especially if job offer and salary thresholds are truly met.";
  } else {
    verdict =
      "Very strong profile. Likely competitive for multiple skilled immigration options, subject to official checks.";
  }

  const notes = [];
  if (form.jobOffer === "no") {
    notes.push("Most current German skilled routes still expect a concrete job offer or contract.");
  }
  if (form.salaryBand === "below_minimum") {
    notes.push("Salaries below official thresholds usually do not qualify for Blue Card or some skilled visas.");
  }
  if (form.german === "none" || form.german === "a1") {
    notes.push("Improving German language to at least B1/B2 can significantly increase your practical chances.");
  }

  return { totalPoints: pts, breakdown, verdict, notes };
}
