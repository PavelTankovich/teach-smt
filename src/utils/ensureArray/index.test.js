import { ensureArray } from "./index";

describe.each`
  input                   | expected
  ${[]}                   | ${[]}
  ${["Item 1"]}           | ${["Item 1"]}
  ${["Item 1", "Item 2"]} | ${["Item 1", "Item 2"]}
  ${"Item 1"}             | ${["Item 1"]}
`(".ensureArray($input)", ({ input, expected }) => {
  it(`returns ${JSON.stringify(expected)}`, () => {
    expect(ensureArray(input)).toEqual(expected);
  });
});
