"use client";
import { useHistoryContext } from "@/@hooks/useHistoryContext";
import { MonthType } from "@/@types/MonthType";
import { YearType } from "@/@types/YearType";

export default function MonthsContainer({
  meses,
  year,
}: {
  meses: MonthType[];
  year: YearType;
}) {
  const { handleSelectMonth } = useHistoryContext();
  return (
    <div className="w-full bg-white border-2 border-green-500 p-2 flex flex-wrap max-md:justify-center gap-1">
      {meses.map((mes) => {
        return (
          <h2
            // onClick={() => handleSelectMonth({ month: mes, year })}
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
