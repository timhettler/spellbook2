export function toKebabCase(string: string): string {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z\s-]/g, "")
    .replace(/\s/g, "-");
}
