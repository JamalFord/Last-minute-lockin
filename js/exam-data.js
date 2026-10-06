// Exam Data for CSC/DSCI 3780 Fundamentals of Data Science Midterm Mockup
// Instructor: Kiril Kuzmin - Fall 2026

const EXAM_DATA = {
  title: "3780 Fundamentals of Data Science - Midterm Mockup",
  totalPoints: 120,
  maxGradedScore: 100,
  timeLimitMinutes: 105,
  questions: [
    {
      id: "q1",
      number: "1",
      title: "Multiple Choice Questions",
      points: 15,
      type: "mcq_group",
      parts: [
        {
          id: "q1a",
          label: "(a)",
          points: 3,
          prompt: "Which of the following is an example of ordinal data?",
          options: [
            { id: "A", text: "Gender (male, female)" },
            { id: "B", text: "City ZIP code" },
            { id: "C", text: "Movie ratings (poor, fair, good, excellent)" },
            { id: "D", text: "Weight in pounds" },
            { id: "E", text: "Daily temperature in Fahrenheit" }
          ],
          correct: "C",
          solution: "Movie ratings (poor, fair, good, excellent) have a meaningful, natural order but differences between categories are not measurable or uniform (ordinal). Gender and ZIP code are nominal (ZIP codes are identifiers/labels, not numerical quantities). Weight in pounds is ratio (has absolute zero and meaningful ratios). Daily temperature in Fahrenheit is interval (meaningful differences, but arbitrary zero)."
        },
        {
          id: "q1b",
          label: "(b)",
          points: 3,
          prompt: "In NumPy, which slicing operation correctly selects the last two columns of a 2D array A?",
          options: [
            { id: "A", text: "A[-2:, :]" },
            { id: "B", text: "A[:, -2:]" },
            { id: "C", text: "A[:-2, :]" },
            { id: "D", text: "A[2:, :-2]" },
            { id: "E", text: "A[-2]" }
          ],
          correct: "B",
          solution: "In NumPy 2D slicing `A[row_slice, col_slice]`: `:` selects all rows, and `-2:` selects from the second-to-last column to the end. `A[-2:, :]` would select the last two rows, not columns."
        },
        {
          id: "q1c",
          label: "(c)",
          points: 3,
          prompt: "In which situation is min-max scaling the most appropriate choice?",
          options: [
            { id: "A", text: "When the data contain significant outliers that must be preserved in the range." },
            { id: "B", text: "When you know that all your features are normally distributed." },
            { id: "C", text: "When features have different scales and the model expects inputs within a fixed range." },
            { id: "D", text: "When most feature values are sparse zeros." },
            { id: "E", text: "When features have already been standardized to mean zero and unit variance." }
          ],
          correct: "C",
          solution: "Min-max scaling compresses feature values strictly into a predefined bound (usually [0, 1] or [-1, 1]). It is chosen when the algorithm expects bounded inputs (e.g. image pixels, neural networks). Crucially, min-max scaling is sensitive to outliers (extreme values squash inliers into tiny subranges), so it is preferred when outliers are rare or absent."
        },
        {
          id: "q1d",
          label: "(d)",
          points: 3,
          prompt: "Which visualization is most appropriate to examine the distribution shape of a numerical variable?",
          options: [
            { id: "A", text: "Scatter plot" },
            { id: "B", text: "Box plot" },
            { id: "C", text: "Bar chart" },
            { id: "D", text: "Histogram" },
            { id: "E", text: "Heatmap" }
          ],
          correct: "D",
          solution: "A histogram bins numerical data and shows the frequency of values, revealing modality (unimodal, bimodal), skewness, and overall distribution shape. Box plots show 5-number summaries and outliers, but hide multi-modality. Bar charts are for categorical data."
        },
        {
          id: "q1e",
          label: "(e)",
          points: 3,
          prompt: "The Pearson correlation between hours studied and exam score is r = 0.92. A student claims: 'Studying more causes higher exam scores.' Which response is most accurate?",
          options: [
            { id: "A", text: "The correlation proves a causal link." },
            { id: "B", text: "The correlation is invalid because both variables are numeric." },
            { id: "C", text: "The correlation is meaningless without normalization." },
            { id: "D", text: "The correlation suggests that the variables are independent." },
            { id: "E", text: "Correlation alone does not imply causation; other factors may influence both." }
          ],
          correct: "E",
          solution: "Correlation alone does not imply causation. A strong correlation (r = 0.92) indicates a linear association, but observational data cannot rule out lurking or confounding variables (such as student dedication, prior coursework, or test anxiety)."
        }
      ]
    },
    {
      id: "q2",
      number: "2",
      title: "True / False with Justifications",
      points: 21,
      type: "tf_group",
      parts: [
        {
          id: "q2a",
          label: "(a)",
          points: 3,
          prompt: "A very large sample guarantees that estimates computed from the sample are representative of the population.",
          correct: "False",
          solution: "False. A large sample reduces random sampling variability (standard error decreases), but it does not remove systematic bias (selection bias, sampling bias). If data are collected from an unrepresentative subgroup, even millions of observations will produce a precisely biased, misleading estimate."
        },
        {
          id: "q2b",
          label: "(b)",
          points: 3,
          prompt: "If two variables have zero Pearson correlation, they must be statistically independent.",
          correct: "False",
          solution: "False. Pearson correlation measures linear relationship only. Zero correlation does not rule out nonlinear relationships. For example, if X is symmetrically distributed around 0 and Y = X^2, Y is completely determined by X (deterministic dependence), yet r = 0."
        },
        {
          id: "q2c",
          label: "(c)",
          points: 3,
          prompt: "Applying ordinary min-max scaling or z-score standardization separately to two nonconstant features may change their Pearson correlation.",
          correct: "False",
          solution: "False. Both min-max scaling and z-score standardization are positive linear transformations of the form x' = a*x + b where a > 0. Pearson's r is invariant to positive linear transformations. r remains identical."
        },
        {
          id: "q2d",
          label: "(d)",
          points: 3,
          prompt: "A dataset of 10,000 distinct numerical observations is divided into 100 equal-frequency bins. Some of these bins may contain zero observations.",
          correct: "False",
          solution: "False. Equal-frequency binning (quantiles) by definition partitions the sorted data so that each bin receives an equal number of observations: 10,000 / 100 = 100 observations per bin. Therefore, no bin can be empty."
        },
        {
          id: "q2e",
          label: "(e)",
          points: 3,
          prompt: "A standard box plot uses the 1.5 x IQR rule and displays all outlier markers. If no markers appear beyond the whiskers, no observations have been flagged by that rule.",
          correct: "True",
          solution: "True. Under the 1.5 x IQR rule, whiskers extend to the most extreme data point within [Q1 - 1.5*IQR, Q3 + 1.5*IQR]. Any points outside this interval are plotted as individual outlier markers. If no markers appear, no points fell outside the fences."
        },
        {
          id: "q2f",
          label: "(f)",
          points: 3,
          prompt: "The correlation between two length variables is the same whether the lengths are measured in meters, feet, or inches.",
          correct: "True",
          solution: "True. Unit conversions multiply the values by positive constants (e.g. 1 m = 3.28084 ft). Linear scaling by positive multipliers leaves the Pearson correlation coefficient unchanged."
        },
        {
          id: "q2g",
          label: "(g)",
          points: 3,
          prompt: "Deleting rows with missing values is preferred over imputation because deletion preserves all available information in the data.",
          correct: "False",
          solution: "False. Listwise deletion discards all observed values present in partially missing rows. This reduces the total sample size and statistical power, and can introduce substantial selection bias if values are not Missing Completely at Random (MCAR)."
        }
      ]
    },
    {
      id: "q3",
      number: "3",
      title: "Scatter Plot Pearson Correlation Matching",
      points: 6,
      type: "matching",
      prompt: "For each scatter plot (A)–(F), select the most appropriate Pearson correlation coefficient from: {-1.0, -0.9, 0.0, 0.9, 1.0, 2.0}.",
      plots: [
        { id: "A", label: "(A)", desc: "Steep upward sloping exact straight line", correct: "1.0" },
        { id: "B", label: "(B)", desc: "Gentle upward sloping exact straight line", correct: "1.0" },
        { id: "C", label: "(C)", desc: "Strong upward trend with slight scatter", correct: "0.9" },
        { id: "D", label: "(D)", desc: "Downward sloping exact straight line", correct: "-1.0" },
        { id: "E", label: "(E)", desc: "Moderate upward sloping exact straight line", correct: "1.0" },
        { id: "F", label: "(F)", desc: "Uniform cloud with no linear trend", correct: "0.0" }
      ],
      solution: "(A) 1.0; (B) 1.0; (C) 0.9; (D) -1.0; (E) 1.0; (F) 0.0.\n\nKey Concepts:\n1. Plots A, B, and E all have r = 1.0! Pearson correlation measures the strength and direction of the linear relationship, NOT the slope of the line. Any straight line with positive slope has r = 1.0.\n2. Plot C shows a strong positive trend with points close to a line, giving r = 0.9.\n3. Plot D is a straight line with negative slope, giving r = -1.0.\n4. Plot F is an unstructured random cloud with no linear relationship, giving r = 0.0.\n5. The value 2.0 is impossible because Pearson r must be in [-1, 1]."
    },
    {
      id: "q4",
      number: "4",
      title: "NumPy Array Broadcasting Rules",
      points: 10,
      type: "broadcasting",
      prompt: "For each pair of arrays, determine whether element-wise addition using broadcasting is possible. If it is, state the resulting shape; otherwise, identify an incompatible dimension.",
      pairs: [
        {
          id: "q4a",
          label: "(a)",
          points: 2,
          a: "A = np.ones((3, 1))",
          b: "B = np.arange(4)",
          a_shape: "(3, 1)",
          b_shape: "(4,)",
          possible: true,
          resultShape: "(3, 4)",
          explanation: "Align right-to-left: (3, 1) and (4,). Trailing dimensions: 1 and 4 -> compatible (1 expands to 4). Leading dimensions: 3 and none (pads to 1) -> compatible (3). Resulting shape is (3, 4)."
        },
        {
          id: "q4b",
          label: "(b)",
          points: 2,
          a: "A = np.ones((2, 3, 4))",
          b: "B = np.arange(4)",
          a_shape: "(2, 3, 4)",
          b_shape: "(4,)",
          possible: true,
          resultShape: "(2, 3, 4)",
          explanation: "Align right-to-left: (2, 3, 4) and (4,). Trailing: 4 and 4 match. Preceding: (2, 3) broadcast against implicit 1s. Resulting shape is (2, 3, 4)."
        },
        {
          id: "q4c",
          label: "(c)",
          points: 2,
          a: "A = np.ones((5, 2))",
          b: "B = np.arange(3)",
          a_shape: "(5, 2)",
          b_shape: "(3,)",
          possible: false,
          resultShape: "Incompatible",
          explanation: "Align right-to-left: trailing dimensions are 2 and 3. They are unequal, and neither dimension is 1. Broadcasting fails at the trailing dimension."
        },
        {
          id: "q4d",
          label: "(d)",
          points: 2,
          a: "A = np.ones((3, 1, 5))",
          b: "B = np.ones((1, 4, 1))",
          a_shape: "(3, 1, 5)",
          b_shape: "(1, 4, 1)",
          possible: true,
          resultShape: "(3, 4, 5)",
          explanation: "Align right-to-left: (3, 1, 5) and (1, 4, 1). Dimension 3: 5 and 1 -> 5. Dimension 2: 1 and 4 -> 4. Dimension 1: 3 and 1 -> 3. Resulting shape is (3, 4, 5)."
        },
        {
          id: "q4e",
          label: "(e)",
          points: 2,
          a: "A = np.ones((6, 1))",
          b: "B = np.zeros((5, 7))",
          a_shape: "(6, 1)",
          b_shape: "(5, 7)",
          possible: false,
          resultShape: "Incompatible",
          explanation: "Align right-to-left: trailing dimensions (1, 7) are compatible -> 7. But leading dimensions (6, 5) are unequal and neither is 1. Incompatible leading dimension."
        }
      ]
    },
    {
      id: "q5",
      number: "5",
      title: "Model Generalization & Inductive Bias (Spam Detection)",
      points: 6,
      type: "model_comparison",
      table: [
        { id: 1, sender: "promo@deals.com", subject: "limited offer for you", outcome: "spam" },
        { id: 2, client: "client@bank.com", subject: "win big today", outcome: "spam" },
        { id: 3, client: "news@university.edu", subject: "course updates", outcome: "not spam" },
        { id: 4, client: "support@store.com", subject: "order details", outcome: "not spam" },
        { id: 5, client: "ceo@company.com", subject: "act now for bonus", outcome: "spam" }
      ],
      parts: [
        {
          id: "q5a",
          label: "(a)",
          points: 2,
          prompt: "Which model(s) are consistent with the labeled data?",
          options: ["Model A only", "Model B only", "Both Model A and Model B", "Neither Model A nor Model B"],
          correct: "Both Model A and Model B",
          solution: "Both models are consistent with the training set: both classify emails 1, 2, and 5 as spam, and emails 3 and 4 as not spam. They both achieve 100% training accuracy."
        },
        {
          id: "q5b",
          label: "(b)",
          points: 4,
          prompt: "Which model is more likely to generalize well to unseen emails? Explain briefly.",
          options: ["Model A", "Model B"],
          correct: "Model A",
          solution: "Model A is much more likely to generalize. Model A learns general lexical patterns ('offer', 'win', 'act now') that naturally recur across unseen spam emails. Model B memorizes exact complete subjects and specific email addresses from the 5 training samples (extreme overfitting / memorization). When new spam arrives with different senders or phrased slightly differently, Model B will fail completely."
        }
      ]
    },
    {
      id: "q6",
      number: "6",
      title: "Forest Ecology Study & Histogram Interpretation",
      points: 10,
      type: "tf_group",
      context: "In an illustrative forest-ecology study after a fire in North Georgia, researchers compare burnt trees that survived with visible charring and unburnt trees of the same species nearby. They observe the groups; they do not assign trees to fire exposure. Histograms show percentage of trees whose wood density falls in each interval [0.0 to 1.0]. Group sample sizes are NOT reported.",
      parts: [
        {
          id: "q6a",
          label: "(a)",
          points: 2,
          prompt: "More than half of the burnt trees have wood density at least 0.5.",
          correct: "True",
          solution: "True. Looking at the burnt trees histogram, nearly all of the distribution lies in bins at or above 0.5 (density >= 0.5 sum to ~85%), which is clearly greater than 50%."
        },
        {
          id: "q6b",
          label: "(b)",
          points: 2,
          prompt: "These histograms establish that exposure to fire causes trees to develop denser wood.",
          correct: "False",
          solution: "False. This is an observational study, not a randomized controlled trial. Researchers observed surviving trees rather than randomly assigning trees to fire exposure. Survival bias is a huge confounder: trees that already had denser wood may have been more likely to survive fire. Association does not establish causation."
        },
        {
          id: "q6c",
          label: "(c)",
          points: 2,
          prompt: "The proportion within each group having density between 0.75 and 0.80 is approximately the same for burnt and unburnt trees.",
          correct: "True",
          solution: "True. In both histograms, the bar corresponding to [0.75, 0.80) is at roughly the same height: approximately 17% in both groups."
        },
        {
          id: "q6d",
          label: "(d)",
          points: 2,
          prompt: "About 20% of the burnt trees have density between 0.75 and 0.80 g/cm^3.",
          correct: "True",
          solution: "True. The burnt tree bar for interval [0.75, 0.80) is right at approximately 20% (specifically ~17-20%)."
        },
        {
          id: "q6e",
          label: "(e)",
          points: 2,
          prompt: "Exactly 22 unburnt trees have density between 0.50 and 0.55.",
          correct: "False",
          solution: "False. The vertical axis displays PERCENT (relative frequency), not raw counts! While ~22% of unburnt trees fall into this bin, the total sample size N is unknown, so the exact number of trees cannot be determined."
        }
      ]
    },
    {
      id: "q7",
      number: "7",
      title: "Pandas DataFrame Indexing & Slicing",
      points: 15,
      type: "tf_group",
      context: "Code creates DataFrame:\nimport pandas as pd\ndf = pd.DataFrame({\n  'student': ['Alex', 'Bina', 'Carlos', 'Deepa', 'Evan'],\n  'midterm': [82, 91, 76, 88, 95],\n  'final': [85, 94, 80, 90, 93]\n}, index=[0, 1, 2, 3, 4])",
      parts: [
        {
          id: "q7a",
          label: "(a)",
          points: 3,
          prompt: "df['student':'midterm'] returns two columns.",
          correct: "False",
          solution: "False. In Pandas, the direct slice syntax `df[...]` slices ROWS by index, not columns! Furthermore, string slice bounds are invalid when the row index consists of integers."
        },
        {
          id: "q7b",
          label: "(b)",
          points: 3,
          prompt: "df[['student', 'midterm']] returns two columns.",
          correct: "True",
          solution: "True. Passing a Python list of column labels (`[['col1', 'col2']]`) selects those specific columns and returns a DataFrame."
        },
        {
          id: "q7c",
          label: "(c)",
          points: 3,
          prompt: "df['midterm'] > 85 produces a Boolean Series of length 5.",
          correct: "True",
          solution: "True. This vectorized comparison evaluates each element of the 'midterm' Series against 85, producing a Boolean Series of length 5 ([False, True, False, True, True])."
        },
        {
          id: "q7d",
          label: "(d)",
          points: 3,
          prompt: "df.loc[2:4, 'midterm':'final'] includes both row 4 and column final.",
          correct: "True",
          solution: "True. `.loc[]` is label-based indexing, and label slicing in Pandas is INCLUSIVE of both the start and stop labels! Rows 2, 3, 4 and columns 'midterm' and 'final' are all included."
        },
        {
          id: "q7e",
          label: "(e)",
          points: 3,
          prompt: "df.iloc[::2, 1] selects every second student's name from column student.",
          correct: "False",
          solution: "False. `.iloc[]` uses 0-based integer positions. Positional column 0 is 'student', whereas positional column 1 is 'midterm'! `df.iloc[::2, 1]` selects every second score from 'midterm' (82, 76, 95)."
        }
      ]
    },
    {
      id: "q8",
      number: "8",
      title: "Box Plot Analysis (Atlanta Home Prices)",
      points: 10,
      type: "mcq_group",
      context: "A box plot represents a sample of Atlanta-area home prices (in millions of USD) with all outlier markers shown. The box extends from ~0.18 to ~0.43 with median line at ~0.23. The lower whisker reaches ~0.04. Multiple outliers are plotted above the upper whisker reaching up to 1.42.",
      parts: [
        {
          id: "q8a",
          label: "(a)",
          points: 2,
          prompt: "Which description is most consistent with the box plot?",
          options: [
            { id: "A", text: "Symmetric" },
            { id: "B", text: "Uniform" },
            { id: "C", text: "Normal" },
            { id: "D", text: "Right-skewed" },
            { id: "E", text: "Left-skewed" }
          ],
          correct: "D",
          solution: "Right-skewed (positively skewed). The median is towards the lower end of the box, the upper whisker is longer, and a long trail of outliers extends far to the right."
        },
        {
          id: "q8b",
          label: "(b)",
          points: 2,
          prompt: "Approximately where is the median home price?",
          options: [
            { id: "A", text: "$150,000" },
            { id: "B", text: "$230,000" },
            { id: "C", text: "$300,000" },
            { id: "D", text: "$43,000" },
            { id: "E", text: "Impossible to tell from the plot" }
          ],
          correct: "B",
          solution: "$230,000 (0.23 million). The median is indicated by the vertical line inside the box, which aligns with approximately 0.23."
        },
        {
          id: "q8c",
          label: "(c)",
          points: 2,
          prompt: "The high-price records have been checked against the source and are correct. Which is the most plausible explanation among these choices for the upper outliers?",
          options: [
            { id: "A", text: "Data-entry errors in the recorded prices" },
            { id: "B", text: "Missing price values" },
            { id: "C", text: "Luxury homes priced far above the median" },
            { id: "D", text: "Incomplete sales records with no price" },
            { id: "E", text: "Low-priced foreclosures" }
          ],
          correct: "C",
          solution: "Luxury homes priced far above the median. Real estate distributions naturally have a long right tail containing high-value luxury properties."
        },
        {
          id: "q8d",
          label: "(d)",
          points: 2,
          prompt: "The minimum home price shown is approximately",
          options: [
            { id: "A", text: "$0" },
            { id: "B", text: "$40,000" },
            { id: "C", text: "$100,000" },
            { id: "D", text: "$180,000" },
            { id: "E", text: "Impossible to tell from the plot" }
          ],
          correct: "B",
          solution: "$40,000 (0.04 million). The minimum data value is represented by the tip of the lower whisker, located at approximately 0.04."
        },
        {
          id: "q8e",
          label: "(e)",
          points: 2,
          prompt: "Removing the high-price outliers would most directly affect which measure of center in the way described?",
          options: [
            { id: "A", text: "The median, which would increase." },
            { id: "B", text: "The mean, which would decrease." },
            { id: "C", text: "The mode, which would increase." },
            { id: "D", text: "The mode, which would decrease." },
            { id: "E", text: "None; outliers do not affect measures of center." }
          ],
          correct: "B",
          solution: "The mean, which would decrease. The arithmetic mean is sensitive to extreme values in the tail. Removing large positive outliers pulls the mean down. The median is resistant (robust) to extreme outliers."
        }
      ]
    },
    {
      id: "q9",
      number: "9",
      title: "Sample vs. Population Variance & Bessel's Correction",
      points: 5,
      type: "free_response",
      prompt: "For a dataset x1, x2, ..., xn with mean x̄, consider s^2 = (1 / (n - 1)) * sum((xi - x̄)^2) and σ^2 = (1 / n) * sum((xi - x̄)^2). Explain conceptually why s^2 uses n - 1 instead of n when estimating a population variance.",
      solution: "Conceptual Explanation (Bessel's Correction):\n1. When calculating variance from a sample, the true population mean μ is unknown, so we must estimate it using the sample mean x̄.\n2. The sample mean x̄ is calculated directly from the sample data, so the sample points are, on average, closer to x̄ than to the true population mean μ.\n3. In fact, mathematically, x̄ is the exact value that minimizes the sum of squared deviations sum((xi - c)^2). Thus, sum((xi - x̄)^2) is always smaller than or equal to sum((xi - μ)^2).\n4. If we divide by n, we would systematically underestimate the true population variance (it would be a biased estimator).\n5. By dividing by n - 1 (the degrees of freedom, having lost 1 degree of freedom to estimate x̄), Bessel's correction removes this downward bias, producing an unbiased estimator of population variance."
    },
    {
      id: "q10",
      number: "10",
      title: "Data Visualization: Spotting Chart Design Flaws",
      points: 10,
      type: "chart_audit",
      prompt: "A student summarizes the mean daily study time, in minutes, for the same 40 students over four consecutive days (Monday: 40, Tuesday: 44, Wednesday: 48, Thursday: 50). The chart has headline: 'STUDY TIME TRIPLED IN FOUR DAYS!', vertical axis starting at 35, Wednesday placed before Tuesday, y-axis labeled simply 'Average', dense gridlines and heavy border, and angled labels.\n\nIdentify 5 distinct design deficiencies, explain why each makes the chart misleading/harder to interpret, and propose a specific correction.",
      deficiencies: [
        {
          id: "def1",
          name: "Truncated Bar Baseline (Axis does not start at 0)",
          why: "The vertical axis starts at 35 instead of 0. Bar heights represent magnitude from baseline; truncating the baseline exaggerates proportional differences, making 48 look more than double 40.",
          fix: "Start the vertical axis at zero (0 to 60)."
        },
        {
          id: "def2",
          name: "Scrambled Chronological Time Order",
          why: "Wednesday is placed before Tuesday (Monday, Wednesday, Tuesday, Thursday). Chronological data must follow natural temporal order; scrambling confuses trends.",
          fix: "Order the bars chronologically: Monday, Tuesday, Wednesday, Thursday."
        },
        {
          id: "def3",
          name: "Missing Quantity and Units on the Axis",
          why: "The axis label is ambiguously named 'Average' without specifying what is being averaged or what units are measured.",
          fix: "Use an explicit descriptive label with units: 'Mean daily study time (minutes)'."
        },
        {
          id: "def4",
          name: "Excessive Visual Clutter (Chartjunk)",
          why: "Heavy dark gridlines and thick outer chart borders compete visually with the data bars, increasing cognitive load.",
          fix: "Remove unnecessary borders and make gridlines subtle light gray or remove them entirely."
        },
        {
          id: "def5",
          name: "Angled / Slanted Axis Text Labels",
          why: "Rotating labels diagonally or vertically forces viewers to tilt their head, reducing reading speed and legibility.",
          fix: "Keep all text labels strictly horizontal."
        },
        {
          id: "def6",
          name: "Misleading Headline (Sensationalism)",
          why: "The title claims 'STUDY TIME TRIPLED IN FOUR DAYS!', but study time only grew from 40 to 50 minutes (a 25% increase, not 200%/3x!).",
          fix: "Use an objective, honest title: 'Mean Study Time for 40 Students Over 4 Days' or note '+25% increase'."
        }
      ]
    },
    {
      id: "q11",
      number: "11",
      title: "Matplotlib Architecture: Pyplot vs. Object-Oriented Interface",
      points: 12,
      type: "mcq_group",
      parts: [
        {
          id: "q11a",
          label: "(a)",
          points: 3,
          prompt: "Which statement best describes the relationship between a Matplotlib Figure and an Axes object?",
          options: [
            { id: "A", text: "A Figure represents one data series, while an Axes represents all data series." },
            { id: "B", text: "A Figure is the overall canvas, while an Axes is an individual plotting area within that figure." },
            { id: "C", text: "A Figure contains only titles and labels, while an Axes contains the actual data." },
            { id: "D", text: "A Figure and an Axes are two names for the same object." }
          ],
          correct: "B",
          solution: "A Figure is the top-level container or canvas (the window or saved image). It may contain one or many individual plotting regions. Each individual plotting region is represented by an Axes object (which contains the x-axis, y-axis, data lines, title, labels)."
        },
        {
          id: "q11b",
          label: "(b)",
          points: 3,
          prompt: "Suppose we create a figure using `fig, ax = plt.subplots(2, 2)`. Which statement is correct?",
          options: [
            { id: "A", text: "ax is a single plotting area containing four data series." },
            { id: "B", text: "fig is a 2 x 2 array containing four figures." },
            { id: "C", text: "ax contains four separate Axes objects, arranged conceptually as two rows and two columns." },
            { id: "D", text: "Matplotlib creates four completely independent figures." }
          ],
          correct: "C",
          solution: "`fig, ax = plt.subplots(2, 2)` creates a single Figure `fig`, and `ax` is a 2D NumPy array of shape (2, 2) containing four distinct `Axes` objects accessed via `ax[row, col]` (e.g. `ax[0, 0]`, `ax[0, 1]`, etc.)."
        },
        {
          id: "q11c",
          label: "(c)",
          points: 3,
          prompt: "A student creates several subplots and then uses a sequence of commands such as `plt.xlabel('Time'); plt.title('Sales')`. The student notices that labels occasionally appear on a different subplot than expected. Which explanation is most appropriate?",
          options: [
            { id: "A", text: "Matplotlib randomly chooses which subplot receives a label." },
            { id: "B", text: "Labels can only be added correctly when there is a single subplot." },
            { id: "C", text: "The pyplot interface often acts on the currently active Axes, so the result depends on which subplot is current when the command is executed." },
            { id: "D", text: "The problem occurs because xlabel and title cannot be used in the same figure." }
          ],
          correct: "C",
          solution: "The pyplot state-machine interface (`plt.*`) maintains an internal global pointer to the 'current figure' and 'current axes' (`plt.gca()`). When calling `plt.xlabel()`, it applies to whichever Axes was last touched, leading to bugs when managing multiple subplots."
        },
        {
          id: "q11d",
          label: "(d)",
          points: 3,
          prompt: "Why is the object-oriented interface generally easier to manage for figures containing several subplots?",
          options: [
            { id: "A", text: "It automatically chooses the statistically best visualization." },
            { id: "B", text: "It creates higher-resolution plots than the pyplot interface." },
            { id: "C", text: "Each plotting command is associated explicitly with a particular Axes object, making it clear which subplot is being modified." },
            { id: "D", text: "It is the only Matplotlib interface that allows more than one subplot." }
          ],
          correct: "C",
          solution: "In the Object-Oriented interface, methods are invoked directly on explicit Axes instances (e.g., `ax[0, 1].set_xlabel('Time')`). There is no implicit global state or confusion about which subplot is currently active, resulting in predictable, modular code."
        }
      ]
    }
  ]
};
