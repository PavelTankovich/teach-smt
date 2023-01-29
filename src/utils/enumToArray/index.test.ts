import { enumToArray } from "./index";

enum EMock {
  KEY = "value",
}
enum EEmptyMock {}

describe.each`
  enumName      | expected
  ${EMock}      | ${["value"]}
  ${EEmptyMock} | ${[]}
`(`.enumToArray($enumName)`, ({ enumName, expected }) => {
  it(`returns ${JSON.stringify(expected)}`, () => {
    expect(enumToArray(enumName)).toEqual(expected);
  });
});
