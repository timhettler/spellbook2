export function toKebabCase(string: string): string {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z\s-]/g, "")
    .replace(/\s/g, "-");
}

export function convertToString(
  strOrArray?: string | string[] | null
): string | null {
  if (Array.isArray(strOrArray)) {
    return strOrArray.join(",");
  }
  return strOrArray || null;
}
