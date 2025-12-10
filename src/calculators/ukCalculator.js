// src/calculators/ukCalculator.js

// Very simplified, *unofficial* UK Skilled Worker–style points calculator.
// Based on the idea of mandatory + tradeable characteristics, but heavily simplified.
// For learning/demo only – not immigration advice.

export function calculateUKPoints(form) {
  let pts = 0;
  const breakdown = [];
  const notes = [];

  // 1. Job offer from a licensed sponsor
  const jobOfferPts = form.jobOffer === "yes" ? 20 : 0;
  pts += jobOfferPts;
  breakdown.push({ label: "Job offer from licensed sponsor", points: jobOfferPts });
  if (form.jobOffer === "no") {
    notes.push("Most UK Skilled Worker routes require a valid job offer from a licensed sponsor.");
  }

  // 2. Skill level of the role
  const skillMap = {
    non_eligible: 0,
    eligible_skilled: 20,
    phd_level: 25,
  };
  const skillPts = skillMap[form.skillLevel] || 0;
  pts += skillPts;
  breakdown.push({ label: "Skill level of occupation", points: skillPts });
  if (form.skillLevel === "non_eligible") {
    notes.push("The role appears non-eligible. Most Skilled Worker roles must meet minimum skill codes.");
  }

  // 3. English language ability (at least B1)
  const englishPts = form.english === "yes" ? 10 : 0;
  pts += englishPts;
  breakdown.push({ label: "English language requirement met", points: englishPts });
  if (form.english === "no") {
    notes.push("English at B1 level or above is normally mandatory.");
  }

  // 4. Salary level (relative to going rate / general threshold)
  const salaryMap = {
    below_minimum: 0,
    meets_minimum: 10,
    high: 20,
    very_high: 30,
  };
  const salaryPts = salaryMap[form.salaryBand] || 0;
  pts += salaryPts;
  breakdown.push({ label: "Salary band", points: salaryPts });

  // 5. Shortage occupation / health & care / high-demand role
  const shortagePts = form.shortage === "yes" ? 20 : 0;
  pts += shortagePts;
  breakdown.push({
    label: "Shortage occupation / high-demand route",
    points: shortagePts,
  });

  // 6. Education level (simplified)
  const eduMap = {
    none: 0,
    bachelors: 10,
    stem_phd: 20,
  };
  const eduPts = eduMap[form.education] || 0;
  pts += eduPts;
  breakdown.push({ label: "Education level", points: eduPts });

  // 7. UK study experience
  const ukStudyPts = form.ukStudy === "yes" ? 10 : 0;
  pts += ukStudyPts;
  breakdown.push({ label: "Previous study in the UK", points: ukStudyPts });

  // 8. UK work experience
  const ukExpMap = {
    none: 0,
    "1-2": 5,
    "3+": 10,
  };
  const ukExpPts = ukExpMap[form.ukExperience] || 0;
  pts += ukExpPts;
  breakdown.push({ label: "Previous skilled work in the UK", points: ukExpPts });

  // Interpret score
  // Classic Skilled Worker target is 70 points (with some mandatory components).
  let verdict = "";
  if (pts < 50) {
    verdict = "Below typical competitiveness. You may not meet mandatory or tradeable requirements.";
  } else if (pts < 70) {
    verdict = "Close to the 70-point concept, but you may need a stronger salary, role, or route.";
  } else if (pts < 90) {
    verdict = "Strong profile for a UK Skilled Worker–style route, assuming mandatory criteria are met.";
  } else {
    verdict = "Very strong profile. Likely highly competitive under points-based selection, if all mandatory rules are satisfied.";
  }

  if (form.jobOffer === "no" || form.skillLevel === "non_eligible" || form.english === "no") {
    notes.push(
      "Even with a high numeric score here, missing mandatory conditions (job offer, eligible role, English) can stop an application."
    );
  }

  return { totalPoints: pts, breakdown, verdict, notes };
}
