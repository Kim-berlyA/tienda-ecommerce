// categoryContext.tsx
import { createContext, useContext, useState } from "react";

const CategoryContext = createContext<{
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
} | null>(null);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("groceries");
  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const ctx = useContext(CategoryContext);
  if (!ctx) throw new Error("useCategory must be used within CategoryProvider");
  return ctx;
}
