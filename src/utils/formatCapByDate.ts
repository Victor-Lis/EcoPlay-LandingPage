import type { YearType } from "@/@types/YearType";
import type { CapType } from "@/@types/CapType";

function getTime(hora: string){
  const time = (Number.parseInt(hora[0]+hora[1])*60)+(Number.parseInt(hora[3]+hora[4]))+(Number.parseInt(hora[6]+hora[7]))
  // console.log("Hora", hora)
  // console.log("Time", time)
  return time
}

function formatCapByDayHour({days}:{days: CapType[]}){
  const dates: string[] = []
  days.map((day) => {
    if (!dates.includes(day.dia)) dates.push(day.dia);
  });
  const formattedDate: any[] = []
  dates.map((date) => {
    const tampinhas = days.filter((day) => day.dia === date)
    tampinhas.sort((a,b) => getTime(b.hora)-getTime(a.hora))
    formattedDate.push({
      dia: date,
      tampinhas,
    })
  }) 

  return formattedDate
}

export function formatCapByDate({ caps }: { caps: CapType[] }): any[] {
  const anos: any[] = [];
  caps.map((cap) => {
    if (!anos.includes(cap.ano)) anos.unshift(cap.ano);
  });

  const result: YearType[] = [];
  formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 9) || []})
  anos.map((ano) => {
    result.push({
      ano,
      meses: [
        {
          mes: "Janeiro",
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 1 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Fevereiro", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 2 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Março", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 3 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Abril",
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 4 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Maio", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 5 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Junho", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 6 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Julho",
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 7 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Agosto", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 8 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Setembro", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 9 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Outubro",
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 10 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Novembro", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 11 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
        {
          mes: "Dezembro", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 12 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
        },
      ],
    });
  });

  result.sort((a,b) => Number.parseInt(b.ano)-Number.parseInt(a.ano))
  return result;
}
