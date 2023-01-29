export function sanitizeRequestBody<TBody>(body: TBody): TBody {
  if (typeof body !== "object") {
    return body;
  }
  const sanitizedBody: Record<string, unknown> = {};
  Object.entries(body as object).forEach(([key, value]) => {
    if (typeof value !== "string" || !!value.length) {
      sanitizedBody[key] = value;
    } else {
      sanitizedBody[key] = null;
    }
  });
  return sanitizedBody as TBody;
}
