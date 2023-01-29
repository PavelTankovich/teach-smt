import { arrayToOptions } from "./index";

describe.each`
  arr             | labelsMap              | expected
  ${["Option 1"]} | ${{}}                  | ${[{ label: "Option 1", value: "Option 1" }]}
  ${["Option"]}   | ${{ Option: "Label" }} | ${[{ label: "Label", value: "Option" }]}
  ${[1]}          | ${{}}                  | ${[{ label: "1", value: "1" }]}
  ${[1]}          | ${{ 1: "Label" }}      | ${[{ label: "Label", value: "1" }]}
  ${[]}           | ${{}}                  | ${[]}
`(`.arrayToOptions($arr, $labelsMap)`, ({ arr, labelsMap, expected }) => {
  it(`returns ${JSON.stringify(expected)}`, () => {
    expect(arrayToOptions(arr, labelsMap)).toEqual(expected);
  });
});
