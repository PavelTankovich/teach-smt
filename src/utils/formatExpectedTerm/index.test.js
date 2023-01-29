import { formatExpectedTerm } from "./index";

describe.each`
  term         | fullWords    | expected
  ${undefined} | ${undefined} | ${"-"}
  ${1}         | ${undefined} | ${"1 mo"}
  ${10}        | ${undefined} | ${"10 mos"}
  ${12}        | ${undefined} | ${"1 yr"}
  ${13}        | ${undefined} | ${"1 yr 1 mo"}
  ${16}        | ${undefined} | ${"1 yr 4 mos"}
  ${30}        | ${undefined} | ${"2 yrs 6 mos"}
  ${undefined} | ${true}      | ${"-"}
  ${1}         | ${true}      | ${"1 month"}
  ${10}        | ${true}      | ${"10 months"}
  ${12}        | ${true}      | ${"1 year"}
  ${13}        | ${true}      | ${"1 year 1 month"}
  ${16}        | ${true}      | ${"1 year 4 months"}
  ${30}        | ${true}      | ${"2 years 6 months"}
`(`call formatExpectedTerm with $term`, ({ term, fullWords, expected }) => {
  it(`returns expected`, () => {
    expect(formatExpectedTerm(term, fullWords)).toEqual(expected);
  });
});
