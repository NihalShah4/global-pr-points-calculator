# Global PR Points Calculator  
A multi-country, client-side platform that allows users to estimate eligibility points for popular Permanent Residency (PR) and skilled-migration programs. The project combines clean UI, structured scoring logic, and modular architecture so additional countries can be added easily.

This tool helps users understand their potential PR points for:  
- Canada (CRS-style scoring)  
- Australia (GSM-style points system)  
- New Zealand (Skilled Migrant Category)  
- United Kingdom (Skilled Worker eligibility points)  
- Germany (Blue Card / points-style demonstration)

The platform functions entirely on the client side. No user data is collected or stored.

---

## Table of Contents
1. Project Overview  
2. Features  
3. Tech Stack  
4. Project Structure  
5. Country Modules  
6. Installation & Setup  
7. Development Workflow  
8. Adding a New Country  
9. Deployment  
10. Disclaimers  
11. Future Enhancements  

---

## Project Overview
The Global PR Points Calculator is designed to act as a unified interface where users can quickly preview PR-related scoring trends across multiple countries. Each calculator reflects the general structure of the real scoring criteria, allowing users to develop a clearer understanding of how age, education, experience, language, and other factors may affect their eligibility.

The goal is not to replicate official calculators exactly, but to provide an educational approximation that is straightforward and easy to compare across countries.

---

## Features

### Core Features
- Multi-country support within a single web interface  
- Independently structured scoring logic for each country  
- Fully client-side execution (React + Vite, no backend or database)  
- Instant feedback on eligibility and point totals  
- Flag-based UI tiles with hover animation  
- Extensible architecture to add new countries easily  

### User Experience Features
- Responsive layout optimized for desktop and mobile  
- Country-specific descriptions and tooltips  
- Clean visual design with hover lift and glow animations  
- Informational disclaimer footer  
- Fast load times with Vite’s optimized bundling  

---

## Tech Stack
**Frontend Framework:** React  
**Bundler:** Vite  
**Styling:** Custom CSS  
**Routing:** React Router  
**Assets:** Local flag images  
**Deployment:** GitHub Pages, Vercel, Netlify, or any static host  

---

## Project Structure

```
global-pr-points-calculator/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── flags/
│   │       ├── canada.png
│   │       ├── australia.png
│   │       ├── newzealand.png
│   │       ├── uk.png
│   │       └── germany.png
│
│   ├── calculators/
│   │   ├── canadaCalculator.js
│   │   ├── australiaCalculator.js
│   │   ├── nzCalculator.js
│   │   ├── ukCalculator.js
│   │   └── germanyCalculator.js
│
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Canada.jsx
│   │   ├── Australia.jsx
│   │   ├── NewZealand.jsx
│   │   ├── UK.jsx
│   │   └── Germany.jsx
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Country Modules

Each country’s scoring logic lives inside `/src/calculators/`.

A calculator module includes:
- Input categories  
- Independent scoring implementation  
- Eligibility rules  
- Total points computation  
- A function that returns the structured scoring breakdown  

This approach ensures:
- Clear separation of logic  
- Easy troubleshooting  
- Plug-and-play support for new countries  

---

## Installation & Setup

### Prerequisites
Install Node.js (v18+ recommended):  
https://nodejs.org/

Check installation:
```bash
node -v
npm -v
```

### Clone Repository
```bash
git clone <repo-url>
cd global-pr-points-calculator
```

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open the displayed local URL (typically http://localhost:5173/).

---

## Development Workflow

### Modify UI Pages  
Pages are located in `/src/pages/`.

### Modify Scoring Logic  
All scoring logic files live in `/src/calculators/`.

### Modify Shared Components  
Navbar and Footer are inside `/src/components/`.

### Modify Styling  
Global CSS:  
```
src/index.css
```

Page-specific CSS may be added separately.

---

## Adding a New Country

### 1. Add a new calculator  
Create a new file:
```
src/calculators/countryNameCalculator.js
```
Export a scoring function:
```javascript
export function calculateCountryNamePoints(data) {
    return { totalPoints, breakdown };
}
```

### 2. Add a new page  
Create:
```
src/pages/CountryName.jsx
```

### 3. Add a flag image  
Place it in:
```
src/assets/flags/
```

### 4. Add routing  
In `App.jsx`:
```jsx
<Route path="/countryname" element={<CountryName />} />
```

### 5. Add tile to Home  
Modify the list in `Home.jsx`.

---

## Deployment

### Option 1: GitHub Pages
```bash
npm run build
```
Deploy the `dist/` folder via GitHub Pages.

### Option 2: Vercel / Netlify
Import repository → deploy instantly.

### Option 3: Manual Hosting
Upload the `dist/` folder to any server or CDN.

---

## Disclaimers
This tool is for educational and comparison purposes.  
It is not legal or immigration advice.  
Users should always verify eligibility rules on official government sources.  
No user data is collected or stored.

---

## Future Enhancements
- PR comparison dashboard  
- Add more countries (Ireland, Singapore, UAE, Denmark, etc.)  
- Mobile-first calculator redesign  
- Strength radar charts  
- Saving user profiles locally  
- Multilingual support  
- API-driven scoring updates  

---

End of README.
