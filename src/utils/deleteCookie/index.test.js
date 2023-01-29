import { deleteCookie } from "./index";

describe("deleteCookie", () => {
  it("should set max-age=-1 and an empty value for the cookie", () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value: "key=value;",
    });
    deleteCookie("key");

    expect(window.document.cookie).toBe("key=; path=/; max-age=-1");
  });
});
