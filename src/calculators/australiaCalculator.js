// src/calculators/australiaCalculator.js

// Simple General Skilled Migration–style points calculator.
// This is an approximate, educational model, not official immigration advice.

export function calculateAustraliaPoints(form) {
  let pts = 0;
  const breakdown = [];

  // 1. Age
  const ageMap = {
    "18-24": 25,
    "25-32": 30,
    "33-39": 25,
    "40-44": 15,
    "45-49": 0,
  };
  const agePts = ageMap[form.age] || 0;
  pts += agePts;
  breakdown.push({ label: "Age", points: agePts });

  // 2. English language ability
  const engMap = {
    competent: 0,
    proficient: 10,
    superior: 20,
  };
  const engPts = engMap[form.english] || 0;
  pts += engPts;
  breakdown.push({ label: "English level", points: engPts });

  // 3. Overseas skilled employment (last 10 years)
  const overseasMap = {
    "0": 0,
    "1-2": 0,
    "3-4": 5,
    "5-7": 10,
    "8+": 15,
  };
  const overseasPts = overseasMap[form.overseasExp] || 0;
  pts += overseasPts;
  breakdown.push({
    label: "Overseas skilled employment",
    points: overseasPts,
  });

  // 4. Australian skilled employment (last 10 years)
  const ausMap = {
    "0": 0,
    "1-2": 5,
    "3-4": 10,
    "5-7": 15,
    "8+": 20,
  };
  const ausPts = ausMap[form.ausExp] || 0;
  pts += ausPts;
  breakdown.push({
    label: "Australian skilled employment",
    points: ausPts,
  });

  // 5. Educational qualification
  const eduMap = {
    trade: 10, // trade qualification / diploma
    bachelor: 15,
    masters_phd: 20,
  };
  const eduPts = eduMap[form.education] || 0;
  pts += eduPts;
  breakdown.push({ label: "Education", points: eduPts });

  // 6. Australian study requirement (2 academic years)
  const ausStudyPts = form.ausStudy === "yes" ? 5 : 0;
  pts += ausStudyPts;
  breakdown.push({ label: "Australian study requirement", points: ausStudyPts });

  // 7. Specialist education (STEM Masters/PhD in Aus)
  const specialistPts = form.specialistEdu === "yes" ? 10 : 0;
  pts += specialistPts;
  breakdown.push({ label: "Specialist education in Australia", points: specialistPts });

  // 8. Study in regional Australia
  const regionalPts = form.regionalStudy === "yes" ? 5 : 0;
  pts += regionalPts;
  breakdown.push({ label: "Study in regional Australia", points: regionalPts });

  // 9. Professional year in Australia
  const profYearPts = form.profYear === "yes" ? 5 : 0;
  pts += profYearPts;
  breakdown.push({ label: "Professional Year in Australia", points: profYearPts });

  // 10. Credentialed community language
  const cclPts = form.ccl === "yes" ? 5 : 0;
  pts += cclPts;
  breakdown.push({ label: "Credentialed community language", points: cclPts });

  // 11. Partner / single status
  // Very simplified interpretation of current rules.
  const partnerMap = {
    single: 10,
    skilled_partner: 10,
    english_partner: 5,
    other_partner: 0,
  };
  const partnerPts = partnerMap[form.partner] || 0;
  pts += partnerPts;
  breakdown.push({ label: "Partner / single status", points: partnerPts });

  // Simple interpretation of competitiveness
  let verdict = "";
  if (pts < 65) {
    verdict = "Below minimum invitation threshold (65 points).";
  } else if (pts < 75) {
    verdict = "Meets minimum threshold. Competitive in low-demand occupations.";
  } else if (pts < 85) {
    verdict = "Strong profile. Competitive for many skilled occupations.";
  } else {
    verdict = "Very strong profile. Highly competitive for invitations.";
  }

  return { totalPoints: pts, breakdown, verdict };
}
