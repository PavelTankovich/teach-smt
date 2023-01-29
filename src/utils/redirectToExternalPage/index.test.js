import { redirectToExternalPage } from "./index";

describe("redirectToExternalPage", () => {
  it("should set the cookie correctly", () => {
    const savedLocationObj = window.location;
    const mockReplace = jest.fn();

    delete window.location;
    window.location = {
      replace: mockReplace,
    };

    redirectToExternalPage("http://example.com");

    expect(mockReplace).toHaveBeenCalledWith("http://example.com");

    window.location = savedLocationObj;
  });
});
