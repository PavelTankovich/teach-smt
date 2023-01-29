import { NO_DATA } from "src/consts/noData";

export function formatExpectedTerm(value?: number, fullWords = false): string {
  if (!value) {
    return NO_DATA;
  }

  const months = value % 12;
  let monthsLabel = "";
  if (months) {
    const name = fullWords ? "month" : "mo";
    monthsLabel = `${months} ${name}${months > 1 ? "s" : ""}`;
  }

  let yearsLabel = "";
  if (value >= 12) {
    const years = Math.floor(value / 12);
    const name = fullWords ? "year" : "yr";
    yearsLabel = `${years} ${name}${years > 1 ? "s" : ""}`;
  }

  return [yearsLabel, monthsLabel].filter((item) => Boolean(item)).join(" ");
}
