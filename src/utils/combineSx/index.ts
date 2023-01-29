import { SxProps, Theme } from "@mui/material";

type TResult = Extract<SxProps<Theme>, ReadonlyArray<unknown>>;

export function combineSx(...args: Array<SxProps<Theme> | undefined>): TResult {
  const result: TResult[number][] = [];

  args.forEach((sx) => {
    if (sx instanceof Array) {
      result.push(...sx);
    } else if (sx !== undefined) {
      result.push(sx);
    }
  });

  return result;
}
