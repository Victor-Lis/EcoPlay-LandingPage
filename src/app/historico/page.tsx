"use client";

import { useState, useEffect } from "react";
import { useCapContext } from "@/@hooks/useCapContext";
import { formatCapByDate } from "@/utils/formatCapByDate";
import Calendar from "../components/Calendar";
import { useHistoryContext } from "@/@hooks/useHistoryContext";

export default function Historico() {
  const { formattedTampinhas } = useCapContext();
  const { yearOfMonth } = useHistoryContext()
  return (
    <main
      className={`flex flex-col items-center bg-[url('./../assets/background.svg')] min-h-screen bg-cover bg-repeat py-10`}
    >
      {formattedTampinhas?.map((year) => {
        if(!!yearOfMonth && yearOfMonth.ano !== year.ano) return
        return <Calendar key={year.ano} year={year}/>
      })}
    </main>
  );
}
