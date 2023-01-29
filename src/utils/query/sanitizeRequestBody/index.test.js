import { sanitizeRequestBody } from "./index";

describe.each`
  body                           | expected
  ${"String"}                    | ${"String"}
  ${{ key: "" }}                 | ${{ key: null }}
  ${{ key: [] }}                 | ${{ key: [] }}
  ${{ key: ["value"] }}          | ${{ key: ["value"] }}
  ${{ key: { value: "value" } }} | ${{ key: { value: "value" } }}
  ${{ key: "value" }}            | ${{ key: "value" }}
`(`.sanitizeRequestBody($body)`, ({ body, expected }) => {
  it(`returns ${JSON.stringify(expected)}`, () => {
    expect(sanitizeRequestBody(body)).toEqual(expected);
  });
});
