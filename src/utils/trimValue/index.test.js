import { trimValue } from "./index";

describe.each`
  value                 | expected
  ${"String"}           | ${"String"}
  ${"    String"}       | ${"String"}
  ${"String   "}        | ${"String"}
  ${"    String   "}    | ${"String"}
  ${"    String   1  "} | ${"String   1"}
  ${2}                  | ${2}
  ${{}}                 | ${{}}
  ${[]}                 | ${[]}
`(`.trimValue($value)`, ({ value, expected }) => {
  it(`returns ${JSON.stringify(expected)}`, () => {
    expect(trimValue(value)).toEqual(expected);
  });
});
