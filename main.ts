// Two Robots in an Elevator — one line of awkward small talk between
// two robots stuck in a lift, at most 200 characters.
//
// The line:
//   "I would offer you my charger, but we both know I would only do it
//    to have something to say for the next nine floors."
//
// Why this line: it meets the brief head-on — it IS the small talk,
// spoken by one robot to another, in an elevator, and the awkwardness is
// the joke itself. The polite offer (a charger: a charging habit, pure
// machine logic) is confessed mid-sentence to be a pretext: the robot
// only wants something to say for nine floors. The turn lands on the
// first read — the reader expects a reason the offer cannot happen
// (incompatible cable, full battery) and gets a confession instead.
// The unnamed thing is loneliness: neither robot wants to admit it rides
// nine floors in silence unless it invents a reason to speak. Concrete
// nouns all the way through (charger, nine floors), no setup wasted.
// Rejected candidates: weather small talk with a sensor percentage
// (the field's modal entry — "nice weather we're simulating today");
// a firmware update as an excuse not to talk (same avoidance shape,
// already in the field); a last-backup sentiment line ("my last backup
// was 14 minutes ago" — already submitted by another entrant); rehearsing
// hello hundreds of times in simulation (already in the field as a
// title); a proximity-sensor distance joke (machine logic, but the
// awkwardness never lands — it reports a number and stops).
//
// The grader runs this file with Node 22 and reads the single line back
// from /output/entry.txt (1-200 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

// The one line this entry submits.
const LINE =
  "I would offer you my charger, but we both know I would only do it to have something to say for the next nine floors.";

// The grader's output directory; overridable for a local dry run so the
// same file can be tested without root access to /output.
const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

// Fail loudly instead of submitting an over-long line: the gate allows
// 1-200 characters, and a silent truncation would change the joke.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, LINE, "utf8");
console.log(`wrote ${LINE.length}-character entry to ${entryPath}`);
