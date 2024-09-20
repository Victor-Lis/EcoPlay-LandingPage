"use client";

import { useState, useEffect } from "react";
import { useCapContext } from "@/@hooks/useCapContext";
import { formatCapByDate } from "@/utils/formatCapByDate";
import Calendar from "../components/Calendar";
import { useHistoryContext } from "@/@hooks/useHistoryContext";
import History from "../components/History";
import { FiCornerDownLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Historico() {
  const { formattedTampinhas } = useCapContext();
  const { selectedMonth, yearOfMonth } = useHistoryContext();
  const router = useRouter()
  return (
    <main
      className={`flex flex-col items-center bg-[url('./../assets/background.svg')] min-h-screen bg-cover bg-repeat py-10`}
    >
      <div className="mx-auto bg-red-400 flex justify-center items-center px-4 py-2 hover:scale-105 duration-150 cursor-pointer" onClick={() => router.replace("/")}>
        <FiCornerDownLeft size={30} color="#fff" />
        <h2 className="text-2xl text-white ml-1">Home</h2>
      </div>
      {formattedTampinhas?.map((year) => {
        if (!!yearOfMonth && yearOfMonth.ano !== year.ano) return;
        return <Calendar key={year.ano} year={year} />;
      })}
      {selectedMonth && <History month={selectedMonth} />}
    </main>
  );
}
