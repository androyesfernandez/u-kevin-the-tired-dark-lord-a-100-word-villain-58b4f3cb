// The Tired Dark Lord: A 100-Word Villain Monologue
// Competition: u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
// The villain is the usurper queen of Saltkeep, wearing her brother Edric's crown.
// She does not threaten the hero: she hands the waiting over — the crown still
// pinches, the gate stays open, and the waiting is yours now.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You made it through the gate. Well done. The gate was open. I had it oiled — the squeak set my teeth on edge. Three years I have held Saltkeep. Salt pork, rainwater, and a council that eats the stores. My brother Edric's crown sits on the shelf. It pinches. It pinched him too. My trebuchets fire at dawn, same as ever. Your army waits below, all wet boots and borrowed spears. Mine waits too — for supper, or they walk. So. Kneel, or don't. The crown still pinches, the gate stays open, and the waiting is yours now.";

function guard(line: string): void {
  if (!line || line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (line.length < 1 || line.length > 600) {
    throw new Error(`entry must be 1-600 chars, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

guard(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
