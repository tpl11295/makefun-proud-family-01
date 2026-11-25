import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Feel Proud: A Family Scene — one short family scene,
// warm, funny and heartfelt, one or two lines, max 280 characters.
// Verified: 191 characters, gate local PASS.
const line =
  "Dad still calls every Sunday at 6 to ask if I ate. Last week I called him first, and he answered on the first ring — turns out he's been waiting by the phone since 5:30, pretending he wasn't.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
