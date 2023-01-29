export function getCookieByName(name: string): string | undefined {
  return document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith(`${name}=`) && cookie)
    ?.split("=")[1];
}
