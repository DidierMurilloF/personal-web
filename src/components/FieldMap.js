import trial from "@/src/content/field-trial.json";

// Field-plot graphics drawn from the real PhenoGAMs trial data
// (src/content/field-trial.json, built by scripts/field-map.R).

const VIRIDIS = [
  [68, 1, 84],
  [59, 82, 139],
  [33, 145, 140],
  [94, 201, 98],
  [253, 231, 37],
];

function viridis(t) {
  const x = Math.max(0, Math.min(1, t)) * (VIRIDIS.length - 1);
  const i = Math.min(VIRIDIS.length - 2, Math.floor(x));
  const f = x - i;
  const c = VIRIDIS[i].map((v, k) => Math.round(v + (VIRIDIS[i + 1][k] - v) * f));
  return `rgb(${c.join(",")})`;
}

// Diverging blue–orange for residuals (in standard deviations).
function diverging(z) {
  if (z > 1) return "#E07B39";
  if (z > 0.35) return "#F3C6A5";
  if (z > -0.35) return "#D9E2E0";
  if (z > -1) return "#A9C9E8";
  return "#3B78B5";
}

const PALETTES = {
  trend: (i) => viridis(trial.trend[i]),
  residual: (i) => diverging(trial.residual[i]),
  design: (i) => (trial.replicated[i] ? "#0E6E66" : "#C9DFDB"),
};

export default function FieldMap({ kind = "trend", gap = 0.12, radius = 0.18, label, className }) {
  const { rows, cols } = trial;
  const color = PALETTES[kind];
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      cells.push(
        <rect
          key={i}
          x={c + gap / 2}
          y={r + gap / 2}
          width={1 - gap}
          height={1 - gap}
          rx={radius}
          fill={color(i)}
        />
      );
    }
  }
  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      role="img"
      aria-label={label}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {cells}
    </svg>
  );
}

export const trialInfo = {
  plots: trial.plots,
  genotypes: trial.genotypes,
};

export const viridisGradient = `linear-gradient(90deg, ${VIRIDIS.map(
  (c) => `rgb(${c.join(",")})`
).join(", ")})`;
