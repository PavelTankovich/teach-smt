export function enumToArray(
  enumElement: Record<string, string | number>
): (string | number)[] {
  return Object.values(enumElement);
}
