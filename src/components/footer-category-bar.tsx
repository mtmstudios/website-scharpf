import { useCategory } from "@/lib/category-context";
import { CategoryBar } from "@/components/sections";

/**
 * Wiederholt direkt über dem Footer die farbige Kategorie-Leiste der aktuellen
 * Seite (gleiche Farbe wie unterhalb der Navbar, gleicher Breadcrumb) und
 * bietet rechts einen "Nach oben"-Link zum Zurückspringen an den Seitenanfang.
 */
export function FooterCategoryBar() {
  const { value } = useCategory();
  if (!value) return null;
  return (
    <div className="relative w-full" style={{ backgroundColor: value.color }}>
      <CategoryBar
        breadcrumbs={value.breadcrumbs}
        title={value.title}
        color={value.color}
      />
      <button
        type="button"
        onClick={() =>
          typeof window !== "undefined" &&
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="absolute inset-y-0 right-0 flex items-center gap-2 px-5 text-sm font-semibold text-white transition-opacity hover:opacity-80 lg:px-8"
        aria-label="Nach oben"
      >
        <span className="hidden sm:inline">Nach oben</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
}
