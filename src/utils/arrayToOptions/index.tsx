import { ReactNode } from "react";

import { ISelectOption } from "src/components/Form/Select";

export function arrayToOptions(
  arr: (string | number)[],
  labelsMap: Record<string, ReactNode> = {}
): ISelectOption[] {
  return arr.map((el) => {
    return {
      value: String(el),
      label: labelsMap[el] ?? String(el),
    };
  });
}
