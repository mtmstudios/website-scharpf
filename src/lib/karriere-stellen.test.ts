import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { KARRIERE_STELLENGRUPPEN } from "./karriere-stellen";

describe("Verfügbarkeit der Stellen", () => {
  const stellen = KARRIERE_STELLENGRUPPEN.flatMap(gruppe => [...gruppe.stellen]);
  test("Dachdecker-Ausbildung bleibt nicht verfügbar", () => {
    assert.equal(stellen.find(stelle => stelle.to === "/karriere/dachdecker-ausbildung")?.verfuegbar, false);
  });
  test("Der unterste Einstieg führt zur Klempner-Ausbildung statt zum Bauhelfer", () => {
    const einstieg = KARRIERE_STELLENGRUPPEN.find(gruppe => gruppe.titel === "Ausbildung & Einstieg");
    assert.equal(einstieg?.stellen.at(-1)?.to, "/karriere/klempner-ausbildung");
    const paths: readonly string[] = stellen.map(stelle => stelle.to);
    assert.equal(paths.includes("/karriere/bauhelfer"), false);
  });
  test("Klempner-Ausbildung ist verfügbar", () => {
    assert.equal(stellen.find(stelle => stelle.to === "/karriere/klempner-ausbildung")?.verfuegbar, true);
  });
  test("Klempner erhält dieselben drei Stellenstufen wie die anderen Gewerke", () => {
    const klempner = KARRIERE_STELLENGRUPPEN.find(gruppe => gruppe.titel === "Klempner");
    assert.deepEqual(klempner?.stellen.map(stelle => stelle.to), [
      "/karriere/klempnermeister",
      "/karriere/klempner-vorarbeiter",
      "/karriere/klempner",
    ]);
    assert.equal(klempner?.stellen.length, 3);
  });
});