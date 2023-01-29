import "@testing-library/jest-dom";
import "jest-axe/extend-expect";
import fetchMock from "jest-fetch-mock";

// https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

jest.setTimeout(30000);

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

process.env.REACT_APP_GATEWAY_URL = "http://example.com";
process.env.REACT_APP_URL = "http://example.com";
process.env.REACT_APP_SIGNIN_SSO_URL =
  "http://example.com?idp_identifier=IDP_IDENTIFIER";
process.env.REACT_APP_ENV = "test";

fetchMock.enableMocks();

afterEach(() => {
  fetchMock.resetMocks();
});

const storageFactory = () => {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
};

Object.defineProperty(window, "sessionStorage", {
  value: storageFactory(),
});
Object.defineProperty(window, "localStorage", {
  value: storageFactory(),
});
afterEach(() => {
  window.localStorage.clear();
  window.sessionStorage.clear();
});
