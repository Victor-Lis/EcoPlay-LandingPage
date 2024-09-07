"use client";
import Image from "next/image";
import TampinhaImg from "@/assets/tampinha.svg";
import HeroImg from "@/assets/marca_ecoplay.png";
import IntegrantesImg from "@/assets/integrantes.svg";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { goTo, isMoreDown } from "@/utils/navigation";

export default function Header() {
  const [isBelowHero, setIsBelowHero] = useState<boolean>(false);
  const [isBelowBanner, setIsBelowBanner] = useState<boolean>(false);
  const [isBelowDuvidas, setIsBelowDuvidas] = useState<boolean>(false);
  const [isBelowIntegrantes, setIsBelowIntegrantes] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBelowHero(isMoreDown("hero-box"));
      setIsBelowBanner(isMoreDown("banner-box"));
      setIsBelowIntegrantes(isMoreDown("integrantes-box"));
      setIsBelowDuvidas(isMoreDown("duvidas-box"));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full px-5 py-2 flex justify-start items-center gap-x-4">
      <Icon
        show={isBelowHero}
        ImageProps={{
          src: HeroImg,
          alt: "Logo Marca do projeto Eco-Play",
          className: "w-24 h-14 bg-blue-600/50 p-1 rounded-xl hover:scale-105 duration-300 cursor-pointer",
        }}
        onClick={() => goTo("hero")}
      />
      <Icon
        show={isBelowBanner}
        ImageProps={{
          src: TampinhaImg,
          alt: "Representação de uma tampinha",
        }}
        onClick={() => goTo("banner")}
      />
      <Icon
        show={isBelowIntegrantes}
        ImageProps={{
          src: IntegrantesImg,
          alt: "Icone de integrantes",
        }}
        onClick={() => goTo("integrantes-box")}
      />
      <Icon
        show={isBelowDuvidas}
        ImageProps={{
          src: TampinhaImg,
          alt: "Imagem de uma tampinha",
        }}
        onClick={() => goTo("duvidas")}
      />
    </header>
  );
}
