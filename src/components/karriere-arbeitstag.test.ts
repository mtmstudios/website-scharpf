import { test } from "node:test";
import { strict as assert } from "node:assert";
import { ARBEITSTAG } from "./karriere-arbeitstag.data";

test("all trades start together at 06:45", () => {
  for (const trade of ["Zimmerer", "Dachdecker", "Klempner"]) {
    assert.equal(ARBEITSTAG[trade]?.[0]?.time, "06:45");
  }
});
test("Zimmerer finish at 17:00", () => {
  assert.equal(ARBEITSTAG.Zimmerer.find((s) => s.title === "Feierabend")?.time, "17:00");
});
test("Dachdecker finish at 17:15", () => {
  assert.equal(ARBEITSTAG.Dachdecker.find((s) => s.title === "Feierabend auf Baustelle")?.time, "17:15");
});
test("Klempner finish at 17:00", () => {
  assert.equal(ARBEITSTAG.Klempner.find((s) => s.title === "Feierabend auf Baustelle")?.time, "17:00");
});