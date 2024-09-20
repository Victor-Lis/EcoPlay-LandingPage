import { CapType } from "./CapType"

export type MonthType = {
  mes: string,
  dias: {
    dia: string,
    tampinhas: CapType[]
  }[]
}