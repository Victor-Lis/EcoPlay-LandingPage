# EcoPlay | Landing Page
Lading Page do projeto EcoPlay, que tem sido o meu principal projeto nos últimos, justamente por ser meu Trabalho de Conclusão de Curso ou TCC

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
<-- Escrita do README.md em desenvolvimento -->

# Teste você mesmo!
[Acesse Aqui!](https://ecoplay-landingpage.vercel.app/)

## Autores
- [@Karlos-Eduardo](https://github.com/karlosmoraes)
- [@Miguel-Rosillo](https://github.com/MiguelRED1209)
- [@Pedro-Henrique](https://github.com/PedroHenriqueMoraesSamsonas)
- [@Victor-Lis](https://github.com/Victor-Lis)
