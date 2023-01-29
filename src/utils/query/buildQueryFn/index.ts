import { QueryFunctionContext } from "@tanstack/react-query";

import { ensureArray } from "src/utils/ensureArray";
import { EHttpCode, HttpError } from "src/utils/query/HttpError";

const defaultHost = String(process.env.REACT_APP_GATEWAY_URL);

interface IQueryKeyConfig {
  query: Record<string, string | string[]>;
  hasSignal?: boolean;
}
interface IBuildQueryFnProps {
  token?: string;
}

export function buildQueryFn({ token }: IBuildQueryFnProps) {
  return async function queryFn({
    queryKey: [path, config],
    signal,
  }: QueryFunctionContext) {
    const headers = new Headers();
    const queryConfig = config as IQueryKeyConfig;
    const url = new URL(defaultHost);
    const [pathname, search] = (path as string).split("?");

    url.pathname = `${url.pathname}${
      url.pathname[url.pathname.length - 1] === "/" ? "" : "/"
    }${pathname}`;

    if (token) {
      headers.append("authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");
    }
    if (search) {
      url.search = search;
    }

    if (queryConfig && queryConfig.query) {
      Object.entries(queryConfig.query).forEach(([key, values]) => {
        ensureArray<string>(values).forEach((value) => {
          if (value !== undefined) {
            url.searchParams.append(key, value);
          }
        });
      });
    }

    const req = new Request(url.toString(), {
      credentials: "include",
      headers,
      signal: queryConfig?.hasSignal ? signal : null,
    });
    const response = await fetch(req);

    if (!response.ok) {
      throw new HttpError(
        response.status as EHttpCode,
        JSON.stringify(await response.json())
      );
    }

    return response.json();
  };
}
