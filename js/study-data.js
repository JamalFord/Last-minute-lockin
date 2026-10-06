// Comprehensive Study Guides & Topics Breakdown for CSC/DSCI 3780
// Extracted from Professor Kiril Kuzmin's Lecture Slides (Weeks 1 to 6) and Mockup Materials

const STUDY_MODULES = [
  {
    id: "module-lifecycle",
    title: "1. Data Science Lifecycle & Workflow",
    icon: "🔄",
    summary: "CRISP-DM stages, data pipelines, problem formulation, and model generalization.",
    content: `
      <h3>1.1 High-Level Data Science Lifecycle</h3>
      <p>The entire data science workflow is <strong>iterative</strong>. Problems generally begin in one of two directions:</p>
      <ul>
        <li><strong>Question-Driven:</strong> Start with a domain question or business problem, then collect relevant data.</li>
        <li><strong>Data-Driven:</strong> Start with existing data, then explore questions that the data can answer.</li>
      </ul>

      <h3>1.2 The CRISP-DM Framework</h3>
      <p><strong>CRISP-DM</strong> (Cross-Industry Standard Process for Data Mining) defines 6 core phases:</p>
      <ol>
        <li><strong>Business Understanding:</strong> State project objectives, identify requirements, formulate questions.</li>
        <li><strong>Data Understanding:</strong> Initial data collection, exploration, EDA, identifying data quality issues.</li>
        <li><strong>Data Preparation:</strong> Data cleaning, transformation, feature scaling, binning, sampling, formatting into an Analytical Base Table (ABT).</li>
        <li><strong>Modeling:</strong> Selecting and applying machine learning algorithms, tuning hyperparameters.</li>
        <li><strong>Evaluation:</strong> Rigorously assessing model performance against business goals on validation/test sets.</li>
        <li><strong>Deployment:</strong> Generating reports, integrating models into production pipelines, monitoring.</li>
      </ol>

      <div class="callout warning">
        <strong>⚠️ Exam Trap: Perception vs. Reality in Data Science:</strong>
        Students assume the majority of time is spent on "Machine Learning Modeling". In reality, <strong>data collection, cleaning, and preparation</strong> consume 70–80% of project time!
      </div>

      <h3>1.3 Machine Learning Paradigms</h3>
      <ul>
        <li><strong>Supervised Learning:</strong> Every instance has a ground-truth target label (e.g., Classification for discrete targets, Regression for continuous targets).</li>
        <li><strong>Unsupervised Learning:</strong> No labels provided; the algorithm identifies intrinsic structure, clusters, or patterns (e.g., Clustering, Dimensionality Reduction, Association Rules).</li>
        <li><strong>Semi-Supervised Learning:</strong> Small set of labeled data combined with a large pool of unlabeled data.</li>
        <li><strong>Self-Supervised Learning:</strong> Unlabeled data where the training target is generated automatically from the data itself (e.g. predicting masked words in LLMs).</li>
        <li><strong>Reinforcement Learning:</strong> No static training dataset; an agent learns optimal behavior through trial, errors, rewards, and penalties.</li>
      </ul>

      <h3>1.4 Generalization, Inductive Bias & Overfitting</h3>
      <ul>
        <li><strong>Generalization:</strong> The ultimate goal of ML is to perform well on <em>unseen</em> test data, not just memorize training data.</li>
        <li><strong>Consistency:</strong> Memorizing the training set (100% training accuracy). If training data has noise, consistency with noise is undesirable!</li>
        <li><strong>Occam's Razor:</strong> Given multiple models that fit the data equally well, the simplest explanation/model is preferred. Warns against unnecessary complexity.</li>
        <li><strong>Einstein's Quote:</strong> "Everything should be made as simple as possible, but not simpler." Warns against over-simplification (underfitting).</li>
        <li><strong>Inductive Bias:</strong> The set of assumptions a model uses to predict outcomes for unseen inputs:
          <ul>
            <li><strong>Restriction Bias:</strong> Limits imposed by the hypothesis space (e.g. Linear regression only considers hyperplanes).</li>
            <li><strong>Preference Bias:</strong> Ordering or preference within the hypothesis space (e.g. Decision trees prefer smaller trees; k-means prefers spherical clusters).</li>
          </ul>
        </li>
        <li><strong>No Free Lunch Theorem:</strong> No single algorithm outperforms all others across every problem; inductive biases suited for one problem inevitably fail on another.</li>
      </ul>
    `
  },
  {
    id: "module-datatypes",
    title: "2. Data Types & Levels of Measurement",
    icon: "📊",
    summary: "Categorical vs. Numerical, Nominal, Ordinal, Interval, Ratio, Discrete vs. Continuous.",
    content: `
      <h3>2.1 Data Taxonomy</h3>
      <p>Data can be divided into:</p>
      <ul>
        <li><strong>Structured:</strong> Tabular data with rows and columns (Analytical Base Table).</li>
        <li><strong>Unstructured:</strong> Text, images, audio, video.</li>
      </ul>

      <h3>2.2 The Four Levels of Measurement (Stevens' Scales)</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Scale</th>
              <th>Category</th>
              <th>Key Properties</th>
              <th>Allowed Operations</th>
              <th>Representative Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nominal</strong></td>
              <td>Categorical</td>
              <td>Qualitative labels/names. No inherent ranking or ordering.</td>
              <td>= , ≠ , Mode</td>
              <td>Gender (binary), City ZIP code, Area codes, Eye color, Blood type</td>
            </tr>
            <tr>
              <td><strong>Ordinal</strong></td>
              <td>Categorical</td>
              <td>Ordered categories with clear ranking. Differences between ranks are unequal or unknown.</td>
              <td>= , ≠ , &gt; , &lt; , Median</td>
              <td>Movie ratings (poor, fair, good, excellent), Likert scale (1-7 agree), Education level, Letter grades (A, B, C)</td>
            </tr>
            <tr>
              <td><strong>Interval</strong></td>
              <td>Numerical</td>
              <td>Ordered with uniform, measurable differences. <em>Arbitrary zero</em> (zero does not mean absence of quantity). Ratios are NOT meaningful!</td>
              <td>+ , - , Mean, Std Dev</td>
              <td>Temperature in °F or °C (0° does not mean no heat; 80°F is NOT twice as hot as 40°F), Calendar years (2026 AD)</td>
            </tr>
            <tr>
              <td><strong>Ratio</strong></td>
              <td>Numerical</td>
              <td>Ordered, equal intervals, and a <em>True Absolute Zero</em> (0 means complete absence). Ratios are fully meaningful!</td>
              <td>+ , - , × , ÷ , All stats</td>
              <td>Weight in pounds, Height, Salary, Distance, Age, Temperature in Kelvin (0 K = absolute zero)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout tip">
        <strong>💡 Rapid Decision Heuristic for Exams:</strong>
        <ol>
          <li>Can you compute ratios (e.g. "is X twice as much as Y")? If YES → <strong>Ratio</strong>.</li>
          <li>Does subtraction make sense, but zero is arbitrary (0° doesn't mean absence)? If YES → <strong>Interval</strong>.</li>
          <li>Can you order them, but cannot do meaningful subtraction? If YES → <strong>Ordinal</strong>.</li>
          <li>Are they just distinct labels or categories with no order? If YES → <strong>Nominal</strong> (Beware: ZIP codes and phone numbers are numbers, but strictly Nominal!).</li>
        </ol>
      </div>

      <h3>2.3 Numerical Subtypes</h3>
      <ul>
        <li><strong>Discrete:</strong> Countable values, typically integers (e.g., number of bedrooms, customer visits, coin flips).</li>
        <li><strong>Continuous:</strong> Uncountably infinite possible values within any interval (e.g., house price, time in seconds, weight).</li>
      </ul>
    `
  },
  {
    id: "module-statistics",
    title: "3. Descriptive Statistics & Spread",
    icon: "📐",
    summary: "Mean, median, mode, IQR, sample vs population variance, Bessel's correction, z-score.",
    content: `
      <h3>3.1 Measures of Center</h3>
      <ul>
        <li><strong>Mean (\\(\\bar{x}\\)):</strong> Arithmetic average: \\(\\frac{1}{n} \\sum_{i=1}^n x_i\\). Sensitive to extreme outliers and heavy skew!</li>
        <li><strong>Median:</strong> Middle value of sorted data (50th percentile). Robust (resistant) to outliers.</li>
        <li><strong>Mode:</strong> Most frequently occurring value. Can be used on categorical data.</li>
      </ul>

      <h3>3.2 Skewness & Relationship Between Center Metrics</h3>
      <ul>
        <li><strong>Right-Skewed (Positive Skew):</strong> Long tail to the right. <code>Mean &gt; Median &gt; Mode</code>. (e.g. Income, Atlanta home prices).</li>
        <li><strong>Symmetric:</strong> Normal / bell-shaped. <code>Mean ≈ Median ≈ Mode</code>.</li>
        <li><strong>Left-Skewed (Negative Skew):</strong> Long tail to the left. <code>Mean &lt; Median &lt; Mode</code>.</li>
      </ul>

      <h3>3.3 Measures of Spread & Dispersion</h3>
      <ul>
        <li><strong>Range:</strong> \\(\\max(x) - \\min(x)\\). Highly sensitive to extreme values.</li>
        <li><strong>Interquartile Range (IQR):</strong> Middle 50% of data: \\(\\text{IQR} = Q_3 - Q_1\\). Robust to outliers.</li>
        <li><strong>Population Variance (\\(\\sigma^2\\)):</strong> \\(\\sigma^2 = \\frac{1}{N} \\sum_{i=1}^N (x_i - \\mu)^2\\). Used when measuring entire population.</li>
        <li><strong>Sample Variance (\\(s^2\\)):</strong> \\(s^2 = \\frac{1}{n - 1} \\sum_{i=1}^n (x_i - \\bar{x})^2\\). Used when estimating population variance from sample.</li>
        <li><strong>Sample Standard Deviation (\\(s\\)):</strong> \\(s = \\sqrt{s^2}\\). In the original measurement units.</li>
      </ul>

      <div class="callout warning">
        <strong>⭐ Core Exam Question: Why Bessel's Correction Uses \\(n - 1\\) instead of \\(n\\):</strong>
        <p>When estimating the variance of a population from a sample, the true population mean \\(\\mu\\) is unknown, so we must substitute the sample mean \\(\\bar{x}\\).</p>
        <p>Because \\(\\bar{x}\\) is derived directly from the sample, the sample data points are mathematically <em>closer</em> to \\(\\bar{x}\\) than to the true \\(\\mu\\). Specifically, \\(\\bar{x}\\) is the exact number that minimizes \\(\\sum (x_i - c)^2\\). As a consequence, \\(\\sum_{i=1}^n (x_i - \\bar{x})^2 &lt; \\sum_{i=1}^n (x_i - \\mu)^2\\).</p>
        <p>Dividing by \\(n\\) would systematically <strong>underestimate</strong> the population variance (it is a biased estimator). Dividing by \\(n - 1\\) accounts for the 1 degree of freedom lost estimating \\(\\bar{x}\\), eliminating downward bias and yielding an unbiased estimator.</p>
      </div>

      <h3>3.4 Standardized Score (Z-Score) & Empirical Rule</h3>
      <p>Standardized score measures how many standard deviations an observation lies from the mean:</p>
      <div class="math-block">$$z = \\frac{x - \\bar{x}}{s}$$</div>
      <p><strong>Empirical 68–95–99.7 Rule (Normal Distribution):</strong></p>
      <ul>
        <li>68% of data falls within \\(\\mu \\pm 1\\sigma\\).</li>
        <li>95% of data falls within \\(\\mu \\pm 2\\sigma\\).</li>
        <li>99.7% of data falls within \\(\\mu \\pm 3\\sigma\\).</li>
      </ul>
    `
  },
  {
    id: "module-boxplots",
    title: "4. Box Plots & Outlier Analysis",
    icon: "📦",
    summary: "Tukey 1.5xIQR rule, whisker endpoints, outlier identification, and skewed interpretations.",
    content: `
      <h3>4.1 Anatomy of a Box-and-Whisker Plot</h3>
      <p>A box plot visualizes the 5-number summary: Min, \\(Q_1\\), Median (\\(Q_2\\)), \\(Q_3\\), and Max (or whisker bounds with outliers).</p>
      <ul>
        <li><strong>Box:</strong> Spans from \\(Q_1\\) (25th percentile) to \\(Q_3\\) (75th percentile). Height/width represents \\(\\text{IQR} = Q_3 - Q_1\\).</li>
        <li><strong>Median Line:</strong> The line dividing the box represents the 50th percentile. If it is closer to \\(Q_1\\), the distribution is right-skewed.</li>
      </ul>

      <h3>4.2 Tukey's \\(1.5 \\times \\text{IQR}\\) Outlier Rule</h3>
      <p>The calculation of fences:</p>
      <div class="math-block">
        $$\\text{Lower Fence} = Q_1 - 1.5 \\times \\text{IQR}$$<br>
        $$\\text{Upper Fence} = Q_3 + 1.5 \\times \\text{IQR}$$
      </div>

      <div class="callout warning">
        <strong>⚠️ Crucial Professor Rule on Whiskers:</strong>
        <p><strong>Whiskers extend to the nearest actual data point WITHIN the fences!</strong> Whiskers do NOT extend to the calculated fence value unless an actual data point lands exactly on the fence.</p>
        <p>Any data points lying strictly beyond the fences are classified as <strong>outliers</strong> and plotted individually as circles or dots.</p>
        <p><strong>Exam Question 2(e) Insight:</strong> If no markers appear beyond the whiskers in a standard box plot where all outlier markers are displayed, it means <em>zero observations were flagged by the 1.5 × IQR rule</em>!</p>
      </div>

      <h3>4.3 Example from Week 3 Slide 38:</h3>
      <p>Given dataset: <code>[0, 5, 15, 20, 30, 100]</code></p>
      <ul>
        <li>\\(Q_1 = 7.5\\), \\(Q_3 = 27.5\\) \\(\\to \\text{IQR} = 27.5 - 7.5 = 20\\).</li>
        <li>Lower Fence: \\(7.5 - 1.5(20) = -22.5\\). Lowest data point \\(\\ge -22.5\\) is <strong>0</strong>. Lower whisker = 0.</li>
        <li>Upper Fence: \\(27.5 + 1.5(20) = 57.5\\). Greatest data point \\(\\le 57.5\\) is <strong>30</strong>. Upper whisker = 30.</li>
        <li>Data point <strong>100</strong> lies beyond 57.5 \\(\\to\\) plotted as individual outlier marker.</li>
      </ul>

      <h3>4.4 Impact of Outliers on Summary Statistics (Mockup Q8)</h3>
      <ul>
        <li><strong>Right-skewed outlier removal:</strong> Removing extreme high-price outliers <strong>decreases the mean</strong> because the mean was pulled up by extreme numbers.</li>
        <li><strong>Median:</strong> Remains essentially unchanged because median depends on rank/order, not extreme magnitudes.</li>
      </ul>
    `
  },
  {
    id: "module-bivariate",
    title: "5. Bivariate Relationships & Pearson Correlation",
    icon: "📈",
    summary: "Scatter plots, SPLOM, covariance, Pearson r, invariance, and correlation vs. causation.",
    content: `
      <h3>5.1 Pairwise Visualization Matrix</h3>
      <ul>
        <li><strong>Numerical vs. Numerical:</strong> Scatter plot, Connected scatter plot (over time), Bubble chart (3rd feature as point size).</li>
        <li><strong>Categorical vs. Categorical:</strong> Two-way contingency table, Clustered bar chart, Stacked bar chart.</li>
        <li><strong>Categorical vs. Numerical:</strong> Side-by-side Box plots, Conditioned/grouped Histograms.</li>
        <li><strong>Multiple Numerical:</strong> Scatter Plot Matrix (SPLOM), Correlation Matrix Heatmap.</li>
      </ul>

      <h3>5.2 Covariance vs. Pearson Correlation</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Sample Covariance \\(\\text{Cov}(X, Y)\\)</th>
              <th>Pearson Correlation \\(r_{XY}\\)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Formula</strong></td>
              <td>$$\\frac{1}{n-1} \\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})$$</td>
              <td>$$\\frac{\\text{Cov}(X, Y)}{s_X s_Y} = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2 \\sum(y_i-\\bar{y})^2}}$$</td>
            </tr>
            <tr>
              <td><strong>Range</strong></td>
              <td>\\(-\\infty\\) to \\(+\\infty\\) (unbounded)</td>
              <td>Strictly \\([-1.0, +1.0]\\)</td>
            </tr>
            <tr>
              <td><strong>Units</strong></td>
              <td>Units of \\(X \\times\\) Units of \\(Y\\)</td>
              <td>Dimensionless (unitless) standardized quantity</td>
            </tr>
            <tr>
              <td><strong>Sensitivity to Scale</strong></td>
              <td>Changes whenever units change (e.g. meters to mm)</td>
              <td><strong>Invariant</strong> to positive linear transformations</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout warning">
        <strong>⭐ Crucial Invariance Rules for Pearson's \\(r\\):</strong>
        <ol>
          <li><strong>Slope does NOT affect \\(r\\):</strong> A line with slope 0.2 and a line with slope 5.0 both have <strong>\\(r = 1.0\\)</strong> as long as all points lie exactly on the line. Correlation measures the <em>strength of linearity</em>, NOT the steepness of the slope!</li>
          <li><strong>Invariant to Linear Transformations:</strong> If you shift features (add constant) or scale features (multiply by positive constant \\(c &gt; 0\\)), \\(r\\) is completely unchanged!
            <ul>
              <li>Unit conversions (meters to feet to inches): \\(r\\) unchanged!</li>
              <li>Z-score standardization: \\(r\\) unchanged!</li>
              <li>Min-max scaling: \\(r\\) unchanged!</li>
              <li>Multiplying by negative constant reverses sign (\\(r \\to -r\\)).</li>
            </ul>
          </li>
          <li><strong>Zero Correlation \\(\\neq\\) Independence:</strong> Pearson correlation only detects <em>linear</em> association. A non-linear deterministic relationship (like \\(Y = X^2\\) for symmetric \\(X\\)) has \\(r = 0.0\\) even though \\(Y\\) is perfectly dependent on \\(X\\)!</li>
        </ol>
      </div>

      <h3>5.3 Correlation vs. Causation & Study Design</h3>
      <ul>
        <li><strong>Observational Study:</strong> Researchers observe subjects in natural conditions without assigning treatments. Shows <em>association</em>, NEVER causation! Confounding variables (lurking variables) cannot be controlled.</li>
        <li><strong>Randomized Controlled Experiment:</strong> Subjects randomly assigned to treatment and control groups. Randomization balances confounders, enabling causal inference.</li>
        <li><strong>Large Sample Fallacy:</strong> A huge sample size (e.g. 100,000 observations) reduces random variance, but <strong>CANNOT fix systematic or selection bias</strong>. If sampling was unrepresentative, you just get an extremely precise wrong estimate!</li>
      </ul>
    `
  },
  {
    id: "module-visualization",
    title: "6. Data Visualization Rules & Design Flaws",
    icon: "🎨",
    summary: "Simplicity, color rules, bar charts, line charts, pie charts, tables, and the 5 classic design flaws.",
    content: `
      <h3>6.1 Golden Rules of Effective Visualization</h3>
      <ul>
        <li><strong>Simplicity / Decluttering:</strong> Remove chartjunk! Strip unnecessary outer borders, dark background shading, heavy gridlines, and 3D effects.</li>
        <li><strong>Accessibility:</strong> Contrast ratio between labels and background must be \\(\\ge 4.5:1\\). Contrast between adjacent bars/categories must be \\(\\ge 3:1\\). Use multiple visual encodings (color + shape/texture) for color-blind viewers.</li>
        <li><strong>Text Orientation:</strong> <strong>All chart labels must be horizontal!</strong> Never use diagonal, angled, or vertical labels. If category labels are long, use a <em>horizontal bar chart</em>!</li>
        <li><strong>Color Wheel Rule:</strong> Do NOT use colors on opposite sides of the color wheel next to each other in multi-bar charts. Use graduating shades of one color or analogous colors on the same side of the wheel.</li>
      </ul>

      <h3>6.2 Bar Charts Best Practices</h3>
      <ul>
        <li><strong>BASELINE MUST ALWAYS START AT ZERO!</strong> Truncating the vertical axis baseline distorts bar lengths and exaggerates differences.</li>
        <li><strong>Bar Gaps:</strong> The gap between bars should be approximately <strong>60% to 80%</strong> of the width of a single bar.</li>
        <li><strong>Stacked Bar Charts:</strong> Use only when comparing part-to-whole relationships across categories. Limit to <strong>\\(\\le 4\\) stacks</strong>! Avoid negative values.</li>
        <li><strong>Clustered Bar Charts:</strong> Limit cluster size. Directly label the first cluster or match legend order to bar order.</li>
        <li><strong>NEVER USE 3D BAR CHARTS!</strong> 3D distorts height perception and creates false perspective cues.</li>
      </ul>

      <h3>6.3 Line Charts Best Practices</h3>
      <ul>
        <li><strong>Continuous Data:</strong> Use line charts for continuous time series. Do not use for unrelated categorical variables.</li>
        <li><strong>Aspect Ratio:</strong> Choose a neutral aspect ratio (banking to 45° for trend changes). Overly flat or overly tall charts exaggerate or minimize slope.</li>
        <li><strong>Broken vs. Truncated Axes:</strong> If zoomed in, use an explicit broken axis indicator (e.g. with <code>brokenaxes</code>) rather than silent truncation.</li>
        <li><strong>NEVER USE DUAL AXES:</strong> Dual-axis line charts are easily manipulated; arbitrary scaling aligns curves deceptively. Use two stacked charts or small multiples instead.</li>
        <li><strong>Limit Lines:</strong> Maximum of <strong>4 lines</strong> on a single line chart. If more, highlight 1-2 key lines and shade the rest gray, or use small multiples.</li>
      </ul>

      <h3>6.4 Pie Charts Rules</h3>
      <ul>
        <li>Only use when there is a <strong>dominant category</strong> and \\(\\le 5\\) total categories that sum to 100%.</li>
        <li>Never use for time series data.</li>
        <li>Never use 3D pie charts (front slices appear artificially larger than rear slices).</li>
        <li>Never explode slices.</li>
      </ul>

      <h3>6.5 The 5 Classic Design Flaws (Mockup Q10 Breakdown)</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Deficiency</th>
              <th>Why It Is Misleading / Flawed</th>
              <th>Specific Correction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Truncated Baseline</strong></td>
              <td>Axis starts at 35 instead of 0, exaggerating small changes into massive visual height differences.</td>
              <td>Start y-axis baseline at zero (0 to 60).</td>
            </tr>
            <tr>
              <td><strong>2. Scrambled Time Order</strong></td>
              <td>Wednesday appears before Tuesday (Mon, Wed, Tue, Thu), violating natural temporal chronology.</td>
              <td>Order categories chronologically: Mon, Tue, Wed, Thu.</td>
            </tr>
            <tr>
              <td><strong>3. Missing Units on Axis</strong></td>
              <td>Axis labeled vaguely as 'Average' without specifying what is measured or in what units.</td>
              <td>Label explicitly: 'Mean daily study time (minutes)'.</td>
            </tr>
            <tr>
              <td><strong>4. Visual Clutter / Chartjunk</strong></td>
              <td>Heavy dark gridlines and thick outer borders compete with data bars.</td>
              <td>Remove outer border; use subtle light-gray gridlines or none.</td>
            </tr>
            <tr>
              <td><strong>5. Angled Axis Labels</strong></td>
              <td>Slanted/rotated text slows reading speed and increases cognitive burden.</td>
              <td>Render all text labels horizontally.</td>
            </tr>
            <tr>
              <td><strong>Bonus: Misleading Title</strong></td>
              <td>Title claims 'STUDY TIME TRIPLED!' when study time rose from 40 to 50 min (+25%).</td>
              <td>Use objective, accurate title: 'Study Time for 40 Students Over 4 Days (+25%)'.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "module-dataprep",
    title: "7. Data Preparation: Scaling, Binning & Sampling",
    icon: "⚙️",
    summary: "Min-Max, Z-score, Robust scaling, Equal-width vs. Equal-frequency binning, SMOTE, and data leakage rules.",
    content: `
      <h3>7.1 Data Scaling Techniques</h3>
      <p>Data scaling puts features on the same numerical scale so features with large units do not dominate distance-based algorithms (KNN, K-Means, SVM, PCA, Neural Nets, Regularized Regression).</p>
      
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Scaling Method</th>
              <th>Formula</th>
              <th>Target Range</th>
              <th>Outlier Resistance</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Min-Max Scaling (Normalization)</strong></td>
              <td>$$x_{\\text{norm}} = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}} (\\text{high} - \\text{low}) + \\text{low}$$</td>
              <td>\\([0, 1]\\) or \\([-1, 1]\\)</td>
              <td><strong>Low (Sensitive)</strong></td>
              <td>Algorithm requires bounded inputs (neural nets, pixels); few or no outliers.</td>
            </tr>
            <tr>
              <td><strong>Max-Abs Scaling</strong></td>
              <td>$$x_{\\text{norm}} = \\frac{x}{\\max(|x|)}$$</td>
              <td>\\([-1, 1]\\)</td>
              <td>Low</td>
              <td>Sparse datasets where zero entries must be preserved.</td>
            </tr>
            <tr>
              <td><strong>Z-Score Standardization</strong></td>
              <td>$$z = \\frac{x - \\mu}{\\sigma}$$</td>
              <td>Unbounded (\\(\\mu=0, \\sigma=1\\))</td>
              <td>Moderate</td>
              <td>Features approximately normal; algorithm assumes standardized variance (PCA, Ridge/Lasso).</td>
            </tr>
            <tr>
              <td><strong>Robust Scaling</strong></td>
              <td>$$x_{\\text{norm}} = \\frac{x - \\text{median}(x)}{\\text{IQR}(x)}$$</td>
              <td>Unbounded</td>
              <td><strong>High (Robust)</strong></td>
              <td>Dataset contains heavy outliers that would distort mean and variance.</td>
            </tr>
            <tr>
              <td><strong>Decimal Scaling</strong></td>
              <td>$$x_{\\text{norm}} = \\frac{x}{10^j}$$</td>
              <td>\\([-1, 1]\\)</td>
              <td>Low</td>
              <td>Simple division by power of 10 such that \\(\\max(|x_{\\text{norm}}|) &lt; 1\\).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>7.2 Binning (Discretization)</h3>
      <p>Converting continuous numerical features into discrete ordinal bins. Useful for reducing noise, non-linear modeling, and improving interpretability.</p>
      <ul>
        <li><strong>Equal-Width Binning:</strong> Divides range into \\(k\\) intervals of identical width: \\(w = (x_{\\max} - x_{\\min}) / k\\). Uses <code>pd.cut()</code>.
          <br><em>Caveat:</em> If data is skewed, some bins may have thousands of values while others have <strong>0 values</strong>!
        </li>
        <li><strong>Equal-Frequency Binning (Quantile Binning):</strong> Divides sorted data into \\(k\\) bins such that each bin contains exactly \\(n / k\\) observations. Uses <code>pd.qcut()</code>.
          <br><em>Guaranteed:</em> <strong>No bin can be empty!</strong> All bins contain identical counts.
        </li>
      </ul>

      <h3>7.3 Sampling Methods</h3>
      <ul>
        <li><strong>Top Sampling:</strong> Selects top \\(k\\)% (e.g. top customers by spend). <strong>DO NOT USE!</strong> Introduces extreme bias; not statistical sampling.</li>
        <li><strong>Random Sampling:</strong> Each instance has equal selection probability (<code>df.sample(frac=0.2)</code>). Good general default, but poor for imbalanced classes.</li>
        <li><strong>Stratified Sampling:</strong> Divides data into strata (classes/groups) and samples proportionally from each stratum (<code>train_test_split(..., stratify=y)</code>). Preserves class ratios!</li>
        <li><strong>Handling Class Imbalance:</strong>
          <ul>
            <li><strong>Undersampling:</strong> Randomly discard instances from the majority class (<code>RandomUnderSampler</code>).</li>
            <li><strong>Oversampling & SMOTE:</strong> Duplicate minority points or synthesize new minority points using <strong>SMOTE</strong> (Synthetic Minority Oversampling Technique) by interpolating between nearest neighbors.</li>
          </ul>
        </li>
      </ul>

      <div class="callout warning">
        <strong>⭐ THE GOLDEN PREPROCESSING DATA LEAKAGE RULE:</strong>
        <p><strong>Learn preprocessing parameters from TRAINING DATA ONLY!</strong></p>
        <ol>
          <li>Split dataset first into Training, Validation, and Test sets.</li>
          <li>Fit scaler (<code>fit_transform()</code>) on <strong>Training set only</strong>.</li>
          <li>Transform Validation and Test sets using the <em>Training scaler</em> (<code>transform()</code>). Never re-fit!</li>
          <li>Determine bin boundaries using <em>Training set only</em> (<code>pd.cut(..., retbins=True)</code>), then apply exact same edges to Val and Test.</li>
          <li>Apply SMOTE or Undersampling to the <strong>Training set only</strong>! Never oversample or alter validation or test datasets!</li>
        </ol>
      </div>
    `
  },
  {
    id: "module-numpy-pandas",
    title: "8. NumPy, Pandas & Matplotlib Mechanics",
    icon: "🐍",
    summary: "Broadcasting algorithms, indexing rules, loc vs iloc, and Matplotlib Figure vs Axes architecture.",
    content: `
      <h3>8.1 NumPy Broadcasting Rules</h3>
      <p>Broadcasting allows element-wise operations between arrays of different shapes without copying data.</p>
      <div class="callout tip">
        <strong>Broadcasting 3-Step Mental Algorithm:</strong>
        <ol>
          <li><strong>Right-to-Left Alignment:</strong> Align shape tuples from right to left (trailing dimensions first). If one shape has fewer dimensions, prepend 1s on the left.</li>
          <li><strong>Dimension Compatibility Check:</strong> Two dimensions are compatible if and only if:
            <ul>
              <li>They are <strong>equal</strong>, OR</li>
              <li>One of them is <strong>1</strong>.</li>
            </ul>
          </li>
          <li><strong>Resulting Dimension:</strong> The output dimension is \\(\\max(d_1, d_2)\\). If any dimension mismatch occurs where neither is 1, broadcasting <strong>FAILS</strong> with a ValueError!</li>
        </ol>
      </div>

      <h4>Broadcasting Walkthroughs (From Mockup Question 4):</h4>
      <ul>
        <li><code>(3, 1) + (4,)</code> \\(\\to\\) Align: <code>(3, 1)</code> and <code>(1, 4)</code>. Dims: (3, 1) \\(\\to\\) 3; (1, 4) \\(\\to\\) 4. <strong>Result: (3, 4)</strong>.</li>
        <li><code>(2, 3, 4) + (4,)</code> \\(\\to\\) Align: <code>(2, 3, 4)</code> and <code>(1, 1, 4)</code>. <strong>Result: (2, 3, 4)</strong>.</li>
        <li><code>(5, 2) + (3,)</code> \\(\\to\\) Align trailing: 2 and 3. Unequal and neither is 1! <strong>FAILS</strong>.</li>
        <li><code>(3, 1, 5) + (1, 4, 1)</code> \\(\\to\\) Align: 3&1\\(\\to\\)3, 1&4\\(\\to\\)4, 5&1\\(\\to\\)5. <strong>Result: (3, 4, 5)</strong>.</li>
        <li><code>(6, 1) + (5, 7)</code> \\(\\to\\) Trailing: 1&7\\(\\to\\)7. Leading: 6 and 5 unequal, neither is 1! <strong>FAILS</strong>.</li>
      </ul>

      <h3>8.2 NumPy Slicing Essentials</h3>
      <ul>
        <li>Last two columns of 2D array A: <code>A[:, -2:]</code></li>
        <li>Last two rows of 2D array A: <code>A[-2:, :]</code></li>
        <li>Every second element: <code>A[::2]</code></li>
        <li>Reversing an array: <code>A[::-1]</code></li>
        <li>Row vector shape: <code>(1, n)</code>; Column vector shape: <code>(n, 1)</code>.</li>
      </ul>

      <h3>8.3 Pandas Indexing: <code>.loc</code> vs. <code>.iloc</code> vs. <code>df[...]</code></h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Operation</th>
              <th>Syntax</th>
              <th>Behavior & Boundaries</th>
              <th>Returns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Column Access</strong></td>
              <td><code>df['col']</code></td>
              <td>Single column by name</td>
              <td><code>pd.Series</code></td>
            </tr>
            <tr>
              <td><strong>Multi-Column Subset</strong></td>
              <td><code>df[['col1', 'col2']]</code></td>
              <td>List of column names</td>
              <td><code>pd.DataFrame</code></td>
            </tr>
            <tr>
              <td><strong>Row Slice via df[...]</strong></td>
              <td><code>df[0:2]</code></td>
              <td>Slices <strong>ROWS</strong>, never columns! String slice bounds fail on integer indexes.</td>
              <td><code>pd.DataFrame</code></td>
            </tr>
            <tr>
              <td><strong>Label Indexer: .loc</strong></td>
              <td><code>df.loc[row_labels, col_labels]</code></td>
              <td>Label-based. Slices are <strong>INCLUSIVE of both start AND stop</strong>! E.g. <code>df.loc[2:4, 'a':'b']</code> includes row 4 and col 'b'.</td>
              <td>DataFrame / Series / Scalar</td>
            </tr>
            <tr>
              <td><strong>Positional Indexer: .iloc</strong></td>
              <td><code>df.iloc[row_pos, col_pos]</code></td>
              <td>0-based integer position. Slices are <strong>HALF-OPEN: [start, stop)</strong> (stop is EXCLUDED).</td>
              <td>DataFrame / Series / Scalar</td>
            </tr>
            <tr>
              <td><strong>Boolean Mask</strong></td>
              <td><code>df['midterm'] &gt; 85</code></td>
              <td>Vectorized boolean test on series</td>
              <td>Boolean <code>pd.Series</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>8.4 Matplotlib Architecture: Pyplot vs. Object-Oriented Interface</h3>
      <ul>
        <li><strong>Figure:</strong> The overall window, container, or physical canvas. Can hold one or multiple subplots.</li>
        <li><strong>Axes:</strong> An individual plotting area (coordinate system with x-axis, y-axis, titles, ticks, and plotted data lines/bars).</li>
        <li><strong>Pyplot Interface (<code>plt.*</code>):</strong> State-machine style. Implicitly operates on whichever Figure/Axes was last touched. Convenient for quick 1-line plots, but <strong>prone to bugs</strong> when dealing with multiple subplots!</li>
        <li><strong>Object-Oriented Interface (<code>fig, ax = plt.subplots(nrows, ncols)</code>):</strong> Explicitly creates Axes objects. <code>ax</code> is a NumPy array of Axes. Methods are called directly on target Axes (<code>ax[0, 0].set_title('Sales')</code>, <code>ax[0, 0].set_xlabel('Time')</code>). Eliminates state confusion!</li>
      </ul>
    `
  }
];
