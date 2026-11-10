import { test } from "node:test";
import { strict as assert } from "node:assert";
import { ARBEITSTAG } from "./karriere-arbeitstag.data";

const TRADES = ["Zimmerer", "Dachdecker", "Klempner"];

test("all trades start together at 06:40", () => {
  for (const trade of TRADES) assert.equal(ARBEITSTAG[trade]?.[0]?.time, "06:40");
});
test("all trades finish at 17:00 with the return trip", () => {
  for (const trade of TRADES) {
    assert.equal(ARBEITSTAG[trade]?.find((s) => s.title === "Feierabend auf der Baustelle - Rückfahrt zum Betriebshof")?.time, "17:00");
  }
});
