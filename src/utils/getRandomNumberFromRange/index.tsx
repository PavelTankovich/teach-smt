export const getRandomNumberFromRange = (
  start: number,
  end: number
): (() => number) => {
  const usedNumbers = new Set();

  return () => {
    if (start < 0 || end < 0 || end < start) {
      return 0;
    }
    if (usedNumbers.size === end - start + 1) {
      usedNumbers.clear();
    }
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * (end - start + 1) + start);
    } while (usedNumbers.has(randomNumber));

    usedNumbers.add(randomNumber);

    return randomNumber;
  };
};
