interface ICookieOptions {
  "max-age"?: number;
  path?: string;
}

export function setCookie(
  name: string,
  value: string,
  options?: ICookieOptions
) {
  const cookieOptions: ICookieOptions = {
    path: "/",
    ...options,
  };

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}`;

  (Object.keys(cookieOptions) as [keyof ICookieOptions]).forEach(
    (optionKey) => {
      updatedCookie += `; ${optionKey}`;

      const optionValue = cookieOptions[optionKey];

      if (optionValue) {
        updatedCookie += `=${optionValue}`;
      }
    }
  );

  document.cookie = updatedCookie;
}
