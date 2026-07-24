import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Crumb } from "@/components/sections";

export type CategoryInfo = {
  breadcrumbs?: Crumb[];
  title?: string;
  color: string;
};

type Ctx = {
  value: CategoryInfo | null;
  set: (v: CategoryInfo | null) => void;
};

const CategoryCtx = createContext<Ctx>({ value: null, set: () => {} });

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [value, set] = useState<CategoryInfo | null>(null);
  return (
    <CategoryCtx.Provider value={{ value, set }}>
      {children}
    </CategoryCtx.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryCtx);
}

/**
 * Wird von CategoryBar aufgerufen, damit auch der Footer-Bereich weiß, welche
 * Farbe und welcher Breadcrumb-Pfad zur aktuellen Seite gehören.
 */
export function useRegisterCategory(cat: CategoryInfo) {
  const { set } = useCategory();
  const key = JSON.stringify(cat);
  useEffect(() => {
    set(cat);
    return () => set(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
