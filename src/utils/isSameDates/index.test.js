import * as mockTimezone from "timezone-mock";

import { isSameDates } from ".";

describe("isSameDates", () => {
  beforeAll(() => {
    mockTimezone.register("UTC");
    jest.useFakeTimers();
  });

  afterAll(() => {
    mockTimezone.unregister();
    jest.useRealTimers();
  });

  it.each`
    currentDate                               | date                                      | differenceInDays | expected
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-11-03T00:00:00.000000")} | ${-3}            | ${true}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-11-03T08:47:21.000000")} | ${-3}            | ${true}
    ${new Date("2022-11-06T00:00:00.000000")} | ${new Date("2022-11-03T23:59:59.000000")} | ${-3}            | ${true}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-11-09T00:00:00.000000")} | ${3}             | ${true}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-11-09T08:47:21.000000")} | ${3}             | ${true}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-11-09T23:59:59.000000")} | ${3}             | ${true}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-09-07T00:00:00.000000")} | ${1}             | ${false}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-09-03T08:47:21.000000")} | ${1}             | ${false}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-09-07T23:59:59.000000")} | ${1}             | ${false}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-11-06T00:00:00.000000")} | ${0}             | ${true}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-11-06T12:55:00.000000")} | ${0}             | ${true}
    ${new Date("2022-11-06T12:55:00.000000")} | ${new Date("2022-11-06T23:59:59.000000")} | ${0}             | ${true}
  `(
    "data: $date, expected: $expected",
    ({ currentDate, date, differenceInDays, expected }) => {
      jest.setSystemTime(currentDate);

      expect(isSameDates(date, differenceInDays)).toBe(expected);
    }
  );
});
