import { NO_DATA } from "src/consts/noData";

export function getRemainingTerm(
  end: Date | string,
  start: Date | string = new Date()
): string {
  const endDate = typeof end === "string" ? new Date(end) : end;
  const startDate = typeof start === "string" ? new Date(start) : start;

  if (startDate.getTime() > endDate.getTime()) {
    return NO_DATA;
  }

  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();

  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();
  const endDay = endDate.getDate();

  // Less then one day remaining
  if (startYear === endYear && startMonth === endMonth && startDay === endDay) {
    return "Today";
  }

  // Less then one month remaining
  if (
    startYear === endYear &&
    (endMonth - startMonth === 0 ||
      (endMonth - startMonth === 1 && endDay < startDay))
  ) {
    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return `${diffInDays} ${diffInDays > 1 ? "days" : "day"}`;
  }

  let diffInYears = endYear - startYear;
  let diffInMonths =
    (diffInYears * 12 + endDate.getMonth() - startDate.getMonth()) % 12;

  // Round months up
  if (endDay > startDay) {
    diffInMonths += 1;
  }

  // If month number in end year is less then month number in start year -- we should subtract one year
  const isFullYears = endMonth >= startMonth;
  if (!isFullYears) {
    diffInYears -= 1;
  }

  // If rounded months number is equal to one year -- we should add one year
  const isExtraYear = diffInMonths === 12;
  if (isExtraYear) {
    diffInMonths = 0;
    diffInYears += 1;
  }

  let remainingTerm = diffInYears
    ? `${diffInYears} ${diffInYears > 1 ? "years" : "year"}`
    : "";

  if (diffInMonths > 0) {
    remainingTerm = `${remainingTerm}${diffInYears ? " " : ""}${diffInMonths} ${
      diffInMonths > 1 ? "months" : "month"
    }`;
  }

  return remainingTerm;
}
