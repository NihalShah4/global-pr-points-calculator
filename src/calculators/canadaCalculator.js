export function calculateCanadaCRS(form) {
  let score = 0;

  // AGE
  const agePoints = {
    "18": 99, "19": 105, "20": 110, "21": 110, "22": 110, "23": 110,
    "24": 110, "25": 110, "26": 110, "27": 110, "28": 110, "29": 110,
    "30": 105, "31": 99, "32": 94, "33": 88, "34": 83,
    "35": 77, "36": 72, "37": 66, "38": 61, "39": 55,
    "40": 50, "41": 39, "42": 28, "43": 17, "44": 6, "45+": 0
  };
  
  score += agePoints[form.age] || 0;

  // EDUCATION
  const eduPoints = {
    hs: 30,
    diploma: 90,
    bachelor: 120,
    two_plus: 128,
    masters: 135,
    phd: 150
  };
  score += eduPoints[form.education] || 0;

  // CANADIAN WORK EXPERIENCE
  const canWork = {
    "0": 0, "1": 40, "2": 53, "3": 64, "4": 72, "5": 80
  };
  score += canWork[form.canadaExp] || 0;

  // FOREIGN WORK EXPERIENCE
  const foreignExp = {
    "0": 0, "1": 13, "2": 25, "3": 50
  };
  score += foreignExp[form.foreignExp] || 0;

  // LANGUAGE SCORE (CLB-based)
  const clbPoints = {
    "7": 17,
    "8": 22,
    "9": 29,
    "10": 32
  };
  score += clbPoints[form.clb] || 0;

  // SPOUSE FACTORS
  if (form.hasSpouse === "yes") {
    score += 20;  
  }

  // ADDITIONAL POINTS
  if (form.pnp === "yes") score += 600;
  if (form.jobOffer === "yes") score += 50;
  if (form.sibling === "yes") score += 15;

  return score;
}
