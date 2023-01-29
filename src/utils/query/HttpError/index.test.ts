import { HttpError } from ".";

describe("HttpError", () => {
  describe("when passed only a status", () => {
    describe("when status is client based", () => {
      it("works", () => {
        const error = new HttpError(418);
        expect(error.status).toEqual(418);
        expect(error.code).toEqual("HTTP_ERROR_IMA_TEAPOT");
        expect(error.message).toEqual("");
        expect(error.isClientError).toEqual(true);
        expect(error.isServerError).toEqual(false);
        expect(error.statusClass).toEqual(400);
      });
    });

    describe("when status is server based", () => {
      it("works", () => {
        const error = new HttpError(508);
        expect(error.status).toEqual(508);
        expect(error.code).toEqual("HTTP_ERROR_LOOP_DETECTED");
        expect(error.code).toEqual("HTTP_ERROR_LOOP_DETECTED");
        expect(error.code).toEqual("HTTP_ERROR_LOOP_DETECTED");
        expect(error.message).toEqual("");
        expect(error.isClientError).toEqual(false);
        expect(error.isServerError).toEqual(true);
        expect(error.statusClass).toEqual(500);
      });
    });

    describe("when status is not an error", () => {
      it("works", () => {
        const error = new HttpError(201);
        expect(error.status).toEqual(500);
        expect(error.code).toEqual("HTTP_ERROR_INTERNAL_SERVER_ERROR");
        expect(error.message).toEqual("");
        expect(error.isClientError).toEqual(false);
        expect(error.isServerError).toEqual(true);
        expect(error.statusClass).toEqual(500);
      });
    });

    describe("when status is a string", () => {
      it("works", () => {
        const error = new HttpError("InternalServerError");
        expect(error.status).toEqual(500);
        expect(error.code).toEqual("HTTP_ERROR_INTERNAL_SERVER_ERROR");
        expect(error.message).toEqual("");
        expect(error.isClientError).toEqual(false);
        expect(error.isServerError).toEqual(true);
        expect(error.statusClass).toEqual(500);
      });
    });
  });

  describe("when passed a code and message", () => {
    it("works", () => {
      const error = new HttpError(400, "Some message");
      expect(error.message).toEqual("Some message");
    });
  });
  describe("when passed a code and params", () => {
    it("works", () => {
      const error = new HttpError(400, {
        message: "Some message",
        code: "SOME_CODE",
      });
      expect(error.message).toEqual("Some message");
      expect(error.code).toEqual("SOME_CODE");
    });
  });

  describe("when passed a code and message and params", () => {
    it("works", () => {
      const error = new HttpError(400, "Some message", {
        message: "Some message",
        code: "SOME_CODE",
      });
      expect(error.message).toEqual("Some message");
      expect(error.code).toEqual("SOME_CODE");
    });
  });

  it("can serialize", () => {
    const error = new HttpError(400, "Some message", {
      message: "Some message",
      code: "SOME_CODE",
    });

    expect(error.serialize()).toEqual({
      statusCode: 400,
      error: "Bad Request",
      message: "Some message",
    });
  });
});
