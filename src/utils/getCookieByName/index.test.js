import { getCookieByName } from "./index";

describe("getCookieByName", () => {
  it("should return the value of the cookie", () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value: "key=value;",
    });

    expect(getCookieByName("key")).toBe("value");
  });

  it("should return undefined", () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value: "key=value;",
    });

    expect(getCookieByName("name")).toBeUndefined();
  });
});
