"use client";
import Image from "next/image";
import TampinhaImg from "@/assets/tampinha.svg";
import HeroImg from "@/assets/marca_ecoplay.png";
import IntegrantesImg from "@/assets/integrantes.svg";

import { goTo, isMoreDown } from "@/utils/navigation";
import { useEffect, useRef, useState } from "react";

import Icon from "./Icon";

export default function Header() {
  const [isBelowHero, setIsBelowHero] = useState<boolean>(false);
  const [isBelowBanner, setIsBelowBanner] = useState<boolean>(false);
  const [isBelowDuvidas, setIsBelowDuvidas] = useState<boolean>(false);
  const [isBelowIntegrantes, setIsBelowIntegrantes] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
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
          className: "w-24 h-14 bg-green-600/50 p-1 rounded-xl hover:scale-105 duration-300 cursor-pointer",
        }}
        onClick={() => goTo("hero")}
      />
    </header>
  );
}
