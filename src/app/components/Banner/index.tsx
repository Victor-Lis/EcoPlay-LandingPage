"use client";
import React, { useContext } from "react";
import { CapContext } from "@/providers/CapContext";

import TampinhaImg from '@/assets/tampinha.svg'
import CadeiraDeRodasImg from '@/assets/cadeira_de_rodas.svg'

import Placar from "./components/Placar";
import Description from "./components/Description";

export default function Banner() {
  const { total } = useContext(CapContext);
  return (
    <>
      <div id="banner-up" className="mb-.5/"/>
      <div id="banner" className="mb-2"/>
      <div className="w-10/12 md:w-5/12 gap-y-5 flex flex-col justify-center items-center" id="banner-box">
        <Placar img={TampinhaImg} number={total} description="Tampinhas Coletadas" />
        {/* <Placar img={CadeiraDeRodasImg} number={Math.floor(total/meta) || 0} description="Cadeiras Trocadas"/> */}
        <Description description="Acima são exibidas as tampinhas que foram coletadas pelo nosso protótipo ao longo do tempo, sendo possível inclusive acessar uma análise mais detalhada clicando acima!"/>
      </div>
    </>
  );
}
