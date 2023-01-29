import { MutationFunction } from "@tanstack/react-query";
import FormData from "form-data";

import { sanitizeRequestBody } from "src/utils/query/sanitizeRequestBody";

import { HttpError } from "../HttpError";
import { EHttpCode } from "../HttpError/statuses";

export function mutateToPath<TData,
  TVariables,
  TTransformedVariables = TVariables>(
  path: string,
  {
    host = process.env.REACT_APP_GATEWAY_URL,
    method = "POST",
    sanitize = true,
    contentType = "application/json",
    transformBody,
    token
  }: {
    host?: string;
    method?: "POST" | "PATCH" | "PUT" | "DELETE";
    sanitize?: boolean;
    contentType?: string;
    transformBody?: (data: TVariables) => TTransformedVariables;
    token?: string;
  } = {}
): MutationFunction<TData, TVariables> {
  return async function mutation(body: TVariables) {
    const url = new URL(host as string);
    const [pathname] = (path as string).split("?");

    url.pathname = `${url.pathname}${
      url.pathname[url.pathname.length - 1] === "/" ? "" : "/"
    }${pathname}`;

    const headers = new Headers();
    if (token) {
      headers.append("authorization", `Bearer ${token}`);
    }

    let transformedBody: TVariables | TTransformedVariables = body;

    if (transformBody) {
      transformedBody = transformBody(body);
    } else if (sanitize) {
      transformedBody = sanitizeRequestBody(body);
    }

    let bodyToSend: string | FormData;

    if (transformedBody instanceof FormData) {
      // fetch will auto assign an accurate content-type with FormData
      bodyToSend = transformedBody;
    } else {
      bodyToSend = JSON.stringify(transformedBody);
      if (contentType) {
        headers.set("content-type", contentType);
      }
    }

    const req = new Request(url.toString(), {
      method,
      credentials: "include",
      headers,
      body: bodyToSend as RequestInit as ReadableStream<Uint8Array>
    });

    const response = await fetch(req);

    if (!response.ok) {
      throw new HttpError(
        response.status as EHttpCode,
        JSON.stringify(await response.json())
      );
    }

    switch (response.headers.get("content-type")?.split(";")[0]) {
      case "application/json":
        return response.json();
      default:
        return response.text();
    }
  };
}

// "@typescript-eslint/eslint-plugin": "^5.49.0",
// "@typescript-eslint/parser": "^5.49.0",
// "eslint-config-airbnb": "^19.0.4",
// "eslint-config-airbnb-typescript": "^17.0.0",
// "eslint-config-prettier": "^8.6.0",
// "eslint-import-resolver-alias": "^1.1.2",
// "eslint-import-resolver-typescript": "^3.5.3",
// "eslint-plugin-import": "^2.27.5",
// "eslint-plugin-jsx-a11y": "^6.7.1",
// "eslint-plugin-react": "^7.32.1",
