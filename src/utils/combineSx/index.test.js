import { combineSx } from "./index";

describe.each`
  value                                                          | expected
  ${[{ width: 10 }]}                                             | ${[{ width: 10 }]}
  ${[{ width: 10 }, undefined, { height: 10 }]}                  | ${[{ width: 10 }, { height: 10 }]}
  ${[{ width: 10 }, undefined, {}, [{ padding: 10, left: 12 }]]} | ${[{ width: 10 }, {}, { padding: 10, left: 12 }]}
`("call return function with $value", ({ value, expected }) => {
  it(`returns ${JSON.stringify(expected)}`, () => {
    expect(combineSx(...value)).toEqual(expected);
  });
});
