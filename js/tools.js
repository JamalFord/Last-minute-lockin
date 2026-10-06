// Interactive Educational Tools for CSC/DSCI 3780 Midterm
// Broadcasting Simulator, Pandas Slicing Visualizer, Boxplot Calculator, Pearson r Explorer, Bad Chart Inspector

const Tools = {
  // 1. NumPy Broadcasting Simulator
  simulateBroadcasting: function(shapeAStr, shapeBStr) {
    try {
      const parseShape = (str) => {
        const cleaned = str.replace(/[()[\]\s]/g, "");
        if (!cleaned) return [];
        return cleaned.split(",").filter(x => x.length > 0).map(x => {
          const n = parseInt(x, 10);
          if (isNaN(n) || n <= 0) throw new Error("Invalid dimension: " + x);
          return n;
        });
      };

      const shapeA = parseShape(shapeAStr);
      const shapeB = parseShape(shapeBStr);

      if (shapeA.length === 0 || shapeB.length === 0) {
        return { error: "Please enter valid non-empty shapes, e.g. (3, 1) and (4,)" };
      }

      const maxLen = Math.max(shapeA.length, shapeB.length);
      const padA = Array(maxLen - shapeA.length).fill(1).concat(shapeA);
      const padB = Array(maxLen - shapeB.length).fill(1).concat(shapeB);

      const steps = [];
      const resultShape = [];
      let isCompatible = true;
      let failureReason = "";

      for (let i = maxLen - 1; i >= 0; i--) {
        const dimIndex = maxLen - 1 - i; // from right (trailing = 0)
        const aVal = padA[i];
        const bVal = padB[i];
        let resVal;
        let status = "ok";
        let note = "";

        if (aVal === bVal) {
          resVal = aVal;
          note = `Dimensions match (${aVal} == ${bVal})`;
        } else if (aVal === 1) {
          resVal = bVal;
          note = `Array A dimension 1 expands to ${bVal}`;
        } else if (bVal === 1) {
          resVal = aVal;
          note = `Array B dimension 1 expands to ${aVal}`;
        } else {
          isCompatible = false;
          status = "error";
          resVal = "X";
          note = `Incompatible: ${aVal} ≠ ${bVal} and neither is 1!`;
          if (!failureReason) {
            failureReason = `Dimension mismatch at position ${i + 1} from left (trailing position ${dimIndex + 1} from right): ${aVal} and ${bVal} are unequal and neither is 1.`;
          }
        }

        resultShape.unshift(resVal);
        steps.unshift({
          posFromRight: dimIndex + 1,
          dimA: aVal,
          dimB: bVal,
          result: resVal,
          status: status,
          note: note
        });
      }

      return {
        isCompatible: isCompatible,
        shapeA: shapeA,
        shapeB: shapeB,
        paddedA: padA,
        paddedB: padB,
        resultShape: isCompatible ? `(${resultShape.join(", ")})` : "None (Broadcasting Error)",
        steps: steps,
        failureReason: failureReason
      };
    } catch (e) {
      return { error: e.message };
    }
  },

  // 2. Pandas Slicing Simulation Data & Execution
  pandasDataset: [
    { index: 0, student: "Alex", midterm: 82, final: 85 },
    { index: 1, student: "Bina", midterm: 91, final: 94 },
    { index: 2, student: "Carlos", midterm: 76, final: 80 },
    { index: 3, student: "Deepa", midterm: 88, final: 90 },
    { index: 4, student: "Evan", midterm: 95, final: 93 }
  ],

  // 3. Box Plot Statistics Calculator
  calculateBoxPlot: function(numbers) {
    if (!numbers || numbers.length === 0) return null;
    const sorted = [...numbers].sort((a, b) => a - b);
    const n = sorted.length;

    const getPercentile = (p) => {
      if (n === 1) return sorted[0];
      const index = (n - 1) * p;
      const lower = Math.floor(index);
      const upper = Math.ceil(index);
      const weight = index - lower;
      return sorted[lower] * (1 - weight) + sorted[upper] * weight;
    };

    const min = sorted[0];
    const max = sorted[n - 1];
    const q1 = getPercentile(0.25);
    const median = getPercentile(0.50);
    const q3 = getPercentile(0.75);
    const iqr = q3 - q1;

    const lowerFence = q1 - 1.5 * iqr;
    const upperFence = q3 + 1.5 * iqr;

    // Tukey whisker rule: extreme points WITHIN fences
    const pointsWithin = sorted.filter(x => x >= lowerFence && x <= upperFence);
    const lowerWhisker = pointsWithin.length > 0 ? Math.min(...pointsWithin) : q1;
    const upperWhisker = pointsWithin.length > 0 ? Math.max(...pointsWithin) : q3;

    const outliers = sorted.filter(x => x < lowerFence || x > upperFence);

    // Mean and Std Dev
    const sum = sorted.reduce((acc, x) => acc + x, 0);
    const mean = sum / n;
    const varSample = n > 1 ? sorted.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / (n - 1) : 0;
    const stdSample = Math.sqrt(varSample);

    return {
      sorted,
      n,
      min,
      max,
      q1: Number(q1.toFixed(2)),
      median: Number(median.toFixed(2)),
      q3: Number(q3.toFixed(2)),
      iqr: Number(iqr.toFixed(2)),
      lowerFence: Number(lowerFence.toFixed(2)),
      upperFence: Number(upperFence.toFixed(2)),
      lowerWhisker: Number(lowerWhisker.toFixed(2)),
      upperWhisker: Number(upperWhisker.toFixed(2)),
      outliers,
      mean: Number(mean.toFixed(2)),
      sampleStd: Number(stdSample.toFixed(2))
    };
  }
};
