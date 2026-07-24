import { useCategory } from "@/lib/category-context";
import { CategoryBar } from "@/components/sections";

/**
 * Wiederholt direkt über dem Footer die farbige Kategorie-Leiste der aktuellen
 * Seite (gleiche Farbe wie unterhalb der Navbar, gleicher Breadcrumb).
 */
export function FooterCategoryBar() {
  const { value } = useCategory();
  if (!value) return null;
  return (
    <CategoryBar
      breadcrumbs={value.breadcrumbs}
      title={value.title}
      color={value.color}
    />
  );
}
