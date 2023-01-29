import * as mockTimezone from "timezone-mock";

import { todayLabel } from "src/consts/today-label";

import { getRemainingTerm } from "./index";

describe("getRemainingTerm", () => {
  beforeAll(() => {
    mockTimezone.register("UTC");
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2022-12-02"));
  });

  afterAll(() => {
    mockTimezone.unregister();
    jest.useRealTimers();
  });

  it.each`
    endDate                   | expected
    ${new Date("2022-12-02")} | ${todayLabel}
    ${new Date("2022-12-03")} | ${"1 day"}
    ${new Date("2022-12-10")} | ${"8 days"}
    ${new Date("2023-01-01")} | ${"1 month"}
    ${new Date("2023-01-03")} | ${"2 months"}
    ${new Date("2023-05-01")} | ${"5 months"}
    ${new Date("2023-12-01")} | ${"1 year"}
    ${new Date("2024-01-01")} | ${"1 year 1 month"}
    ${new Date("2024-04-01")} | ${"1 year 4 months"}
    ${new Date("2022-11-01")} | ${"-"}
  `("get remaining term", ({ endDate, expected }) => {
    expect(getRemainingTerm(endDate)).toEqual(expected);
  });
});
