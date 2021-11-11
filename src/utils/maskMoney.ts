import { MaskService } from "react-native-masked-text";

export default function maskMoney(value: string, unit: string, separator: string, delimiter: string): string {
  return MaskService.toMask('money', value, {
    unit,
    separator,
    delimiter
  })
}