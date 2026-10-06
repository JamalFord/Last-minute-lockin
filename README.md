# CSC / DSCI 3780: Fundamentals of Data Science — Midterm Study App & Cheat Sheet

**Instructor:** Kiril Kuzmin • **Semester:** Fall 2026 • Georgia State University  
**Exam Structure:** ~10–12 Problems • **120 Points Total** (Graded out of 100 — you can lose up to 20 points and still receive 100!)  
**Allowed Materials:** Exactly **ONE handwritten cheat sheet, two-sided**.  
**Strict Policy:** 📵 Phones are strictly prohibited. If your phone rings during the exam, you will receive an automatic **F for the exam**.

---

## 🚀 Live WebApp & GitHub Pages
This application is a complete, self-contained single-page study web application designed for rapid exam cramming and handwritten cheat sheet preparation.

### WebApp Features:
1. **📑 2-Sided Handwritten Cheat Sheet Builder:**
   - **Side 1 (Front):** DS Lifecycle, CRISP-DM, Stevens' 4 Measurement Scales, Descriptive Statistics & Skewness, Bessel's Correction (\(n - 1\)), Box Plot 1.5×IQR rules, Covariance & Pearson \(r\) linear invariance, Observational vs Experimental studies.
   - **Side 2 (Back):** Data Preprocessing (Scaling formulas, Equal-width vs Equal-frequency binning, Sampling, SMOTE, Training-only leakage rule), NumPy Broadcasting algorithm, Pandas indexing (`.loc` vs `.iloc`), Matplotlib Architecture (Figure vs Axes, OO vs Pyplot), and the 5 Classic Chart Design Flaws.
   - **Print-to-PDF Ready:** Clean `@media print` CSS formatted specifically for 2-sided 8.5"×11" letter pages.
   - **Handwritten Speed-Copy Blueprint:** Concise bulleted format designed for transcribing onto physical paper with pen in under 25 minutes.

2. **📖 Topic Reviews (Weeks 1–6):**
   - Interactive searchable modules covering every slide deck, formula, code pattern, and professor gotcha.

3. **📝 Mockup Exam Simulator:**
   - Complete interactive version of the Fall 2026 Midterm Mockup Exam (all 11 problems, 120 points).
   - Real-time scoring with \(\min\{\text{raw\_score}, 100\}\) capped calculation.
   - Instant answers and official step-by-step solutions from Professor Kiril Kuzmin.

4. **🧮 Interactive Playgrounds:**
   - **NumPy Broadcasting Simulator:** Step-by-step right-to-left alignment checker with problem presets.
   - **Pandas Slicing Visualizer:** Live interactive DataFrame highlighting `.loc`, `.iloc`, masks, and column subsets.
   - **Box Plot & Tukey 1.5×IQR Calculator:** Dynamic SVG box plot renderer with custom data and lecture presets.
   - **Bad Chart Flaws Inspector:** Interactive visual breakdown of the 5 design flaws from Question 10.

5. **⚡ Rapid Flashcards:**
   - 40 high-yield flashcards covering key definitions, mathematical derivations, and tricky multiple-choice traps.

---

## 🛠️ How to Run Locally

Because this webapp uses standard vanilla HTML, CSS, and modern JavaScript, no build step or node package installation is required:

```bash
# Option 1: Python HTTP Server
python -m http.server 8000
# Open http://localhost:8000 in your browser

# Option 2: Directly open index.html
# Double click index.html or open via any browser
```

---

## 🌐 Deploy to GitHub Pages

To make this live on your GitHub Pages:

1. In the repository settings on GitHub, navigate to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
3. Choose branch: `main` (or `master`) and folder: `/ (root)`.
4. Click **Save**. Your study app will be live at:
   `https://JamalFord.github.io/<repo-name>/`
