import DuvidasHero from "@/assets/duvidasHero.svg";
import Image from "next/image";
import Card from "./components/Card";

export default function Duvidas() {
  return (
    <div className="w-10/12 md:w-7/12 gap-y-5 flex flex-col justify-center items-center">
      <Image
        src={DuvidasHero}
        alt="Banner Duvidas EcoPlay"
        className={`min-w-72 sm:min-w-40 w-10/12 max-w-96 mb-5`}
        priority
      />

      <Card
        title="Como surgiu?"
        content={
          <>
            <p>
              A ideia do projeto surgiu a partir de uma conversa entre o
              professor coorientador Márcio Yugi e um dos integrantes, Victor
              Lis.
            </p>
            <p>
              Nessa conversa, idealizaram a construção de um projeto que
              incentivasse uma causa social relevante, mas que também fosse
              divertido e proporcionasse um escape da monotonia do dia a dia.
            </p>
            <p>
              Diante disso, concluiu-se que a gamificação seria a ferramenta
              ideal para alcançar o objetivo de fugir da monotonia.
            </p>
            <p>
              Os temas escolhidos para serem incentivados foram <strong>Sustentabilidade</strong> e <strong>Reciclagem</strong>, ambos de grande importância nos
              dias atuais.
            </p>
          </>
        }
      />

      <Card
        title="Onde queremos chegar?"
        content={
          <>
            <p>
              Atualmente estamos em uma fase de melhorias continuas, constamente
              estamos reformando o projeto de acordo com a aquisição das peças
              necessárias para continuarmos, o projeto já passou por diversas
              versões até aqui e pretendemos continuar!
            </p>
            <p>
              Atualmente estamos em uma fase de melhorias continuas, constamente
              estamos reformando o projeto de acordo com a aquisição das peças
              necessárias para continuarmos, o projeto já passou por diversas
              versões até aqui e pretendemos continuar!
            </p>
            <p>
              Estamos em busca de parceiros que possam tornar a construção de
              nosso projeto, divulgação e evolução do mesmo mais possível!
            </p>
          </>
        }
        extraComponent={
          <div
            className="w-full bg-white flex flex-col justify-center items-center"
            target="_blank"
            href="https://youtu.be/_PpsZOdVThM"
          >
            <a className="bg-blue-600 text-white px-2 py-1 mb-3 hover:opacity-80 hover:scale-95 duration-300 cursor-pointer">
              Veja aqui o nosso protótipo!
            </a>
          </div>
        }
      />

      <Card
        title="O que fazemos com as tampinhas?"
        content={
          <>
            <p className="text-left w-full">
              As tampinhas adquiridas em nosso projeto são trocadas em cadeiras de rodas!
            </p>
            <p>
              Então além de ajudarmos o meio ambiente com a propagação do nosso projeto também temos impacto em causas sociais!
            </p>
          </>
        }
      />
    </div>
  );
}
