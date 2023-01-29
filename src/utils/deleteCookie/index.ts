import { setCookie } from "src/utils/setCookie";

export function deleteCookie(name: string) {
  setCookie(name, "", {
    "max-age": -1,
  });
}
