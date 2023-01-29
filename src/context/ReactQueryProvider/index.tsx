import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { buildQueryFn } from "src/utils/query/buildQueryFn";
import { HttpError } from "src/utils/query/HttpError";

interface IReactQueryProviderProps {}

export function ReactQueryProvider({
  children,
}: PropsWithChildren<IReactQueryProviderProps>) {
  async function handleError(error: unknown) {
    if (error instanceof HttpError) {
      switch (error.statusCode) {
        default:
          break;
      }
    }
  }

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        queryFn: buildQueryFn({ token: "Bearer token" }),
        onError: handleError,
      },
    },
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
