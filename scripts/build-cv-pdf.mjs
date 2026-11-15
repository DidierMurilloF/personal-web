// Prints the /cv page to public/didier-murillo-cv.pdf with headless Chrome.
// Start the site first (npm run dev or npm start), then:
//   node scripts/build-cv-pdf.mjs [url]      (default http://localhost:3000/cv)
// Set CHROME to the Chrome/Chromium binary if it isn't in the default place.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const url = process.argv[2] ?? "http://localhost:3000/cv";
const out = path.join(process.cwd(), "public", "didier-murillo-cv.pdf");
const chrome =
  process.env.CHROME ??
  [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].find((p) => fs.existsSync(p));

if (!chrome) {
  console.error("build-cv-pdf: Chrome not found; set CHROME=/path/to/chrome");
  process.exit(1);
}

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--run-all-compositor-stages-before-draw",
  "--virtual-time-budget=5000",
  `--print-to-pdf=${out}`,
  url,
], { stdio: "inherit" });
console.log(`build-cv-pdf: wrote ${path.relative(process.cwd(), out)}`);
