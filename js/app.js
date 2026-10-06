// Main Application Controller for CSC/DSCI 3780 Midterm Study WebApp
// Jamal Ford - Fundamentals of Data Science Midterm Preparation

document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initTheme();
  initTabs();
  initCheatSheet();
  initTopicReview();
  initExamSimulator();
  initInteractiveTools();
  initFlashcards();
});

// ============================================================
// 1. COUNTDOWN TIMER TO 10:00 AM TODAY
// ============================================================
function initCountdown() {
  const countdownEl = document.getElementById("exam-countdown");
  if (!countdownEl) return;

  function update() {
    const now = new Date();
    // Midterm target: today at 10:00 AM local time
    const examTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0);
    
    // If exam time is past today, target 10am next instance
    let diffMs = examTime - now;
    if (diffMs < 0) {
      countdownEl.textContent = "Exam Time / Finished";
      return;
    }

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

    countdownEl.textContent = `${hours}h ${mins}m ${secs}s until Exam!`;
  }

  update();
  setInterval(update, 1000);
}

// ============================================================
// 2. THEME CONTROLLER (Dark / Light)
// ============================================================
function initTheme() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const currentTheme = localStorage.getItem("ds_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme") || "dark";
      const next = active === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("ds_theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
  }
}

// ============================================================
// 3. TAB ROUTER
// ============================================================
function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-tab");
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// ============================================================
// 4. CHEAT SHEET CONTROLLER
// ============================================================
function initCheatSheet() {
  const printBtn = document.getElementById("print-sheet-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  const modeBtns = document.querySelectorAll(".sheet-mode-btn");
  const printView = document.getElementById("sheet-print-view");
  const copyView = document.getElementById("sheet-copy-view");

  modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.getAttribute("data-mode");

      if (mode === "copy") {
        printView.style.display = "none";
        copyView.style.display = "block";
      } else {
        printView.style.display = "flex";
        copyView.style.display = "none";
      }
    });
  });
}

// ============================================================
// 5. TOPIC REVIEW CONTROLLER & SEARCH
// ============================================================
function initTopicReview() {
  const accordionContainer = document.getElementById("module-accordion-container");
  if (!accordionContainer || typeof STUDY_MODULES === "undefined") return;

  accordionContainer.innerHTML = STUDY_MODULES.map((mod, idx) => `
    <div class="module-card ${idx === 0 ? 'open' : ''}" id="${mod.id}">
      <div class="module-header" onclick="toggleModule('${mod.id}')">
        <div class="module-title-group">
          <span class="module-icon">${mod.icon}</span>
          <div>
            <h3>${mod.title}</h3>
            <p>${mod.summary}</p>
          </div>
        </div>
        <span class="module-chevron">▼</span>
      </div>
      <div class="module-body">
        ${mod.content}
      </div>
    </div>
  `).join("");

  // Search input filter
  const searchInput = document.getElementById("topic-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll(".module-card").forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          card.style.display = "block";
          if (q) card.classList.add("open");
        } else {
          card.style.display = "none";
        }
      });
    });
  }
}

window.toggleModule = function(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("open");
};

// ============================================================
// 6. EXAM SIMULATOR CONTROLLER (All 11 Problems / 120 Points)
// ============================================================
let userExamAnswers = {};

function initExamSimulator() {
  const container = document.getElementById("exam-questions-container");
  if (!container || typeof EXAM_DATA === "undefined") return;

  renderExamQuestions();

  const gradeBtn = document.getElementById("grade-exam-btn");
  if (gradeBtn) {
    gradeBtn.addEventListener("click", gradeExam);
  }

  const resetBtn = document.getElementById("reset-exam-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      userExamAnswers = {};
      renderExamQuestions();
      updateScoreDashboard(0, false);
    });
  }
}

function renderExamQuestions() {
  const container = document.getElementById("exam-questions-container");
  if (!container) return;

  let html = "";

  EXAM_DATA.questions.forEach(q => {
    html += `<div class="exam-question-card" id="qcard-${q.id}">
      <div class="q-header">
        <div class="q-title">Problem ${q.number}: ${q.title}</div>
        <div class="q-points">${q.points} Points</div>
      </div>`;

    if (q.context) {
      html += `<div class="callout tip" style="margin-bottom: 1rem;"><pre style="margin: 0; background: transparent; border: none; padding: 0;"><code>${q.context}</code></pre></div>`;
    }

    if (q.id === "q8") {
      html += renderHomePricesBoxPlotSVG();
    }

    if (q.id === "q10") {
      html += renderBadChartSVG();
    }

    if (q.type === "mcq_group") {
      q.parts.forEach(p => {
        html += renderMCQPart(p, q.id);
      });
    } else if (q.type === "tf_group") {
      q.parts.forEach(p => {
        html += renderTFPart(p, q.id);
      });
    } else if (q.type === "matching") {
      html += renderMatchingProblem(q);
    } else if (q.type === "broadcasting") {
      html += renderBroadcastingProblem(q);
    } else if (q.type === "model_comparison") {
      html += renderModelComparisonProblem(q);
    } else if (q.type === "free_response") {
      html += renderFreeResponseProblem(q);
    } else if (q.type === "chart_audit") {
      html += renderChartAuditProblem(q);
    }

    html += `</div>`;
  });

  container.innerHTML = html;
}

function renderMCQPart(p, qId) {
  return `
    <div class="exam-subpart" style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px dashed var(--border-color);">
      <div class="q-prompt"><strong>${p.label}</strong> (${p.points} pts) ${p.prompt}</div>
      <div class="options-list">
        ${p.options.map(opt => `
          <label class="option-label" id="lbl-${p.id}-${opt.id}">
            <input type="radio" name="ans-${p.id}" value="${opt.id}" onchange="selectMCQ('${p.id}', '${opt.id}')">
            <span><strong>${opt.id}.</strong> ${opt.text}</span>
          </label>
        `).join("")}
      </div>
      <div class="solution-box" id="sol-${p.id}">
        <h4>✓ Official Solution:</h4>
        <p>${p.solution}</p>
      </div>
    </div>
  `;
}

function renderTFPart(p, qId) {
  return `
    <div class="exam-subpart" style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px dashed var(--border-color);">
      <div class="q-prompt"><strong>${p.label}</strong> (${p.points} pts) ${p.prompt}</div>
      <div class="tf-buttons">
        <button type="button" class="btn-tf" id="btf-${p.id}-True" onclick="selectTF('${p.id}', 'True')">A. True</button>
        <button type="button" class="btn-tf" id="btf-${p.id}-False" onclick="selectTF('${p.id}', 'False')">B. False</button>
      </div>
      <div class="solution-box" id="sol-${p.id}">
        <h4>✓ Official Solution (${p.correct}):</h4>
        <p>${p.solution}</p>
      </div>
    </div>
  `;
}

function renderMatchingProblem(q) {
  return `
    <div class="q-prompt">${q.prompt}</div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
      ${q.plots.map(plot => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.8rem;">
          <div style="font-weight: 700; margin-bottom: 0.3rem; color: var(--accent);">Plot ${plot.label}</div>
          <div style="display: flex; justify-content: center; margin-bottom: 0.5rem; background: #060b17; border-radius: 4px; padding: 4px;">
            ${renderScatterSVG(plot.id)}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${plot.desc}</div>
          <select class="input-field" id="match-${plot.id}" onchange="selectMatch('${plot.id}', this.value)" style="width: 100%;">
            <option value="">Select r value...</option>
            <option value="-1.0">-1.0 (perfect negative linear)</option>
            <option value="-0.9">-0.9 (strong negative linear)</option>
            <option value="0.0">0.0 (no linear relationship)</option>
            <option value="0.9">0.9 (strong positive linear)</option>
            <option value="1.0">1.0 (perfect positive linear)</option>
            <option value="2.0">2.0 (impossible coefficient)</option>
          </select>
        </div>
      `).join("")}
    </div>
    <div class="solution-box" id="sol-${q.id}">
      <h4>✓ Official Solution:</h4>
      <pre style="white-space: pre-wrap; background: transparent; border: none; padding: 0; color: inherit;">${q.solution}</pre>
    </div>
  `;
}

function renderScatterSVG(id) {
  let points = [];
  if (id === "A") { // steep straight line
    points = [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10]];
  } else if (id === "B") { // gentle straight line
    points = [[1, 1], [2, 1.5], [3, 2], [4, 2.5], [5, 3], [6, 3.5], [7, 4], [8, 4.5], [9, 5], [10, 5.5]];
  } else if (id === "C") { // strong positive scatter (r=0.9)
    points = [[1, 2.5], [1.5, 3], [2, 2.8], [3, 4], [4, 4.5], [5, 6], [6, 5.5], [7, 7.5], [7.5, 9], [8.5, 8.8], [9.5, 9.2]];
  } else if (id === "D") { // negative straight line (r=-1.0)
    points = [[1, 9], [2, 7], [3, 5], [4, 3], [5, 1]];
  } else if (id === "E") { // moderate straight line (r=1.0)
    points = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]];
  } else if (id === "F") { // cloud (r=0.0)
    points = [[1, 8], [2, 2], [3, 7], [4, 9], [5, 5], [6, 1], [7, 8], [8, 3], [9, 7], [3, 4], [7, 4], [5, 8], [8, 9]];
  }

  const w = 180;
  const h = 100;
  const scaleX = (x) => 25 + (x / 10) * (w - 35);
  const scaleY = (y) => h - 15 - (y / 10) * (h - 25);

  let dots = points.map(pt => `<circle cx="${scaleX(pt[0])}" cy="${scaleY(pt[1])}" r="3" fill="#38bdf8" />`).join("");

  return `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <line x1="25" y1="${h-15}" x2="${w-10}" y2="${h-15}" stroke="#475569" stroke-width="1" />
      <line x1="25" y1="10" x2="25" y2="${h-15}" stroke="#475569" stroke-width="1" />
      <text x="${w-12}" y="${h-5}" fill="#64748b" font-size="8">x</text>
      <text x="12" y="15" fill="#64748b" font-size="8">y</text>
      ${dots}
    </svg>
  `;
}

function renderHomePricesBoxPlotSVG() {
  return `
    <div style="background: #090e1a; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; text-align: center;">
      <div style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.5rem;">Atlanta-Area Home Price Distribution (Millions USD)</div>
      <svg width="550" height="110" viewBox="0 0 550 110" style="width: 100%; max-width: 550px;">
        <!-- Axis line -->
        <line x1="40" y1="80" x2="520" y2="80" stroke="#64748b" stroke-width="1.5" />
        <!-- Axis Ticks & Labels: 0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4 -->
        <g font-size="10" fill="#94a3b8" text-anchor="middle">
          <line x1="40" y1="80" x2="40" y2="86" stroke="#64748b" /><text x="40" y="98">0.0</text>
          <line x1="108" y1="80" x2="108" y2="86" stroke="#64748b" /><text x="108" y="98">0.2</text>
          <line x1="177" y1="80" x2="177" y2="86" stroke="#64748b" /><text x="177" y="98">0.4</text>
          <line x1="245" y1="80" x2="245" y2="86" stroke="#64748b" /><text x="245" y="98">0.6</text>
          <line x1="314" y1="80" x2="314" y2="86" stroke="#64748b" /><text x="314" y="98">0.8</text>
          <line x1="382" y1="80" x2="382" y2="86" stroke="#64748b" /><text x="382" y="98">1.0</text>
          <line x1="451" y1="80" x2="451" y2="86" stroke="#64748b" /><text x="451" y="98">1.2</text>
          <line x1="520" y1="80" x2="520" y2="86" stroke="#64748b" /><text x="520" y="98">1.4</text>
        </g>
        <!-- Whiskers -->
        <!-- Lower: ~0.04 to Q1=0.18 -->
        <line x1="54" y1="45" x2="102" y2="45" stroke="#38bdf8" stroke-width="2" />
        <line x1="54" y1="32" x2="54" y2="58" stroke="#38bdf8" stroke-width="2" />
        <!-- Upper: Q3=0.43 to ~0.78 -->
        <line x1="187" y1="45" x2="307" y2="45" stroke="#38bdf8" stroke-width="2" />
        <line x1="307" y1="32" x2="307" y2="58" stroke="#38bdf8" stroke-width="2" />
        <!-- Box: Q1=0.18 (x=102) to Q3=0.43 (x=187) -->
        <rect x="102" y="22" width="85" height="46" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2" />
        <!-- Median: ~0.23 (x=119) -->
        <line x1="119" y1="22" x2="119" y2="68" stroke="#f59e0b" stroke-width="3" />
        <!-- Outliers -->
        <g stroke="#ffffff" stroke-width="1.5" fill="none">
          <circle cx="310" cy="45" r="3.5" /><circle cx="316" cy="45" r="3.5" />
          <circle cx="323" cy="45" r="3.5" /><circle cx="330" cy="45" r="3.5" />
          <circle cx="384" cy="45" r="3.5" /><circle cx="390" cy="45" r="3.5" />
          <circle cx="400" cy="45" r="3.5" /><circle cx="423" cy="45" r="3.5" />
          <circle cx="431" cy="45" r="3.5" /><circle cx="440" cy="45" r="3.5" />
          <circle cx="450" cy="45" r="3.5" /><circle cx="458" cy="45" r="3.5" />
          <circle cx="525" cy="45" r="3.5" />
        </g>
      </svg>
    </div>
  `;
}

function renderBadChartSVG() {
  return `
    <div style="background: #090e1a; border: 2px solid #ef4444; border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; text-align: center;">
      <div style="font-size: 0.95rem; font-weight: 800; color: #f87171; margin-bottom: 0.5rem; text-transform: uppercase;">
        STUDY TIME TRIPLED IN FOUR DAYS!
      </div>
      <svg width="450" height="220" viewBox="0 0 450 220" style="width: 100%; max-width: 450px;">
        <!-- Dense clutter gridlines -->
        <g stroke="#334155" stroke-width="1">
          <line x1="50" y1="20" x2="420" y2="20" />
          <line x1="50" y1="38" x2="420" y2="38" />
          <line x1="50" y1="56" x2="420" y2="56" />
          <line x1="50" y1="74" x2="420" y2="74" />
          <line x1="50" y1="92" x2="420" y2="92" />
          <line x1="50" y1="110" x2="420" y2="110" />
          <line x1="50" y1="128" x2="420" y2="128" />
          <line x1="50" y1="146" x2="420" y2="146" />
          <line x1="50" y1="164" x2="420" y2="164" />
          <line x1="50" y1="182" x2="420" y2="182" />
        </g>
        <!-- Axes -->
        <line x1="50" y1="20" x2="50" y2="182" stroke="#94a3b8" stroke-width="2" />
        <line x1="50" y1="182" x2="420" y2="182" stroke="#94a3b8" stroke-width="2" />
        <!-- Axis labels (starting at 35!) -->
        <text x="35" y="185" font-size="9" fill="#94a3b8" text-anchor="end">35</text>
        <text x="35" y="149" font-size="9" fill="#94a3b8" text-anchor="end">40</text>
        <text x="35" y="113" font-size="9" fill="#94a3b8" text-anchor="end">44</text>
        <text x="35" y="77" font-size="9" fill="#94a3b8" text-anchor="end">48</text>
        <text x="35" y="59" font-size="9" fill="#94a3b8" text-anchor="end">50</text>
        <text x="35" y="25" font-size="9" fill="#94a3b8" text-anchor="end">52</text>
        <!-- Vague y-axis label -->
        <text x="15" y="105" font-size="10" fill="#f87171" transform="rotate(-90 15,105)" text-anchor="middle">Average</text>
        <!-- Bars (Baseline at 35 -> y=182) -->
        <!-- Monday = 40 (h = 5 units = 45px) -->
        <rect x="75" y="137" width="55" height="45" fill="#0284c7" />
        <text x="102" y="130" font-size="10" fill="#ffffff" font-weight="700" text-anchor="middle">40</text>
        <!-- Wednesday = 48 (h = 13 units = 117px) -->
        <rect x="160" y="65" width="55" height="117" fill="#0284c7" />
        <text x="187" y="58" font-size="10" fill="#ffffff" font-weight="700" text-anchor="middle">48</text>
        <!-- Tuesday = 44 (h = 9 units = 81px) -->
        <rect x="245" y="101" width="55" height="81" fill="#0284c7" />
        <text x="272" y="94" font-size="10" fill="#ffffff" font-weight="700" text-anchor="middle">44</text>
        <!-- Thursday = 50 (h = 15 units = 135px) -->
        <rect x="330" y="47" width="55" height="135" fill="#0284c7" />
        <text x="357" y="40" font-size="10" fill="#ffffff" font-weight="700" text-anchor="middle">50</text>
        <!-- Tilted Labels -->
        <text x="85" y="198" font-size="10" fill="#f87171" transform="rotate(-30 85,198)">Monday</text>
        <text x="170" y="198" font-size="10" fill="#f87171" transform="rotate(-30 170,198)">Wednesday</text>
        <text x="255" y="198" font-size="10" fill="#f87171" transform="rotate(-30 255,198)">Tuesday</text>
        <text x="340" y="198" font-size="10" fill="#f87171" transform="rotate(-30 340,198)">Thursday</text>
      </svg>
    </div>
  `;
}

function renderBroadcastingProblem(q) {
  return `
    <div class="q-prompt">${q.prompt}</div>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${q.pairs.map(p => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.8rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
            <strong>${p.label} (${p.points} pts):</strong>
            <code>${p.a} , ${p.b}</code>
          </div>
          <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
            <span>Possible?</span>
            <select class="input-field" style="width: 130px;" id="bc-poss-${p.id}" onchange="selectBC('${p.id}', this.value)">
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <input type="text" class="input-field" placeholder="Resulting shape, e.g. (3, 4)" id="bc-shape-${p.id}">
          </div>
          <div class="solution-box" id="sol-${p.id}">
            <h4>✓ Solution: ${p.possible ? 'Yes: ' + p.resultShape : 'No: Incompatible'}</h4>
            <p>${p.explanation}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderModelComparisonProblem(q) {
  let tableRows = q.table.map(r => `
    <tr>
      <td>${r.id}</td>
      <td><code>${r.sender || r.client}</code></td>
      <td>${r.subject}</td>
      <td><strong>${r.outcome}</strong></td>
    </tr>
  `).join("");

  return `
    <div class="table-wrapper">
      <table>
        <thead><tr><th>ID</th><th>SENDER</th><th>SUBJECT</th><th>OUTCOME</th></tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
    ${q.parts.map(p => `
      <div style="margin-top: 1rem; border-top: 1px dashed var(--border-color); padding-top: 0.8rem;">
        <div class="q-prompt"><strong>${p.label}</strong> (${p.points} pts) ${p.prompt}</div>
        <div class="options-list">
          ${p.options.map(opt => `
            <label class="option-label" id="lbl-${p.id}-${opt}">
              <input type="radio" name="ans-${p.id}" value="${opt}" onchange="selectMCQ('${p.id}', '${opt}')">
              <span>${opt}</span>
            </label>
          `).join("")}
        </div>
        <div class="solution-box" id="sol-${p.id}">
          <h4>✓ Official Solution:</h4>
          <p>${p.solution}</p>
        </div>
      </div>
    `).join("")}
  `;
}

function renderFreeResponseProblem(q) {
  return `
    <div class="q-prompt">${q.prompt}</div>
    <div style="margin-bottom: 1rem;">
      <textarea class="input-field" style="width: 100%; min-height: 90px; resize: vertical;" placeholder="Write your explanation here..."></textarea>
    </div>
    <div class="solution-box" id="sol-${q.id}">
      <h4>✓ Official Solution:</h4>
      <pre style="white-space: pre-wrap; background: transparent; border: none; padding: 0; color: inherit;">${q.solution}</pre>
    </div>
  `;
}

function renderChartAuditProblem(q) {
  return `
    <div class="q-prompt">${q.prompt}</div>
    <div class="callout warning">
      <strong>Chart Scenario:</strong> Bars: Mon=40, Wed=48, Tue=44, Thu=50. Baseline at 35. Title: "STUDY TIME TRIPLED IN FOUR DAYS!".
    </div>
    <div style="margin-bottom: 1rem;">
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Check all 5 design deficiencies you can identify:</p>
      ${q.deficiencies.map(d => `
        <label class="option-label" style="margin-bottom: 0.4rem;">
          <input type="checkbox" id="chk-${d.id}">
          <span><strong>${d.name}</strong>: ${d.why}</span>
        </label>
      `).join("")}
    </div>
    <div class="solution-box" id="sol-${q.id}">
      <h4>✓ 5 Required Solutions from Professor:</h4>
      <ol style="padding-left: 1.2rem;">
        ${q.deficiencies.map(d => `<li><strong>${d.name}:</strong> ${d.why} <br><em>Correction:</em> ${d.fix}</li>`).join("")}
      </ol>
    </div>
  `;
}

// User selection handlers
window.selectMCQ = function(partId, optId) {
  userExamAnswers[partId] = optId;
  const parent = document.getElementById(`lbl-${partId}-${optId}`).parentElement;
  parent.querySelectorAll(".option-label").forEach(l => l.classList.remove("selected"));
  document.getElementById(`lbl-${partId}-${optId}`).classList.add("selected");
};

window.selectTF = function(partId, val) {
  userExamAnswers[partId] = val;
  const btnTrue = document.getElementById(`btf-${partId}-True`);
  const btnFalse = document.getElementById(`btf-${partId}-False`);
  if (btnTrue && btnFalse) {
    btnTrue.classList.remove("active-true");
    btnFalse.classList.remove("active-false");
    if (val === "True") btnTrue.classList.add("active-true");
    if (val === "False") btnFalse.classList.add("active-false");
  }
};

window.selectMatch = function(plotId, val) {
  userExamAnswers[`match_${plotId}`] = val;
};

window.selectBC = function(pairId, val) {
  userExamAnswers[`bc_${pairId}`] = val;
};

// Exam grading function
function gradeExam() {
  let earnedPoints = 0;

  // Grade Q1 MCQs (15 pts)
  EXAM_DATA.questions[0].parts.forEach(p => {
    const user = userExamAnswers[p.id];
    const solBox = document.getElementById(`sol-${p.id}`);
    if (solBox) solBox.classList.add("visible");

    if (user === p.correct) {
      earnedPoints += p.points;
      const lbl = document.getElementById(`lbl-${p.id}-${user}`);
      if (lbl) lbl.classList.add("correct");
    } else if (user) {
      const lbl = document.getElementById(`lbl-${p.id}-${user}`);
      if (lbl) lbl.classList.add("incorrect");
    }
  });

  // Grade Q2 True/False (21 pts)
  EXAM_DATA.questions[1].parts.forEach(p => {
    const user = userExamAnswers[p.id];
    const solBox = document.getElementById(`sol-${p.id}`);
    if (solBox) solBox.classList.add("visible");

    if (user === p.correct) {
      earnedPoints += p.points;
    }
  });

  // Grade Q3 Matching (6 pts)
  const q3 = EXAM_DATA.questions[2];
  document.getElementById(`sol-${q3.id}`).classList.add("visible");
  q3.plots.forEach(pl => {
    const val = userExamAnswers[`match_${pl.id}`];
    if (val === pl.correct) earnedPoints += 1;
  });

  // Grade Q4 Broadcasting (10 pts)
  const q4 = EXAM_DATA.questions[3];
  q4.pairs.forEach(p => {
    document.getElementById(`sol-${p.id}`).classList.add("visible");
    const val = userExamAnswers[`bc_${p.id}`];
    const correctVal = p.possible ? "yes" : "no";
    if (val === correctVal) earnedPoints += 2;
  });

  // Grade Q5 Spam ML (6 pts)
  const q5 = EXAM_DATA.questions[4];
  q5.parts.forEach(p => {
    document.getElementById(`sol-${p.id}`).classList.add("visible");
    const val = userExamAnswers[p.id];
    if (val === p.correct) earnedPoints += p.points;
  });

  // Grade Q6 Ecology study (10 pts)
  const q6 = EXAM_DATA.questions[5];
  q6.parts.forEach(p => {
    document.getElementById(`sol-${p.id}`).classList.add("visible");
    const val = userExamAnswers[p.id];
    if (val === p.correct) earnedPoints += p.points;
  });

  // Grade Q7 Pandas (15 pts)
  const q7 = EXAM_DATA.questions[6];
  q7.parts.forEach(p => {
    document.getElementById(`sol-${p.id}`).classList.add("visible");
    const val = userExamAnswers[p.id];
    if (val === p.correct) earnedPoints += p.points;
  });

  // Grade Q8 Box plot (10 pts)
  const q8 = EXAM_DATA.questions[7];
  q8.parts.forEach(p => {
    document.getElementById(`sol-${p.id}`).classList.add("visible");
    const val = userExamAnswers[p.id];
    if (val === p.correct) earnedPoints += p.points;
  });

  // Free response / Audit Q9, Q10
  document.getElementById(`sol-${EXAM_DATA.questions[8].id}`).classList.add("visible");
  document.getElementById(`sol-${EXAM_DATA.questions[9].id}`).classList.add("visible");
  earnedPoints += 15; // Award full credit for self-assessed written sections

  // Grade Q11 Matplotlib (12 pts)
  const q11 = EXAM_DATA.questions[10];
  q11.parts.forEach(p => {
    document.getElementById(`sol-${p.id}`).classList.add("visible");
    const val = userExamAnswers[p.id];
    if (val === p.correct) earnedPoints += p.points;
  });

  updateScoreDashboard(earnedPoints, true);
}

function updateScoreDashboard(rawPoints, isGraded) {
  const rawEl = document.getElementById("score-raw");
  const finalEl = document.getElementById("score-final");
  const percentEl = document.getElementById("score-percent");

  if (!isGraded) {
    if (rawEl) rawEl.textContent = "0 / 120";
    if (finalEl) finalEl.textContent = "0 / 100";
    if (percentEl) percentEl.textContent = "0%";
    return;
  }

  const finalPoints = Math.min(rawPoints, 100);
  const percentage = Math.round((finalPoints / 100) * 100);

  if (rawEl) rawEl.textContent = `${rawPoints} / 120`;
  if (finalEl) finalEl.textContent = `${finalPoints} / 100`;
  if (percentEl) percentEl.textContent = `${percentage}%`;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// 7. INTERACTIVE TOOLS CONTROLLER
// ============================================================
function initInteractiveTools() {
  // Broadcasting tool
  const testBcBtn = document.getElementById("tool-bc-test-btn");
  if (testBcBtn) {
    testBcBtn.addEventListener("click", runBroadcastingTool);
  }

  // Pandas visualizer presets
  initPandasVisualizer();

  // Box plot calculator
  initBoxPlotTool();

  // Pre-run with initial values
  runBroadcastingTool();
  runBoxPlotCalc();
}

function runBroadcastingTool() {
  const shapeAInput = document.getElementById("bc-input-a");
  const shapeBInput = document.getElementById("bc-input-b");
  const outputEl = document.getElementById("bc-output-area");
  if (!shapeAInput || !shapeBInput || !outputEl) return;

  const res = Tools.simulateBroadcasting(shapeAInput.value, shapeBInput.value);

  if (res.error) {
    outputEl.innerHTML = `<div class="callout danger" style="margin: 0;"><strong>Error:</strong> ${res.error}</div>`;
    return;
  }

  let tableHtml = `
    <div style="font-weight: 700; margin-bottom: 0.5rem; color: ${res.isCompatible ? 'var(--success)' : 'var(--danger)'};">
      ${res.isCompatible ? '✓ Broadcasting SUCCESSFUL!' : '✗ Broadcasting FAILS!'}
    </div>
    <div style="margin-bottom: 0.5rem;">Resulting Shape: <strong>${res.resultShape}</strong></div>
    ${res.failureReason ? `<div class="callout danger" style="margin: 0.5rem 0;"><strong>Why:</strong> ${res.failureReason}</div>` : ''}
    <div class="table-wrapper" style="margin-top: 0.5rem;">
      <table>
        <thead>
          <tr>
            <th>Dim (from right)</th>
            <th>Array A</th>
            <th>Array B</th>
            <th>Broadcast Dim</th>
            <th>Status</th>
            <th>Rule Applied</th>
          </tr>
        </thead>
        <tbody>
          ${res.steps.map(s => `
            <tr style="background: ${s.status === 'error' ? 'rgba(239, 68, 68, 0.15)' : 'transparent'};">
              <td>#${s.posFromRight}</td>
              <td><code>${s.dimA}</code></td>
              <td><code>${s.dimB}</code></td>
              <td><strong><code>${s.result}</code></strong></td>
              <td>${s.status === 'ok' ? '<span style="color: var(--success);">✓ Compatible</span>' : '<span style="color: var(--danger);">✗ Incompatible</span>'}</td>
              <td style="font-size: 0.8rem;">${s.note}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  outputEl.innerHTML = tableHtml;
}

window.setBcPreset = function(shapeA, shapeB) {
  const a = document.getElementById("bc-input-a");
  const b = document.getElementById("bc-input-b");
  if (a && b) {
    a.value = shapeA;
    b.value = shapeB;
    runBroadcastingTool();
  }
};

function initPandasVisualizer() {
  const tableContainer = document.getElementById("pandas-table-container");
  if (!tableContainer) return;
  renderPandasTable();
}

function renderPandasTable(highlightRows = [], highlightCols = []) {
  const container = document.getElementById("pandas-table-container");
  if (!container) return;

  const data = Tools.pandasDataset;
  let html = `
    <table class="pandas-interactive-table">
      <thead>
        <tr>
          <th>Index</th>
          <th class="${highlightCols.includes('student') ? 'highlighted' : ''}">student (0)</th>
          <th class="${highlightCols.includes('midterm') ? 'highlighted' : ''}">midterm (1)</th>
          <th class="${highlightCols.includes('final') ? 'highlighted' : ''}">final (2)</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(row => {
          const rowActive = highlightRows.includes(row.index);
          return `
            <tr>
              <td style="font-weight: 700; ${rowActive ? 'background: rgba(56, 189, 248, 0.2); color: #38bdf8;' : ''}">${row.index}</td>
              <td class="${(rowActive && highlightCols.includes('student')) ? 'highlighted' : ''}">${row.student}</td>
              <td class="${(rowActive && highlightCols.includes('midterm')) ? 'highlighted' : ''}">${row.midterm}</td>
              <td class="${(rowActive && highlightCols.includes('final')) ? 'highlighted' : ''}">${row.final}</td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

window.testPandasQuery = function(type) {
  const explainEl = document.getElementById("pandas-explain-area");
  if (!explainEl) return;

  if (type === "q7a") {
    renderPandasTable([], []);
    explainEl.innerHTML = `
      <div class="callout danger">
        <strong>df["student":"midterm"]</strong>: <em>KeyError / Invalid Slice!</em><br>
        Direct slice syntax <code>df[...]</code> slices <strong>ROWS</strong>, not columns. Because this DataFrame has an integer index [0, 1, 2, 3, 4], string bounds fail completely!
      </div>
    `;
  } else if (type === "q7b") {
    renderPandasTable([0, 1, 2, 3, 4], ["student", "midterm"]);
    explainEl.innerHTML = `
      <div class="callout tip">
        <strong>df[["student", "midterm"]]</strong>: <em>Valid DataFrame (5 rows × 2 columns)</em><br>
        Passing a Python list of column labels selects exactly those two columns for all rows.
      </div>
    `;
  } else if (type === "q7c") {
    renderPandasTable([1, 3, 4], ["midterm"]);
    explainEl.innerHTML = `
      <div class="callout tip">
        <strong>df["midterm"] &gt; 85</strong>: <em>Boolean Series of length 5</em><br>
        Returns: <code>[0: False, 1: True, 2: False, 3: True, 4: True]</code>.<br>
        Evaluates condition element-by-element across all 5 rows.
      </div>
    `;
  } else if (type === "q7d") {
    renderPandasTable([2, 3, 4], ["midterm", "final"]);
    explainEl.innerHTML = `
      <div class="callout tip">
        <strong>df.loc[2:4, "midterm":"final"]</strong>: <em>Valid DataFrame (3 rows × 2 columns)</em><br>
        <strong>.loc is INCLUSIVE</strong> on both ends! Rows 2, 3, AND 4 are included. Columns 'midterm' AND 'final' are included.
      </div>
    `;
  } else if (type === "q7e") {
    renderPandasTable([0, 2, 4], ["midterm"]);
    explainEl.innerHTML = `
      <div class="callout warning">
        <strong>df.iloc[::2, 1]</strong>: <em>Returns Series of Midterm Scores: [82, 76, 95]</em><br>
        Notice column 1 is <strong>midterm</strong>, NOT student! Positional index 0 is 'student', position 1 is 'midterm'.
      </div>
    `;
  }
};

function initBoxPlotTool() {
  const calcBtn = document.getElementById("calc-box-btn");
  if (calcBtn) {
    calcBtn.addEventListener("click", runBoxPlotCalc);
  }
}

function runBoxPlotCalc() {
  const inputEl = document.getElementById("boxplot-data-input");
  const outputEl = document.getElementById("boxplot-stats-output");
  const svgEl = document.getElementById("boxplot-svg-container");
  if (!inputEl || !outputEl || !svgEl) return;

  const rawStr = inputEl.value;
  const numbers = rawStr.split(/[\s,]+/).map(x => parseFloat(x)).filter(x => !isNaN(x));

  if (numbers.length < 3) {
    outputEl.innerHTML = `<div class="callout danger" style="margin: 0;">Please enter at least 3 numbers.</div>`;
    return;
  }

  const res = Tools.calculateBoxPlot(numbers);

  outputEl.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; margin-bottom: 0.75rem;">
      <div>Min: <strong>${res.min}</strong></div>
      <div>Q1 (25%): <strong>${res.q1}</strong></div>
      <div>Median (Q2): <strong>${res.median}</strong></div>
      <div>Q3 (75%): <strong>${res.q3}</strong></div>
      <div>Max: <strong>${res.max}</strong></div>
      <div>IQR: <strong>${res.iqr}</strong></div>
      <div>Lower Fence: <strong>${res.lowerFence}</strong></div>
      <div>Upper Fence: <strong>${res.upperFence}</strong></div>
      <div>Lower Whisker: <strong>${res.lowerWhisker}</strong></div>
      <div>Upper Whisker: <strong>${res.upperWhisker}</strong></div>
      <div>Mean: <strong>${res.mean}</strong></div>
      <div>Sample Std: <strong>${res.sampleStd}</strong></div>
    </div>
    <div>Outliers (${res.outliers.length}): <strong>${res.outliers.length > 0 ? res.outliers.join(', ') : 'None'}</strong></div>
  `;

  // Draw dynamic SVG boxplot
  drawBoxPlotSVG(res, svgEl);
}

function drawBoxPlotSVG(res, container) {
  const w = 500;
  const h = 130;
  const pad = 40;

  const overallMin = Math.min(res.min, res.lowerFence);
  const overallMax = Math.max(res.max, res.upperFence);
  const range = overallMax - overallMin || 1;

  const scale = (val) => pad + ((val - overallMin) / range) * (w - 2 * pad);

  const xQ1 = scale(res.q1);
  const xMed = scale(res.median);
  const xQ3 = scale(res.q3);
  const xLW = scale(res.lowerWhisker);
  const xUW = scale(res.upperWhisker);

  let svg = `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="width: 100%; max-width: 500px;">
      <!-- Whisker lines -->
      <line x1="${xLW}" y1="50" x2="${xQ1}" y2="50" stroke="#38bdf8" stroke-width="2" />
      <line x1="${xQ3}" y1="50" x2="${xUW}" y2="50" stroke="#38bdf8" stroke-width="2" />
      <!-- Whisker caps -->
      <line x1="${xLW}" y1="35" x2="${xLW}" y2="65" stroke="#38bdf8" stroke-width="2" />
      <line x1="${xUW}" y1="35" x2="${xUW}" y2="65" stroke="#38bdf8" stroke-width="2" />
      <!-- Box -->
      <rect x="${xQ1}" y="25" width="${Math.max(1, xQ3 - xQ1)}" height="50" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2" rx="3" />
      <!-- Median line -->
      <line x1="${xMed}" y1="25" x2="${xMed}" y2="75" stroke="#f59e0b" stroke-width="3" />
  `;

  // Outliers
  res.outliers.forEach(outVal => {
    const xOut = scale(outVal);
    svg += `<circle cx="${xOut}" cy="50" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="1.5" />`;
  });

  // Labels
  svg += `
    <text x="${xLW}" y="85" font-size="10" fill="#94a3b8" text-anchor="middle">${res.lowerWhisker}</text>
    <text x="${xQ1}" y="20" font-size="10" fill="#38bdf8" text-anchor="middle">Q1: ${res.q1}</text>
    <text x="${xMed}" y="95" font-size="10" fill="#f59e0b" text-anchor="middle">Med: ${res.median}</text>
    <text x="${xQ3}" y="20" font-size="10" fill="#38bdf8" text-anchor="middle">Q3: ${res.q3}</text>
    <text x="${xUW}" y="85" font-size="10" fill="#94a3b8" text-anchor="middle">${res.upperWhisker}</text>
  </svg>`;

  container.innerHTML = svg;
}

window.setBoxPlotPreset = function(preset) {
  const input = document.getElementById("boxplot-data-input");
  if (!input) return;
  if (preset === "slide38") {
    input.value = "0, 5, 15, 20, 30, 100";
  } else if (preset === "homeprices") {
    input.value = "0.04, 0.12, 0.18, 0.20, 0.23, 0.35, 0.43, 0.78, 0.85, 1.42";
  }
  runBoxPlotCalc();
};

// ============================================================
// 8. FLASHCARDS CONTROLLER
// ============================================================
let currentCardIndex = 0;
let filteredCards = [];
let knownCardIds = new Set();

function initFlashcards() {
  if (typeof FLASHCARDS === "undefined") return;
  filteredCards = [...FLASHCARDS];

  const cardEl = document.getElementById("main-flashcard");
  if (cardEl) {
    cardEl.addEventListener("click", flipFlashcard);
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    const flashTab = document.getElementById("tab-flashcards");
    if (!flashTab || !flashTab.classList.contains("active")) return;

    if (e.code === "Space") {
      e.preventDefault();
      flipFlashcard();
    } else if (e.code === "ArrowRight") {
      nextFlashcard();
    } else if (e.code === "ArrowLeft") {
      prevFlashcard();
    }
  });

  const nextBtn = document.getElementById("fc-next-btn");
  if (nextBtn) nextBtn.addEventListener("click", nextFlashcard);

  const prevBtn = document.getElementById("fc-prev-btn");
  if (prevBtn) prevBtn.addEventListener("click", prevFlashcard);

  const shuffleBtn = document.getElementById("fc-shuffle-btn");
  if (shuffleBtn) shuffleBtn.addEventListener("click", shuffleCards);

  const filterSelect = document.getElementById("fc-topic-filter");
  if (filterSelect) {
    filterSelect.addEventListener("change", (e) => {
      const topic = e.target.value;
      if (topic === "all") {
        filteredCards = [...FLASHCARDS];
      } else {
        filteredCards = FLASHCARDS.filter(c => c.topic === topic);
      }
      currentCardIndex = 0;
      renderCurrentFlashcard();
    });
  }

  renderCurrentFlashcard();
}

function flipFlashcard() {
  const card = document.getElementById("main-flashcard");
  if (card) card.classList.toggle("flipped");
}

function renderCurrentFlashcard() {
  const card = document.getElementById("main-flashcard");
  if (!card || filteredCards.length === 0) return;

  card.classList.remove("flipped");

  const c = filteredCards[currentCardIndex];
  const topicEl = document.getElementById("fc-topic");
  const badgeEl = document.getElementById("fc-badge");
  const qEl = document.getElementById("fc-question");
  const aEl = document.getElementById("fc-answer");
  const countEl = document.getElementById("fc-counter");

  if (topicEl) topicEl.textContent = c.topic;
  if (badgeEl) badgeEl.textContent = c.badge || "Concept";
  if (qEl) qEl.textContent = c.question;
  if (aEl) aEl.textContent = c.answer;
  if (countEl) countEl.textContent = `${currentCardIndex + 1} of ${filteredCards.length}`;
}

function nextFlashcard() {
  if (filteredCards.length === 0) return;
  currentCardIndex = (currentCardIndex + 1) % filteredCards.length;
  renderCurrentFlashcard();
}

function prevFlashcard() {
  if (filteredCards.length === 0) return;
  currentCardIndex = (currentCardIndex - 1 + filteredCards.length) % filteredCards.length;
  renderCurrentFlashcard();
}

function shuffleCards() {
  for (let i = filteredCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
  }
  currentCardIndex = 0;
  renderCurrentFlashcard();
}
