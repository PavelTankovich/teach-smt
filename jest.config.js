module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest",
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^(types|testHelpers|src)/(.*)": "<rootDir>/$1/$2",
    "jest-axe": "<rootDir>/__mocks__/jest-axe/index.ts",
  },
};
