import { CapType } from "./Cap"

export type MonthType = {
  mes: string,
  dias: {
    dia: string,
    tampinhas: CapType[]
  }[]
}