import { getOriginatorInfo } from "./index";

describe.each`
  firstName      | lastName      | company      | expected
  ${"firstName"} | ${"lastName"} | ${"company"} | ${"firstName lastName, company"}
  ${""}          | ${"lastName"} | ${"company"} | ${"lastName, company"}
  ${"firstName"} | ${""}         | ${"company"} | ${"firstName, company"}
  ${"firstName"} | ${"lastName"} | ${""}        | ${"firstName lastName"}
  ${""}          | ${""}         | ${""}        | ${""}
`(
  `.getOriginatorInfo($firstName, $lastName, $company)`,
  ({ firstName, lastName, company, expected }) => {
    it(`returns ${JSON.stringify(expected)}`, () => {
      expect(getOriginatorInfo({ firstName, lastName, company })).toEqual(
        expected
      );
    });
  }
);
