// High-Yield Flashcards for CSC/DSCI 3780 Midterm
// Covering Lectures Week 1-6, Mockup Exam, and Homeworks

const FLASHCARDS = [
  {
    id: 1,
    topic: "Statistics",
    question: "Why does sample variance (s²) divide by n - 1 (Bessel's correction) instead of n?",
    answer: "Because the true population mean μ is unknown and replaced by sample mean x̄. Sample points are closer to x̄ than to μ (since x̄ minimizes sum of squared deviations). Dividing by n would systematically underestimate true variance. Dividing by n - 1 corrects this 1 degree-of-freedom downward bias, making s² unbiased.",
    badge: "Must Know ⭐"
  },
  {
    id: 2,
    topic: "Sampling & Studies",
    question: "Does a very large sample size guarantee representative estimates of a population?",
    answer: "NO! A large sample only reduces random sampling variance (standard error). It CANNOT fix systematic bias or selection bias. An unrepresentative large sample yields a precisely biased, misleading estimate.",
    badge: "Mockup Q2(a)"
  },
  {
    id: 3,
    topic: "Correlation",
    question: "If two variables have zero Pearson correlation (r = 0), are they statistically independent?",
    answer: "NO! Pearson r only measures LINEAR association. Variables can have a deterministic non-linear relationship (e.g., Y = X² with X symmetric around 0) and have r = 0 while being completely dependent.",
    badge: "Mockup Q2(b)"
  },
  {
    id: 4,
    topic: "Correlation",
    question: "Does applying min-max scaling or z-score standardization change Pearson correlation?",
    answer: "NO! Both are positive linear transformations (x' = ax + b with a > 0). Pearson correlation r is strictly invariant to positive linear scaling and shifting.",
    badge: "Mockup Q2(c)"
  },
  {
    id: 5,
    topic: "Data Prep",
    question: "Can equal-frequency binning produce empty bins?",
    answer: "NO! Equal-frequency binning (quantiles) divides n observations into k bins with exactly n/k observations per bin. Every bin has an equal number of points; none can be empty.",
    badge: "Mockup Q2(d)"
  },
  {
    id: 6,
    topic: "Box Plots",
    question: "How far do whiskers extend in a standard box plot using the 1.5 × IQR rule?",
    answer: "Whiskers extend to the NEAREST ACTUAL DATA POINT within [Q1 - 1.5×IQR, Q3 + 1.5×IQR]. They do NOT reach the fences unless a data point lands exactly on the fence! Points outside are plotted as individual outlier markers.",
    badge: "Crucial Rule"
  },
  {
    id: 7,
    topic: "Box Plots",
    question: "If a dataset has extreme high outliers, how does removing them affect the mean and median?",
    answer: "The mean DECREASES significantly (mean is sensitive to extreme values and pulled by the tail). The median remains virtually UNCHANGED because median depends on order/rank, making it robust.",
    badge: "Mockup Q8(e)"
  },
  {
    id: 8,
    topic: "Correlation",
    question: "Two scatter plots both form straight lines with positive slopes, but Plot A has slope 0.5 and Plot B has slope 3.0. What are their Pearson correlation values?",
    answer: "Both have r = 1.0! Pearson correlation measures the strength and direction of the linear relationship, NOT the steepness of the slope. Any perfect positive straight line has r = 1.0.",
    badge: "Mockup Q3"
  },
  {
    id: 9,
    topic: "NumPy",
    question: "What NumPy slicing syntax extracts the last two columns of a 2D array A?",
    answer: "A[:, -2:] — ':' selects all rows, and '-2:' selects from the second-to-last column to the end. (Notice A[-2:, :] selects the last two rows!).",
    badge: "Mockup Q1(b)"
  },
  {
    id: 10,
    topic: "NumPy",
    question: "What is the NumPy Broadcasting compatibility rule?",
    answer: "Align shape tuples from right to left. For each dimension pair, they are compatible if: (1) they are equal, OR (2) one of them is 1. If any pair differs and neither is 1, broadcasting FAILS.",
    badge: "Mockup Q4"
  },
  {
    id: 11,
    topic: "NumPy",
    question: "Can A with shape (5, 2) broadcast with B with shape (3,)?",
    answer: "NO! Trailing dimensions are 2 and 3. They are unequal and neither is 1, so broadcasting fails with a ValueError.",
    badge: "Mockup Q4(c)"
  },
  {
    id: 12,
    topic: "NumPy",
    question: "Can A with shape (3, 1, 5) broadcast with B with shape (1, 4, 1)? What is the resulting shape?",
    answer: "YES! Trailing: 5 & 1 -> 5. Middle: 1 & 4 -> 4. Leading: 3 & 1 -> 3. Resulting shape is (3, 4, 5).",
    badge: "Mockup Q4(d)"
  },
  {
    id: 13,
    topic: "NumPy",
    question: "Can A with shape (6, 1) broadcast with B with shape (5, 7)?",
    answer: "NO! Trailing: (1, 7) is compatible (expands to 7). But leading: 6 and 5 are unequal and neither is 1. Incompatible leading dimension!",
    badge: "Mockup Q4(e)"
  },
  {
    id: 14,
    topic: "Pandas",
    question: "What is the difference between .loc and .iloc regarding slicing endpoints?",
    answer: ".loc is LABEL-based and INCLUSIVE of both start and stop labels (df.loc[2:4] includes row 4). .iloc is INTEGER-POSITION based and HALF-OPEN [start, stop) (df.iloc[2:4] includes 2 and 3, EXCLUDES 4).",
    badge: "Mockup Q7"
  },
  {
    id: 15,
    topic: "Pandas",
    question: "Does df['colA':'colB'] select columns?",
    answer: "NO! Direct slicing df[...] operates on ROWS by index, never columns. A list of strings df[['colA', 'colB']] selects columns.",
    badge: "Mockup Q7(a)"
  },
  {
    id: 16,
    topic: "Pandas",
    question: "What does df.iloc[::2, 1] select if column 0 is 'student' and column 1 is 'midterm'?",
    answer: "It selects every second value from column 1 ('midterm'), NOT 'student'! Column 0 is student, column 1 is midterm.",
    badge: "Mockup Q7(e)"
  },
  {
    id: 17,
    topic: "Measurements",
    question: "What measurement level are ZIP codes, phone numbers, and area codes?",
    answer: "NOMINAL! Even though they are composed of digits, arithmetic operations (+, -, average) are meaningless. They are purely categorical labels/identifiers.",
    badge: "Trap Question"
  },
  {
    id: 18,
    topic: "Measurements",
    question: "What measurement level is temperature in Fahrenheit vs Kelvin?",
    answer: "Fahrenheit/Celsius is INTERVAL (0° is arbitrary; 80° is NOT twice as hot as 40°). Kelvin is RATIO because 0 K is absolute zero (absence of thermal energy), making ratios meaningful.",
    badge: "Core Concept"
  },
  {
    id: 19,
    topic: "Measurements",
    question: "What measurement level are movie ratings (poor, fair, good, excellent)?",
    answer: "ORDINAL! Categories possess a natural, clear ranking, but the numerical intervals between successive ratings are unknown or unequal.",
    badge: "Mockup Q1(a)"
  },
  {
    id: 20,
    topic: "Matplotlib",
    question: "What is the difference between a Matplotlib Figure and an Axes?",
    answer: "Figure is the overall canvas/window/container. Axes is an individual plotting region inside the figure containing coordinate systems, axes lines, labels, and plotted data.",
    badge: "Mockup Q11(a)"
  },
  {
    id: 21,
    topic: "Matplotlib",
    question: "What does fig, ax = plt.subplots(2, 2) create?",
    answer: "It creates one Figure ('fig') and a 2×2 NumPy array ('ax') containing four distinct Axes objects, indexed as ax[row, col].",
    badge: "Mockup Q11(b)"
  },
  {
    id: 22,
    topic: "Matplotlib",
    question: "Why is the Object-Oriented interface preferred over Pyplot (plt.*) for multiple subplots?",
    answer: "Pyplot implicitly modifies the 'currently active' Axes, leading to commands like plt.title() landing on the wrong subplot. OO interface explicitly calls methods on specific Axes objects (ax[0, 1].set_title()), avoiding state confusion.",
    badge: "Mockup Q11(c, d)"
  },
  {
    id: 23,
    topic: "Visualization",
    question: "What are the 5 major design flaws in the mockup exam study time chart?",
    answer: "1. Truncated baseline (starts at 35 instead of 0).\n2. Scrambled chronological order (Wed before Tue).\n3. Missing units on axis ('Average' lacks metric & minutes).\n4. Visual clutter (thick borders & heavy dark gridlines).\n5. Angled text labels (must be horizontal).",
    badge: "Mockup Q10"
  },
  {
    id: 24,
    topic: "Visualization",
    question: "Why must bar charts always start their vertical axis at zero?",
    answer: "Because viewers judge quantity by the relative length/height of bars. Truncating the baseline exaggerates proportional differences, making minor variations look massive.",
    badge: "Design Rule"
  },
  {
    id: 25,
    topic: "Visualization",
    question: "What is the recommended gap width between bars in a bar chart?",
    answer: "The gap between adjacent bars should be approximately 60% to 80% of the width of a single bar.",
    badge: "Slide Rule"
  },
  {
    id: 26,
    topic: "Visualization",
    question: "What is the rule regarding dual-axis line charts?",
    answer: "NEVER use dual-axis charts! They are easily manipulated, mislead viewers by arbitrarily aligning unrelated scales, and can produce false intersections. Use stacked charts or small multiples instead.",
    badge: "Design Rule"
  },
  {
    id: 27,
    topic: "Data Prep",
    question: "What is the Cardinal Rule of Preprocessing to prevent Data Leakage?",
    answer: "Learn all preprocessing (fit scalers, determine bin edges, apply SMOTE) on the TRAINING SET ONLY! Validation and Test sets must only be transformed using the learned training parameters, and never oversampled.",
    badge: "Cardinal Rule ⭐"
  },
  {
    id: 28,
    topic: "Data Prep",
    question: "When is Min-Max scaling preferred over Z-Score standardization?",
    answer: "Min-Max is preferred when algorithms require strictly bounded ranges ([0, 1] or [-1, 1], e.g. neural nets, image data) and the data has very few or no outliers. Z-score is preferred when data is roughly normal or has unknown bounds.",
    badge: "Mockup Q1(c)"
  },
  {
    id: 29,
    topic: "Data Prep",
    question: "Why is Robust Scaling preferred when extreme outliers exist?",
    answer: "Robust scaling uses Median and IQR: (x - median) / IQR. Unlike mean and standard deviation, median and IQR are not inflated by outliers, keeping inliers properly scaled.",
    badge: "Slide Rule"
  },
  {
    id: 30,
    topic: "Data Prep",
    question: "Why should Top Sampling NEVER be used for statistical data science?",
    answer: "Top sampling selects the top k% of instances (e.g. top revenue). It is NOT statistical sampling and introduces severe bias, destroying representativeness.",
    badge: "Slide Rule"
  },
  {
    id: 31,
    topic: "Data Prep",
    question: "What is Stratified Sampling and why is it used?",
    answer: "It divides data into subgroups (strata) and samples proportionally from each stratum. It ensures minority groups or classes are represented in exact proportion to the population.",
    badge: "Slide Rule"
  },
  {
    id: 32,
    topic: "Data Prep",
    question: "What does SMOTE do and where must it be applied?",
    answer: "Synthetic Minority Oversampling Technique creates synthetic examples by interpolating between minority class instances and their nearest neighbors. It must be applied to the TRAINING SET ONLY!",
    badge: "Data Prep"
  },
  {
    id: 33,
    topic: "Studies & Causality",
    question: "Why can't an observational comparison prove that fire causes denser wood (Forest Ecology study)?",
    answer: "Because it is an observational study without random assignment. Confounders like survival bias exist (trees with denser wood may have survived the fire better). Association ≠ Causation.",
    badge: "Mockup Q6(b)"
  },
  {
    id: 34,
    topic: "Studies & Causality",
    question: "If a histogram shows 22% of trees in bin [0.50, 0.55), do exactly 22 trees fall in that bin?",
    answer: "NO! The y-axis represents PERCENT, not raw count! Without knowing total sample size N, the exact count of trees cannot be determined.",
    badge: "Mockup Q6(e)"
  },
  {
    id: 35,
    topic: "ML Concepts",
    question: "What is the difference between Occam's Razor and Einstein's quote in model selection?",
    answer: "Occam's razor sets the upper bound on complexity: prefer the simplest model that explains the data (prevents overfitting). Einstein sets the lower bound: make things as simple as possible, but not simpler (prevents underfitting).",
    badge: "Slide Rule"
  },
  {
    id: 36,
    topic: "ML Concepts",
    question: "Why does Model A (keyword checks) generalize better than Model B (exact sender/subject checks) on spam?",
    answer: "Model A captures recurring feature patterns ('offer', 'win') likely to appear in new emails. Model B memorizes exact training instances (overfitting), failing on any new unseen email.",
    badge: "Mockup Q5"
  },
  {
    id: 37,
    topic: "Missing Data",
    question: "Why is listwise row deletion NOT universally better than imputation?",
    answer: "Deletion discards observed data in other columns of partially missing rows, reduces sample size and statistical power, and introduces selection bias if data is not MCAR.",
    badge: "Mockup Q2(g)"
  },
  {
    id: 38,
    topic: "EDA & Cleaning",
    question: "What should you do with columns that have df.nunique() == 1?",
    answer: "Delete them! Columns with only 1 distinct value have zero variance and provide zero predictive or discriminatory information for any model.",
    badge: "HW2 EDA"
  },
  {
    id: 39,
    topic: "Visualization",
    question: "What chart type is best for showing the distribution shape of a numerical feature?",
    answer: "Histogram! It shows modality, skewness, and probability density shape. (Box plots hide multi-modality).",
    badge: "Mockup Q1(d)"
  },
  {
    id: 40,
    topic: "Visualization",
    question: "What chart type should be used to explore relationships across multiple numerical features?",
    answer: "SPLOM (Scatter Plot Matrix) or a Correlation Matrix Heatmap.",
    badge: "Slide Rule"
  }
];
