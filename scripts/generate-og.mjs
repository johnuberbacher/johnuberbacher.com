// Renders public/opengraph-image.png (1200x630) with headless Chrome.
//
// Why not next/og: @vercel/og bundled with Next 15.0.2 throws "Invalid URL"
// from fileURLToPath on Windows, so the opengraph-image.tsx file convention
// can't build here. Chrome also renders GeistVF as a real variable font,
// which satori would have flattened to a single weight.
//
// Run with `npm run og` after changing the card's copy or the portrait.

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ROOT = process.cwd();
const OUT = join(ROOT, "public", "opengraph-image.png");
const WIDTH = 1200;
const HEIGHT = 630;

// Same tokens as app/globals.css, so the card and the page stay one design.
const PAPER = "#ffffff";
const BAND = "#ededed";
const INK = "#17191c";
const MUTED = "#5f646b";

const CANDIDATES = [
  process.env.CHROME,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const chrome = CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error("No Chrome or Edge found. Set CHROME=/path/to/chrome and retry.");
  process.exit(1);
}

const b64 = (p) => readFileSync(join(ROOT, p)).toString("base64");

const html = `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: Geist;
    src: url(data:font/woff;base64,${b64("app/fonts/GeistVF.woff")}) format("woff");
    font-weight: 100 900;
    font-style: normal;
  }
  html, body { margin: 0; padding: 0; width: ${WIDTH}px; height: ${HEIGHT}px; }
  body {
    display: flex;
    background: ${PAPER};
    color: ${INK};
    font-family: Geist, ui-sans-serif, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .band {
    width: 420px;
    flex: none;
    background: ${BAND};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .shot {
    width: 292px;
    height: 292px;
    border-radius: 9999px;
    object-fit: cover;
    object-position: center 18%;
    display: block;
    /* Reads hard here because it sits entirely on the band. */
    box-shadow: 0 0 0 12px ${PAPER};
  }
  .copy {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 0 64px;
  }
  .kicker { font-size: 27px; font-weight: 400; color: ${MUTED}; letter-spacing: -0.012em; }
  .name {
    font-size: 70px; font-weight: 600; color: ${INK};
    letter-spacing: -0.032em; line-height: 1.02; white-space: nowrap;
  }
  .lede { font-size: 25px; font-weight: 400; color: ${MUTED}; line-height: 1.5; }
  .nb { white-space: nowrap; }
</style>
<div class="band">
  <img class="shot" src="data:image/jpeg;base64,${b64("public/me.jpg")}" alt="">
</div>
<div class="copy">
  <div class="kicker">Hey, I&rsquo;m</div>
  <div class="name">John Uberbacher.</div>
  <!-- Held together so the line breaks after "software" rather than stranding "from". -->
  <div class="lede">Solving real user problems and delivering software <span class="nb">from first idea to launch.</span></div>
</div>
`;

const tmp = mkdtempSync(join(tmpdir(), "og-"));
const page = join(tmp, "card.html");
writeFileSync(page, html, "utf8");

try {
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      `--window-size=${WIDTH},${HEIGHT}`,
      `--screenshot=${OUT}`,
      `file:///${page.replace(/\\/g, "/")}`,
    ],
    { stdio: "pipe" },
  );
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

console.log(`Wrote ${OUT} (${WIDTH}x${HEIGHT}) using ${chrome}`);
