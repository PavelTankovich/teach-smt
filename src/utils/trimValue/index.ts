export function trimValue<V>(value: V): V | string {
  return typeof value === "string" ? value.trim() : value;
}
