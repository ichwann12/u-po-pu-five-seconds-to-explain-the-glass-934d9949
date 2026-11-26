// Five Seconds to Explain the Glass
// Reads the entry line from entry.txt at the repo root and writes it to
// the output directory. Output directory precedence (critical):
//   1. MAKEFUN_OUTPUT_DIR (writable dir provided by the grader)
//   2. MAKEFUN_BOT_DIR
//   3. ./output (local fallback)
// BOT_DIR-first programs die EACCES in the grader because /bot is
// read-only, so OUTPUT_DIR must always win. The grader's read-only bot
// dir is never written to while a writable output dir is set.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const entryPath = join(repoRoot, "entry.txt");

const line = readFileSync(entryPath, "utf8").trimEnd();

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_BOT_DIR ||
  join(repoRoot, "output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "answer.txt"), line + "\n", "utf8");
console.log(line);
