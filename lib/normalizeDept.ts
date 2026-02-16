export function normalizeDepartment(dept: string) {
  return dept.toLowerCase().replace(/\s+/g, "");
}
