// Copies each post's images and files from content/blog/<slug>/ to
// public/blog/<slug>/ so they are served at /blog/<slug>/<file>.
// Runs automatically before `npm run dev` and `npm run build`.
import fs from "node:fs";
import path from "node:path";

const SRC = path.join(process.cwd(), "content", "blog");
const OUT = path.join(process.cwd(), "public", "blog");
const ASSET = /\.(png|jpe?g|gif|svg|webp|avif|mp4|webm|pdf|csv|zip)$/i;

fs.rmSync(OUT, { recursive: true, force: true });

function copy(dir, rel = "") {
  for (const entry of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
    const relPath = path.join(rel, entry.name);
    if (entry.isDirectory()) copy(dir, relPath);
    else if (ASSET.test(entry.name)) {
      const target = path.join(OUT, path.basename(dir), relPath);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(path.join(dir, relPath), target);
    }
  }
}

let count = 0;
if (fs.existsSync(SRC)) {
  for (const d of fs.readdirSync(SRC, { withFileTypes: true })) {
    if (d.isDirectory() && !d.name.startsWith("_")) {
      copy(path.join(SRC, d.name));
      count++;
    }
  }
}
console.log(`copy-post-assets: copied assets for ${count} post(s)`);
