import { setCookie } from "./index";

describe("setCookie", () => {
  it("should set the cookie correctly", () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value: "key=value;",
    });
    setCookie("key", "value", { path: "/example", "max-age": 2 });

    expect(window.document.cookie).toBe("key=value; path=/example; max-age=2");
  });

  it("should set a default setting for the cookie", () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value: "key=value;",
    });
    setCookie("key", "value");

    expect(window.document.cookie).toBe("key=value; path=/");
  });
});
