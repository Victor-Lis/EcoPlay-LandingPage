"use client";
import { useHistoryContext } from "@/@hooks/useHistoryContext";
import { MonthType } from "@/@types/MonthType";
import { YearType } from "@/@types/YearType";
import { goTo } from "@/utils/navigation";

export default function MonthsContainer({
  meses,
  year,
}: {
  meses: MonthType[];
  year: YearType;
}) {
  const { selectMonth } = useHistoryContext();

  function handleSelectMonth({year, month}:{year: YearType, month: MonthType}){
    selectMonth({year, month})
    goTo("history")
  }

  return (
    <div className="w-full bg-white border-2 border-green-500 p-2 flex flex-wrap gap-1">
      {meses.map((mes) => {
        return (
          <h2
            onClick={() => handleSelectMonth({ month: mes, year })}
            className="py-2 px-4 bg-green-500 text-white w-44 border-2 hover:opacity-85 hover:border-green-600 hover:scale-[102.5%] duration-150 cursor-pointer"
            key={`${year.ano}-${mes.mes}`}
          >
            {mes.mes}
          </h2>
        );
      })}
    </div>
  );
}
