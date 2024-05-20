"use client";
import React, { useContext } from "react";
import { CapContext } from "@/providers/CapContext";

import TampinhaImg from '@/assets/tampinha.svg'
import CadeiraDeRodasImg from '@/assets/cadeira_de_rodas.svg'

import Placar from "./components/Placar";

export default function Banner() {
  const { total, meta } = useContext(CapContext);
  return (
    <div className="w-7/12 md:w-5/12 gap-y-5 flex flex-col justify-center items-center">
      <Placar img={TampinhaImg} number={total} description="Tampinhas Coletadas" />
      <Placar img={CadeiraDeRodasImg} number={Math.floor(total/meta) || 0} description="Cadeiras Trocadas"/>
    </div>
  );
}
