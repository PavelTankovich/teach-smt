import { getErrorMessage } from "./getErrorMessage";
import { errorMessages } from "./errors";

describe.each`
  error                    | options             | name         | expected
  ${{ type: "required" }}  | ${{}}               | ${undefined} | ${errorMessages.required}
  ${{ type: "minLength" }} | ${{ minLength: 3 }} | ${"field"}   | ${errorMessages.minLength(3, "field")}
  ${{ type: "minLength" }} | ${{ minLength: 3 }} | ${undefined} | ${errorMessages.minLength(3)}
  ${{ type: "maxLength" }} | ${{ maxLength: 5 }} | ${"field"}   | ${errorMessages.maxLength(5, "field")}
  ${{ type: "maxLength" }} | ${{ maxLength: 5 }} | ${undefined} | ${errorMessages.maxLength(5)}
  ${{ type: "mask" }}      | ${{ mask: 3 }}      | ${"field"}   | ${errorMessages.mask(3, "field")}
  ${{ type: "mask" }}      | ${{ mask: 5 }}      | ${undefined} | ${errorMessages.mask(5)}
  ${{ type: "server" }}    | ${{}}               | ${"field"}   | ${errorMessages.server("field")}
  ${{ type: "server" }}    | ${{}}               | ${undefined} | ${errorMessages.server()}
  ${{ message: "Error" }}  | ${{}}               | ${undefined} | ${"Error"}
  ${{ type: "random" }}    | ${{}}               | ${undefined} | ${""}
  ${{}}                    | ${{}}               | ${undefined} | ${""}
`(
  ".getErrorMessage($error, $options, $name)",
  ({ error, options, name, expected }) => {
    it(`returns ${JSON.stringify(expected)}`, () => {
      expect(getErrorMessage({ error, options, name })).toEqual(expected);
    });
  }
);
