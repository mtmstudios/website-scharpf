import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { KARRIERE_STELLENGRUPPEN } from "./karriere-stellen";

describe("Verfügbarkeit der Stellen", () => {
  const stellen = KARRIERE_STELLENGRUPPEN.flatMap(gruppe => [...gruppe.stellen]);
  test("Dachdecker-Ausbildung bleibt nicht verfügbar", () => {
    assert.equal(stellen.find(stelle => stelle.to === "/karriere/dachdecker-ausbildung")?.verfuegbar, false);
  });
  test("Bauhelfer bleibt nicht verfügbar", () => {
    assert.equal(stellen.find(stelle => stelle.to === "/karriere/bauhelfer")?.verfuegbar, false);
  });
});