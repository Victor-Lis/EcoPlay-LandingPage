"use client";
import type { ReactNode } from "react";

import { createContext, useState } from "react";
import { MonthType } from "@/@types/MonthType";
import { YearType } from "@/@types/YearType";

interface HistoryContextData {
  selectedMonth: MonthType | null
  yearOfMonth: YearType | null
  handleSelectMonth: ({year, month}:{year: YearType, month: MonthType}) => void
  handleClearMonth: () => void
}

export const HistoryContext = createContext({} as HistoryContextData);

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMonth, setSelectedMonth] = useState<MonthType | null>(null)
  const [yearOfMonth, setYearOfMonth] = useState<YearType | null>(null)

  function handleSelectMonth({year, month}:{year: YearType, month: MonthType}){
    setSelectedMonth(month)
    setYearOfMonth(year)
  }

  function handleClearMonth(){
    setSelectedMonth(null)
    setYearOfMonth(null)
  }

  return (
    <HistoryContext.Provider value={{ selectedMonth, yearOfMonth, handleSelectMonth, handleClearMonth }}>
      {children}
    </HistoryContext.Provider>
  );
};
