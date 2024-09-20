import IntegrantesHero from "@/assets/bannerHero.svg";
import Image from "next/image";
import Card from "./components/Card";

export default function Integrantes() {
  return (
    <>
      <div className="mb-4" id="integrantes"/>
      <div
        className="w-10/12 md:w-7/12 gap-y-5 flex flex-col justify-center items-center max-sm:my-10"
        id="integrantes-box"
      >
        <Image
          src={IntegrantesHero}
          alt="Banner integrantes EcoPlay"
          className={"min-w-72 sm:min-w-40 w-10/12 max-w-96 mb-5"}
          priority
        />
        <Card
          title="Co-Orientadores"
          names={["MÁRCIO YUJI TOKUNAGA", "KÁTIA MARIA TERUCO FUSHITA"]}
        />
        <Card
          title="Alunos"
          names={[
            "KARLOS EDUARDO MARQUES ARAUJO DE MORAES",
            "MIGUEL ELIAS ROSILLO DIMAS",
            "PEDRO HENRIQUE MORAES SAMSONAS",
            "VICTOR LIS BRONZO",
          ]}
        />
      </div>
    </>
  );
}
