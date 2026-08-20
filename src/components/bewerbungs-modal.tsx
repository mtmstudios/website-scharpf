import { useMemo, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowRight, BriefcaseBusiness, Check, GraduationCap, Home, X } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { submitLead } from "@/lib/submit-lead";
import { cn } from "@/lib/utils";

const STELLEN = [
  { label: "Zimmerer (m/w/d)", icon: Home },
  { label: "Dachdecker (m/w/d)", icon: Home },
  { label: "Ausbildung Zimmerer", icon: GraduationCap },
  { label: "Ausbildung Dachdecker", icon: GraduationCap },
  { label: "Bauhelfer (m/w/d)", icon: BriefcaseBusiness },
] as const;

const applicationSchema = z.object({
  position: z.string().trim().min(1, "Bitte wähle eine Stelle aus.").max(80),
  name: z.string().trim().min(2, "Bitte gib deinen Namen ein.").max(100),
  phone: z
    .string()
    .trim()
    .min(5, "Bitte gib deine Telefonnummer ein.")
    .max(30)
    .regex(/^[0-9+\-\s()/]+$/, "Bitte gib eine gültige Telefonnummer ein."),
  email: z
    .string()
    .trim()
    .max(255)
    .refine((value) => value.length === 0 || z.string().email().safeParse(value).success, {
      message: "Bitte gib eine gültige E-Mail-Adresse ein.",
    }),
  location: z.string().trim().min(2, "Bitte gib deinen Wohnort oder deine PLZ ein.").max(120),
  experience: z.string().trim().max(120),
  message: z.string().trim().max(1000, "Bitte kürze deine Nachricht auf maximal 1000 Zeichen."),
});

const stepOneSchema = applicationSchema.pick({
  position: true,
  name: true,
  phone: true,
  email: true,
  location: true,
});

type ApplicationForm = z.infer<typeof applicationSchema>;
type ApplicationErrors = Partial<Record<keyof ApplicationForm | "privacy", string>>;

const initialForm: ApplicationForm = {
  position: "",
  name: "",
  phone: "",
  email: "",
  location: "",
  experience: "",
  message: "",
};

const inputClass =
  "h-9 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

function firstErrors(error: z.ZodError<ApplicationForm> | z.ZodError<Pick<ApplicationForm, "position" | "name" | "phone" | "email" | "location">>) {
  const flattened = error.flatten().fieldErrors;
  return Object.fromEntries(
    Object.entries(flattened).map(([key, value]) => [key, value?.[0] ?? "Bitte prüfe diese Angabe."]),
  ) as ApplicationErrors;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs font-medium text-primary">{message}</p>;
}

export function BewerbungsButton({
  children = "Jetzt bewerben",
  variant = "solid",
  className,
}: {
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<ApplicationForm>(initialForm);
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const progress = useMemo(() => (step === 1 ? 50 : 100), [step]);

  function updateField<Key extends keyof ApplicationForm>(key: Key, value: ApplicationForm[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function resetModal() {
    setStep(1);
    setForm(initialForm);
    setPrivacy(false);
    setErrors({});
    setSending(false);
    setSent(false);
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) return;
    resetModal();
  }

  function nextStep() {
    const parsed = stepOneSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(firstErrors(parsed.error));
      return;
    }
    setErrors({});
    setStep(2);
  }

  async function submitApplication(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = applicationSchema.safeParse(form);
    if (!privacy) {
      setErrors((current) => ({ ...current, privacy: "Bitte stimme der Datenschutzerklärung zu." }));
    }
    if (!parsed.success) {
      setErrors((current) => ({ ...current, ...firstErrors(parsed.error) }));
      if (Object.keys(firstErrors(parsed.error)).some((key) => ["position", "name", "phone", "email", "location"].includes(key))) {
        setStep(1);
      }
      return;
    }
    if (!privacy) return;

    setSending(true);
    try {
      await submitLead("bewerbung", {
        name: parsed.data.name,
        telefon: parsed.data.phone,
        email: parsed.data.email,
        leistung: "Karriere",
        stelle: parsed.data.position,
        wohnort: parsed.data.location,
        erfahrung: parsed.data.experience,
        nachricht: parsed.data.message,
      });
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Trigger asChild>
        <Button
          type="button"
          className={cn(
            "inline-flex rounded-full px-7 py-3.5 text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "h-auto min-h-12",
            variant === "solid"
              ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              : "border border-primary-foreground/80 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground",
            className,
          )}
        >
          {children}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg border border-border bg-background p-6 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-7">
          <DialogPrimitive.Close className="absolute left-5 top-5 rounded-full p-1 text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Bewerbungsformular schließen">
            <X aria-hidden="true" className="size-4" />
          </DialogPrimitive.Close>

          {sent ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check aria-hidden="true" className="size-7" />
              </div>
              <DialogPrimitive.Title className="mt-5 font-display text-2xl font-bold text-foreground">
                Bewerbung ist angekommen.
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-3 text-base leading-relaxed text-muted-foreground">
                Danke dir – wir melden uns schnellstmöglich persönlich bei dir.
              </DialogPrimitive.Description>
              <DialogPrimitive.Close asChild>
                <Button type="button" className="mt-7 rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90">
                  Schließen
                </Button>
              </DialogPrimitive.Close>
            </div>
          ) : (
            <form onSubmit={submitApplication} noValidate>
              <div className="pl-8">
                <div className="flex items-center justify-between gap-4">
                  <DialogPrimitive.Title className="font-display text-2xl font-bold text-foreground">
                    In 60 Sekunden bewerben
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="sr-only">
                    Kurzbewerbung für offene Stellen bei E. Scharpf in zwei Schritten.
                  </DialogPrimitive.Description>
                  <span className="shrink-0 text-sm text-muted-foreground">Schritt {step}/2</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border" aria-hidden="true">
                  <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {step === 1 ? (
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-base font-semibold text-foreground">Für welche Stelle interessierst du dich?</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {STELLEN.map((stelle) => {
                        const Icon = stelle.icon;
                        const selected = form.position === stelle.label;
                        return (
                          <button
                            key={stelle.label}
                            type="button"
                            onClick={() => updateField("position", stelle.label)}
                            className={cn(
                              "flex min-h-14 items-center gap-3 rounded-md border bg-background px-4 text-left text-sm font-semibold text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                              selected ? "border-primary shadow-sm" : "border-border hover:border-primary/70",
                            )}
                            aria-pressed={selected}
                          >
                            <Icon aria-hidden="true" className="size-6 shrink-0 text-primary" />
                            <span>{stelle.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    <FieldError message={errors.position} />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground" htmlFor="bewerbung-name">Name *</label>
                    <input
                      id="bewerbung-name"
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      className={cn(inputClass, errors.name && "border-primary")}
                      placeholder="Max Mustermann"
                      autoComplete="name"
                    />
                    <FieldError message={errors.name} />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground" htmlFor="bewerbung-phone">Telefon *</label>
                    <input
                      id="bewerbung-phone"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      className={cn(inputClass, errors.phone && "border-primary")}
                      placeholder="0711 / 123 456"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                    <FieldError message={errors.phone} />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground" htmlFor="bewerbung-email">E-Mail (optional)</label>
                    <input
                      id="bewerbung-email"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      className={cn(inputClass, errors.email && "border-primary")}
                      placeholder="max@beispiel.de"
                      autoComplete="email"
                      inputMode="email"
                    />
                    <FieldError message={errors.email} />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground" htmlFor="bewerbung-location">Wohnort / PLZ *</label>
                    <input
                      id="bewerbung-location"
                      value={form.location}
                      onChange={(event) => updateField("location", event.target.value)}
                      className={cn(inputClass, errors.location && "border-primary")}
                      placeholder="73730 Esslingen"
                      autoComplete="postal-code"
                    />
                    <FieldError message={errors.location} />
                  </div>

                  <Button type="button" onClick={nextStep} className="h-11 w-full rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                    Weiter
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Button>
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground" htmlFor="bewerbung-experience">Erfahrung / Ausbildung</label>
                    <input
                      id="bewerbung-experience"
                      value={form.experience}
                      onChange={(event) => updateField("experience", event.target.value)}
                      className={cn(inputClass, errors.experience && "border-primary")}
                      placeholder="z. B. Geselle, Azubi, Quereinsteiger"
                    />
                    <FieldError message={errors.experience} />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground" htmlFor="bewerbung-message">Was sollten wir noch wissen?</label>
                    <textarea
                      id="bewerbung-message"
                      value={form.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      className="min-h-28 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Kurz und formlos reicht vollkommen."
                    />
                    <FieldError message={errors.message} />
                  </div>

                  <label className="flex items-start gap-3 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={(event) => {
                        setPrivacy(event.target.checked);
                        setErrors((current) => ({ ...current, privacy: undefined }));
                      }}
                      className="mt-1 size-4 shrink-0 accent-primary"
                    />
                    <span>Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu. *</span>
                  </label>
                  <FieldError message={errors.privacy} />

                  <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-11 rounded-md">
                      Zurück
                    </Button>
                    <Button type="submit" disabled={sending} className="h-11 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                      {sending ? "Wird gesendet …" : "Bewerbung absenden"}
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Button>
                  </div>
                </div>
              )}
            </form>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}