// ported from https://github.com/ShogunPanda/http-errors-enhanced

import {
  codesByIdentifier,
  identifierByCodes,
  messagesByCodes,
  phrasesByCodes,
  EHttpCode,
} from "./statuses";

interface Properties extends Error {
  status: EHttpCode;
  statusCode: EHttpCode; // This always mirrors status
  statusClass: number;
  code: string;
  error: string;
  errorPhrase: string;
  headers: { [key: string]: string };
  isClientError: boolean;
  isServerError: boolean;

  [key: string]: unknown;
}

export type { EHttpCode };

export class HttpError extends Error implements Properties {
  static standardErrorPrefix = "HTTP_ERROR_";

  status: EHttpCode;

  statusCode: EHttpCode; // This always mirrors status

  statusClass: number;

  code: string;

  error: string;

  errorPhrase: string;

  headers: { [key: string]: string };

  isClientError: boolean;

  isServerError: boolean;

  [key: string]: unknown;

  constructor(
    status: EHttpCode | string,
    message: string | Partial<Properties> = "",
    properties: Partial<Properties> = {}
  ) {
    const props = typeof message === "object" ? message : properties;
    super(typeof message === "object" ? message.message : message);

    if (typeof status === "string") {
      this.status = codesByIdentifier[status];
    } else if (status < 400 || status > 599) {
      this.status = 500;
    } else {
      this.status = status;
    }
    this.statusCode = this.status;
    this.error = messagesByCodes[this.status];
    this.errorPhrase = phrasesByCodes[this.status];

    this.headers = props.headers ?? {};
    this.stack = props.stack || this.stack;

    // Assign serialization properties
    const code =
      typeof this.status === "string"
        ? this.status
        : identifierByCodes[this.status];
    this.name = "HttpError";
    this.code =
      props.code ||
      `${HttpError.standardErrorPrefix}${code
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .toUpperCase()}`;

    // Assign helpers properties
    this.isClientError = this.status < 500;
    this.isServerError = !this.isClientError;
    this.statusClass = this.isClientError ? 400 : 500;

    // Configure properties
    Object.defineProperties(this, {
      status: { enumerable: false },
      code: {
        enumerable: !this.code.startsWith(HttpError.standardErrorPrefix),
      },
      errorPhrase: { enumerable: false },
      headers: { enumerable: false },
      name: { enumerable: false },
      isClientError: { enumerable: false },
      isServerError: { enumerable: false },
      statusClass: { enumerable: false },
      expose: { enumerable: false },
    });
  }

  serialize = (): {
    statusCode: number;
    error: string;
    message: string;
  } => {
    return {
      statusCode: this.statusCode,
      error: this.error,
      message: this.message,
    };
  };
}
