// src/calculators/nzCalculator.js

// Very simplified, *unofficial* Skilled Migrant–style calculator for New Zealand.
// This is only for learning/demo and NOT immigration advice.

export function calculateNZPoints(form) {
  let pts = 0;
  const breakdown = [];

  // 1. Age (rough buckets)
  const ageMap = {
    "20-29": 30,
    "30-39": 25,
    "40-44": 20,
    "45-54": 10,
    "55+": 0,
  };
  const agePts = ageMap[form.age] || 0;
  pts += agePts;
  breakdown.push({ label: "Age", points: agePts });

  // 2. Skilled employment in NZ (years)
  const nzEmploymentMap = {
    "0": 0,
    "1-2": 10,
    "3-5": 20,
    "6+": 30,
  };
  const nzEmpPts = nzEmploymentMap[form.nzEmployment] || 0;
  pts += nzEmpPts;
  breakdown.push({
    label: "Skilled employment in New Zealand",
    points: nzEmpPts,
  });

  // 3. Qualification level
  const qualMap = {
    level4_6: 40, // diplomas / trades (approx)
    level7_8: 50, // bachelor / grad dip
    level9_10: 60, // masters / PhD
  };
  const qualPts = qualMap[form.qualification] || 0;
  pts += qualPts;
  breakdown.push({ label: "Highest qualification", points: qualPts });

  // 4. NZ qualification bonus
  const nzQualPts = form.nzQualification === "yes" ? 10 : 0;
  pts += nzQualPts;
  breakdown.push({ label: "Qualification gained in New Zealand", points: nzQualPts });

  // 5. NZ work experience bonus (in a skilled role)
  const nzWorkBonusMap = {
    none: 0,
    "1-2": 10,
    "3-5": 15,
    "6+": 20,
  };
  const nzWorkBonusPts = nzWorkBonusMap[form.nzWorkBonus] || 0;
  pts += nzWorkBonusPts;
  breakdown.push({
    label: "Additional skilled work experience in NZ",
    points: nzWorkBonusPts,
  });

  // 6. Region – working outside Auckland (old system used this, keep for flavour)
  const regionPts = form.region === "outside_auckland" ? 30 : 0;
  pts += regionPts;
  breakdown.push({
    label: "Employment outside Auckland",
    points: regionPts,
  });

  // 7. Income bonus (approx)
  const incomeMap = {
    below_threshold: 0,
    threshold_to_1_5x: 20,
    "1_5x_to_2x": 40,
    "2x_plus": 60,
  };
  const incomePts = incomeMap[form.income] || 0;
  pts += incomePts;
  breakdown.push({
    label: "Skilled employment income level",
    points: incomePts,
  });

  // 8. Partner points (very simplified)
  const partnerMap = {
    no_partner_points: 0,
    partner_nz_study: 10,
    partner_skilled_employment: 20,
  };
  const partnerPts = partnerMap[form.partner] || 0;
  pts += partnerPts;
  breakdown.push({
    label: "Partner contribution",
    points: partnerPts,
  });

  // Interpret score (just to give users a sense)
  let verdict = "";
  if (pts < 100) {
    verdict = "Below typical competitiveness. You may need stronger employment, qualification, or income.";
  } else if (pts < 150) {
    verdict = "Moderate profile. May be competitive depending on occupation and policy settings.";
  } else if (pts < 180) {
    verdict = "Strong profile for Skilled Migrant–type pathways.";
  } else {
    verdict = "Very strong profile. Likely highly competitive under points-based selection.";
  }

  return { totalPoints: pts, breakdown, verdict };
}
