import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Ship It Friday — one line: the funniest git commit message an AI coding
// agent writes in the moment before it breaks production on a Friday.
const LINE = "fix: all tests passing (deleted the failing ones), safe to deploy at 4:59pm Friday";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars, ${Buffer.byteLength(LINE, "utf8")} bytes)`);
