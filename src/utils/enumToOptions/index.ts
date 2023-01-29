import { ISelectOption } from "src/components/Form/Select";
import { arrayToOptions } from "src/utils/arrayToOptions";
import { enumToArray } from "src/utils/enumToArray";

export function enumToOptions(
  enumElement: Record<string, string | number>,
  labelsMap: Record<string, string> = {}
): ISelectOption[] {
  return arrayToOptions(enumToArray(enumElement), labelsMap);
}
