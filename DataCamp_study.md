The midterm covers five primary areas across fundamental data science, Python mechanics, and exploratory data analysis.

## Core Exam Topics Breakdown

* **NumPy Mechanics & Broadcasting (Questions 1b, 4):**
* Multi-dimensional slicing and indexing (e.g., negative step slicing, selecting trailing columns `A[:, -2:]`).
* Broadcasting arithmetic rules: aligning trailing dimensions from right to left, matching compatibility when dimensions are identical or equal to 1, and recognizing incompatible shapes.


* **Pandas DataFrame Operations (Question 7):**
* Explicit indexing vs subsetting syntax: label slicing vs list-of-labels (`df[['col1', 'col2']]`).
* Boolean Series masking (`df['col'] > val`).
* Indexers: `.loc[]` (label-based, inclusive of both start and stop boundaries) versus `.iloc[]` (integer position-based, exclusive of stop index).


* **Descriptive Statistics & Outlier Analysis (Questions 1a, 1d, 2d, 2e, 8, 9):**
* Levels of measurement (nominal, ordinal, interval, ratio).
* Measures of center and spread: mean vs median robustness against extreme skewness.
* Box plot mechanics: $1.5 \times \text{IQR}$ rule, whisker boundaries, and outlier identification.
* Sample variance ($s^2$) vs population variance ($\sigma^2$): degrees of freedom and Bessel's correction ($\frac{1}{n-1}$) to eliminate downward bias when estimating population spread from sample deviations.
* Binning strategies: equal-width vs equal-frequency discretization.


* **Bivariate Analysis, Study Design, & Preprocessing (Questions 1c, 1e, 2a, 2b, 2c, 2f, 2g, 3, 5, 6):**
* Pearson correlation coefficient $r \in [-1.0, 1.0]$: visual scatter plot estimation, zero-correlation non-linear relationships, and linear transformation invariance (z-score standardization, min-max scaling, and unit conversions).
* Observational studies vs controlled experiments: confounding variables, why correlation does not imply causation, and why large sample size cannot compensate for selection bias.
* Data preprocessing trade-offs: min-max scaling bounds vs outlier sensitivity, and listwise deletion vs imputation.
* Model generalization: overfitting/memorization of specific training instances vs robust feature rules.


* **Data Visualization & Matplotlib Architecture (Questions 10, 11):**
* Identifying chart design flaws: non-zero baselines on bar charts, misleading aspect ratios, chronological misordering, and visual distortion.
* Matplotlib design: `Figure` (the top-level canvas) versus `Axes` (the individual coordinate plotting area).
* State-machine interface (`plt.plot`, pyplot implicit tracking) versus Object-Oriented interface (`fig, ax = plt.subplots()` explicit multi-axes manipulation).



---

## Target DataCamp Courses & Chapters

* **[Data Manipulation with pandas](https://www.datacamp.com/courses/data-manipulation-with-pandas):**
* *Chapter 1: Transforming DataFrames* — Focus on slicing, sorting, setting indexes, subsetting rows by categorical/numerical logic, and column filtering.
* *Chapter 2: Aggregating DataFrames* — Practice summary statistics, `.agg()`, and grouped metrics.


* **[Introduction to Statistics in Python](https://www.datacamp.com/courses/introduction-to-statistics-in-python):**
* *Chapter 1: Summary Statistics* — Review data types, mean/median under skew, variance, standard deviation, quartiles, and $1.5 \times \text{IQR}$ outlier detection.
* *Chapter 4: Correlation and Experimental Design* — Study Pearson correlation calculation, caveats (non-linear relationships, lurking variables), confounded observational data, and study design.


* **[Introduction to Data Visualization with Matplotlib](https://www.datacamp.com/courses/introduction-to-data-visualization-with-matplotlib):**
* *Chapter 1: Introduction to Matplotlib* — Master `plt.subplots()`, adding data directly to `Axes` objects, setting titles/labels per subplot, and managing small multiples grids.
* *Chapter 2: Quantitative Comparisons and Statistical Visualizations* — Review histograms and bar chart construction.


* **[Intermediate Python](https://www.datacamp.com/courses/intermediate-python):**
* *Chapter 3: Logic, Control Flow and Filtering* — Review boolean comparisons on arrays and DataFrames.
* *Chapter 2: Dictionaries & Pandas* — Review basic tabular indexing mechanisms.


* **[Dealing with Missing Data in Python](https://www.datacamp.com/courses/dealing-with-missing-data-in-python):**
* *Chapter 1 & 2: Null value operations & patterns* — Compare listwise row deletion against mean/median imputation.



---

## Immediate Study Action Plan

| Phase | Focus Areas | Verification Checklist |
| --- | --- | --- |
| **Step 1** | Matplotlib & Pandas Mechanics | • Write a snippet creating a $2 \times 2$ grid with `fig, ax = plt.subplots(2, 2)` and label each subplot independently.<br>

<br>• Confirm differences between `df.loc[2:4, 'midterm':'final']` and `df.iloc[2:4, 1:3]`. |
| **Step 2** | NumPy Broadcasting Rules | • Work through broadcasting manual checks: pair $(3, 1, 5)$ with $(1, 4, 1)$, and $(6, 1)$ with $(5, 7)$ to verify resulting shapes or dimension mismatches. |
| **Step 3** | Statistics & Visualization Logic | • Complete Chapter 1 & 4 exercises in *Introduction to Statistics in Python*.<br>

<br>• Review why Bessel's correction uses $n-1$: substituting sample mean $\bar{x}$ for true population mean $\mu$ underestimates sum of squared deviations by exactly 1 degree of freedom. |