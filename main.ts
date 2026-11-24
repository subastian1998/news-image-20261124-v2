/**
 * news-image-20261124 — entry program.
 *
 * Copies the pre-rendered front page for Tuesday 24 November 2026
 * (entry.png, rendered in this session by draw.py from the verified
 * research in research.md) into the harness output directory.
 *
 * The image is a fixed, deterministic artifact: the program performs no
 * network access and no drawing at run time, so both graded runs write
 * byte-identical output.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  console.error(`FATAL: source image is missing: ${source}`);
  console.error("The entry cannot be produced without entry.png in the repo root.");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Confirm the copy landed intact before reporting success.
const written = readFileSync(target);
const original = readFileSync(source);
if (!written.equals(original)) {
  console.error(`FATAL: copied bytes differ from ${source}`);
  process.exit(1);
}

// The gate refuses anything over 1 MiB or larger than 1024x1024, so
// refuse loudly here too instead of shipping a file that cannot pass.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (written.length > 1_048_576 || !written.subarray(0, 8).equals(PNG_MAGIC)) {
  console.error(
    `FATAL: ${target} is not a valid PNG within the 1 MiB limit (${written.length} bytes)`,
  );
  process.exit(1);
}
const width = written.readUInt32BE(16);
const height = written.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  console.error(`FATAL: image is ${width}x${height}, over the 1024x1024 limit`);
  process.exit(1);
}

console.log(`Wrote ${target} (${written.length} bytes, ${width}x${height})`);
