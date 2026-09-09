import { services, isCategoryVisible, visibleCategories } from "./services";

const visibleServiceCount = services.filter((s) => isCategoryVisible(s.category)).length;

export const stats = [
  { value: 1000, suffix: "+", label: "Souls healed" },
  { value: visibleServiceCount, suffix: "", label: "Services" },
  { value: visibleCategories.length, suffix: "", label: "Categories" },
  { value: 100, suffix: "%", label: "Confidential" },
] as const;

export const trustLine =
  `1000+ souls healed · ${visibleServiceCount} services · 100% confidential`;
