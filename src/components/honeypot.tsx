/**
 * Spam-Falle: ein für Menschen unsichtbares Feld, das Bots mit ausfüllen.
 * `submitLead` liest den Wert aus und der n8n-Workflow weist gefüllte
 * Anfragen mit HTTP 400 ab (Feldname muss mit dem Workflow übereinstimmen).
 */
export const HONEYPOT_FELD = "firmenwebsite";

export function Honeypot() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
    >
      <label>
        Bitte leer lassen
        <input type="text" name={HONEYPOT_FELD} tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
