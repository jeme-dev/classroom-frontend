import { Value } from "@radix-ui/react-select";

export const DEPARTMENTS = ["CS", "Math", "English"];
export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

