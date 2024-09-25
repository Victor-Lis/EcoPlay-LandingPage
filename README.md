# EcoPlay | Landing Page
Lading Page do projeto EcoPlay, que tem sido o meu principal projeto nos últimos tempos, justamente por ser meu Trabalho de Conclusão de Curso ou TCC

<br>

## SPA - Single Page Application
Tive a ideia de para causar uma experiência diferente para os usuários trazer uma aplicação em uma tela só (exceto pela tela de histórico)

<br>

## Sistema de Achievements
O grande detalhe da aplicação é que, um dos incentivos do projeto é a gamificação, para trazer isso para parte web fiz algo similar a um sistem a de "conquista" nos jogos onde após o usuário passar de uma sessão ele "libera" a possibilidade de scrollar de volta para aquela tela como se fosse uma consquista.

https://github.com/user-attachments/assets/9c5662a0-bf07-4b2a-a708-96166bb171c5

<br>

## Funções de navegação
Essas funções são a base para o sistema em formato S.P.A. e além disso para o sistema de achievements

<br>

### getBottom
Essa é a função base para descobrir o ponto mais inferior de um elemento exibido na tela. Basta passar o #id do elemento:

```path
  src/utils/navigation.ts
```
```ts
  const getBottom = (id: string) => {
    const element = document.getElementById(id);
    return (element?.offsetTop || 0) + (element?.clientHeight || 0);
  };
```

<br>

### isMoreDown
Essa função utiliza da função interior para descobrir se a posição atual do "client"(mouse) é mais inferior que o elemento determinado. Mais uma vez basta passar o #id do elemento:

A utilização dessa função nessa aplicação é para liberar o achievement do elemento, ou seja, caso o sistema envie o #id de um elemento para essa função e ela retorne true, então o achievement desse elemento é liberado.
```path
  src/utils/navigation.ts
```
```ts
  export const isMoreDown = (id: string) => {
    return window.scrollY > getDown(id);
  };
```

<br>

### getTop
Diferente da função getBottom e como próprio nome sugere, ao invés de pegar a parte debaixo do elemento ela é responsável por pegar a parte de cima do elemento. Seguindo o padrão basta passar o #id:

```path
  src/utils/navigation.ts
```
```ts
  const getTop = (id: string) => {
    const element = document.getElementById(id);
    return (element?.offsetTop || 0);
  };
```

<br>

### isMoreUp
Essa função serve para, com base na última função, verificar se o client/usuário está acima do elemento em questão. Novamente basta passar o #id do elemento:

Já essa função tem uma aplicação um pouco diferente da "isMoreDown", nesse caso ela serve para verificar se o usuário estivá imediatamente acima do elemento em questão, ao usar o guia de scroll, se a função retornar true, o usuário será enviado diretamente para o próximo elemento:
```path
  src/utils/navigation.ts
```
```ts
  export const isMoreUp = (id: string) => {
    return window.scrollY < getTop(id);
  };
```

<br>

### goTo
Essa é função mais simples em relação a todas acima, ela só navega até o elemento em questão:

```path
  src/utils/navigation.ts
```
```ts
  export const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
```

<br>

## Conexão com Firebase para recebimento dos dados
```cmd
  src/utils/firebaseConfig.ts
```
```tsx
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
}

export const app = initializeApp(firebaseConfig);
  
export const database = getDatabase(app);

export const dataRef = ref(database, "/");
export const tampinhasRef = ref(database, "/tampinhas");
export const totalRef = ref(database, '/total')
```

## Recebendo e repassando os dados
Nesse trecho os dados são pegos através do websocket do firebase que é o onValue.

Ao receber esses dados eles passam uma função chamada "formatCapByDate", que torna os dados mais usáveis 

Esse método foi escolhido por mim justamente por ser um websocket e portanto se manter sempre atualizado quanto a base de dados
```cmd
  src/providers/CapContext.tsx
```
```tsx
"use client";
import type { ReactNode } from "react";
import type { CapType } from "@/@types/CapType";

import { ref, onValue } from "firebase/database";
import { createContext, useEffect, useState } from "react";

import { dataRef, tampinhasRef } from '@/utils/firebaseConfig'
import { YearType } from "@/@types/YearType";
import { formatCapByDate } from "@/utils/formatCapByDate";

interface CapContextData {
  total: number;
  tampinhas: CapType[]
  formattedTampinhas: YearType[]
}

interface CapValType {
  data: string,
  hora: string
}

export const CapContext = createContext({} as CapContextData);

export const CapProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState<number>(0)
  const [tampinhas, setTampinhas] = useState<CapType[]>([])
  const [formattedTampinhas, setFormattedTampinhas] = useState<YearType[]>([])

  useEffect(() => {
    const unsubscribe = onValue(tampinhasRef, (snapshot) => {
      const tampinhasVal = snapshot.val()
      if(!tampinhasVal) return
      const keys = Object.keys(tampinhasVal) || []
      const values = Object.values(snapshot.val() as CapValType[]) || []

      setTotal(keys.length)

      const data: CapType[] = []
      keys?.map((key, i) => {
        data.push({
          key,
          dia: values[i].data.slice(0, 2),
          mes: values[i].data.slice(3, 5),
          ano: values[i].data.slice(6, 10),
          hora: values[i].hora,
        })
      })
      
      setTampinhas(data)

      const formattedData = formatCapByDate({caps: data})
      setFormattedTampinhas(formattedData)
    });

    return () => unsubscribe();
  }, []);

  return (
    <CapContext.Provider value={{ total, tampinhas, formattedTampinhas }}>
      {children}
    </CapContext.Provider>
  );
};
```

## formatCapByDate
Essa é a função mais complexo do projeto com facilidade, tentei faze-la da maneira mais completa e otimizada, com certeza é possível melhorar ela, inclusive se você acha que pode fazer uma função melhor otimizada e quis tentar, eu agradeceria qualquer ajuda
```cmd
  src/utils/formatCapByDate.ts
```
```tsx
import type { YearType } from "@/@types/YearType";
import type { CapType } from "@/@types/CapType";

function getTime(hora: string){
  const horas = Number.parseInt(hora.slice(0, 2)); // Pega as horas (0 a 1)
  const minutos = Number.parseInt(hora.slice(3, 5)); // Pega os minutos (3 a 4)
  const segundos = Number.parseInt(hora.slice(6, 8)); // Pega os segundos (6 a 7)

  const time = horas * 3600 + minutos * 60 + segundos;

  return time;
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
```

### Antes de passar pela função (Formato)
```json
[
    {
        "key": "-O71HBW5tTumRZkuzAPv",
        "dia": "17",
        "mes": "02",
        "ano": "2023",
        "hora": "20:19:37"
    },
    {
        "key": "-O76ynPfX9imPle3eSLL",
        "dia": "18",
        "mes": "09",
        "ano": "2024",
        "hora": "22:52:37"
    },
    {
        "key": "-O770joo-eJ50zsbb6Qf",
        "dia": "18",
        "mes": "09",
        "ano": "2024",
        "hora": "23:05:28"
    },
]
```

### Depois de passar pela função (Formato)
```json
[
    {
        "ano": "2024",
        "meses": [
            {
                "mes": "Janeiro",
                "dias": []
            },
            {
                "mes": "Fevereiro",
                "dias": []
            },
            {
                "mes": "Março",
                "dias": []
            },
            {
                "mes": "Abril",
                "dias": []
            },
            {
                "mes": "Maio",
                "dias": []
            },
            {
                "mes": "Junho",
                "dias": []
            },
            {
                "mes": "Julho",
                "dias": []
            },
            {
                "mes": "Agosto",
                "dias": []
            },
            {
                "mes": "Setembro",
                "dias": [
                    {
                        "dia": "21",
                        "tampinhas": [
                            {
                                "key": "-O7HHpKCxwY4vn0LRQD7",
                                "dia": "21",
                                "mes": "09",
                                "ano": "2024",
                                "hora": "01:56:19"
                            },
                        ]
                    },
                    {
                        "dia": "20",
                        "tampinhas": [
                            {
                                "key": "-O7H6v5CQKl37-e5zLKz",
                                "dia": "20",
                                "mes": "09",
                                "ano": "2024",
                                "hora": "22:08:40"
                            },
                        ]
                    },
                    {
                        "dia": "18",
                        "tampinhas": [
                            {
                                "key": "-O770joo-eJ50zsbb6Qf",
                                "dia": "18",
                                "mes": "09",
                                "ano": "2024",
                                "hora": "23:05:28"
                            },
                        ]
                    }
                ]
            },
            {
                "mes": "Outubro",
                "dias": []
            },
            {
                "mes": "Novembro",
                "dias": []
            },
            {
                "mes": "Dezembro",
                "dias": []
            }
        ]
    },
]
```

### Porque formatar os dados?
Para ser possível alcançar a UI que me interessava no TCC era necessário que os dados mudassem completamente de formato, além de que eu gostaria de evitar ao máximo situações de loading para meus usuário, da forma que os dados ficam ao final, é possível que o usuário escolha "qual parte dos dados ver" sem necessitar de um refresh ou puxar os dados novamente

# Teste você mesmo!
[Acesse Aqui!](https://ecoplay-landingpage.vercel.app/)

## Autores
- [@Karlos-Eduardo](https://github.com/karlosmoraes)
- [@Miguel-Rosillo](https://github.com/MiguelRED1209)
- [@Pedro-Henrique](https://github.com/PedroHenriqueMoraesSamsonas)
- [@Victor-Lis](https://github.com/Victor-Lis)
