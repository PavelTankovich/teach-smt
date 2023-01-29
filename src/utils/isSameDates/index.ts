export function isSameDates(date: Date, differenceInDays: number) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + differenceInDays);

  return currentDate.toDateString() === date.toDateString();
}
