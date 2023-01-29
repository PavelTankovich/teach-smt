import { enumToOptions } from "./index";

enum EMock {
  KEY = "value",
}
enum EEmptyMock {}

describe.each`
  enumName      | labelsMap                   | expected
  ${EMock}      | ${{}}                       | ${[{ label: "value", value: "value" }]}
  ${EMock}      | ${{ [EMock.KEY]: "label" }} | ${[{ label: "label", value: "value" }]}
  ${EMock}      | ${{ name: "label" }}        | ${[{ label: "value", value: "value" }]}
  ${EEmptyMock} | ${{}}                       | ${[]}
  ${EEmptyMock} | ${{ key: "label" }}         | ${[]}
`(
  `.enumToOptions($enumName, $labelsMap)`,
  ({ enumName, labelsMap, expected }) => {
    it(`returns ${JSON.stringify(expected)}`, () => {
      expect(enumToOptions(enumName, labelsMap)).toEqual(expected);
    });
  }
);
