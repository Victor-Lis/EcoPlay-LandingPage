import type { YearType } from "@/@types/YearType";
import type { CapType } from "@/@types/Cap";

export function formatCapByDate({ caps }: { caps: CapType[] }): any[] {
  const anos: any[] = [];
  caps.map((cap) => {
    if (!anos.includes(cap.ano)) anos.unshift(cap.ano);
  });

  const result: YearType[] = [];
  anos.map((ano) => {
    result.push({
      ano,
      meses: [
        {
          mes: "Janeiro",
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 1).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),
        },
        {
          mes: "Fevereiro", 
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 2).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),
        },
        {
          mes: "Março", 
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 3).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),          
        },
        {
          mes: "Abril",
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 4).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),
        },
        {
          mes: "Maio", 
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 5).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),
        },
        {
          mes: "Junho", 
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 6).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),          
        },
        {
          mes: "Julho",
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 7).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),
        },
        {
          mes: "Agosto", 
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 8).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),
        },
        {
          mes: "Setembro", 
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 9).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),          
        },
        {
          mes: "Outubro",
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 10).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),
        },
        {
          mes: "Novembro", 
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 11).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),
        },
        {
          mes: "Dezembro", 
          dias: caps.filter((cap) => Number.parseInt(cap.mes) === 12).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia)),          
        },
      ],
    });
  });

  result.sort((a,b) => Number.parseInt(b.ano)-Number.parseInt(a.ano))
  return result;
}
