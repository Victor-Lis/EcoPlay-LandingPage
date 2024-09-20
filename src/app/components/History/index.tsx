"use client";
import { useHistoryContext } from "@/@hooks/useHistoryContext";
import { MonthType } from "@/@types/MonthType";
import {
  FiCheck,
  FiClock,
  FiCalendar,
  FiX,
  FiCornerDownRight,
  FiCornerDownLeft,
} from "react-icons/fi";

import { TbBrandDaysCounter } from "react-icons/tb";

export default function History({ month }: { month: MonthType }) {
  const { handleClearMonth } = useHistoryContext();
  return (
    <>
      <div id="history" className="mb-4"></div>
      <div className="mt-10 w-10/12 flex flex-col justify-center items-center">
        <div className="w-full flex justify-start items-end mb-2">
          <div className="py-2 px-4 gap-x-2 h-10 flex justify-center items-center bg-green-500">
            <FiCalendar size={25} color="#fff" />
            <h1 className="text-white text-2xl">{month.mes}</h1>
          </div>
          <div
            className="py-2 px-4 gap-x-2 h-10 flex justify-center items-center bg-red-400 hover:cursor-pointer hover:opacity-75 duration-150"
            onClick={handleClearMonth}
          >
            {/* <h1 className="text-white text-3xl">Fechar</h1> */}
            <FiX size={30} color="#fff" />
          </div>
        </div>
        <div className="w-full p-2 flex flex-col justify-start items-start gap-1">
          {month.dias.map((dia) => {
            return (
              <div className="flex flex-col justify-start items-start ml-4 mb-4" key={`${dia.dia}/${dia.tampinhas.length}`}>
                <div className="flex justify-center items-center">
                  <TbBrandDaysCounter size={30} color="#157938" />
                  <h2 className="text-green-600 text-2xl mt-1 ml-1">
                    {dia.dia}/{month.mes}
                  </h2>
                </div>
                <div className="flex flex-col ml-8">
                  {dia.tampinhas.map((tampinha) => {
                    return (
                      <div className="flex justify-center items-center text-xl ml-8" key={tampinha.hora}>
                        <FiCornerDownRight size={30} color="#157938" />
                        <div className="flex justify-center items-center mt-2">
                          <FiClock
                            size={22}
                            color="#c9c9c9"
                            className="bg-green-700 rounded-full ml-0.5"
                          />
                          <h2 className="text-green-600 ml-1">
                            {tampinha.hora}
                          </h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
