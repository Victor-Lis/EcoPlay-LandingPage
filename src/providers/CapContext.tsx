"use client";
import type { ReactNode } from "react";
import type { CapType } from "@/@types/CapType";

import { ref, onValue } from "firebase/database";
import { createContext, useEffect, useState } from "react";

import { dataRef, tampinhasRef } from '@/utils/firebaseConfig'
import { YearType } from "@/@types/YearType";
import { formatCapByDate } from "@/utils/formatCapByDate";

interface CapContextData {
  total: number;
  tampinhas: CapType[]
  formattedTampinhas: YearType[]
}

interface CapValType {
  data: string,
  hora: string
}

export const CapContext = createContext({} as CapContextData);

export const CapProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState<number>(0)
  const [tampinhas, setTampinhas] = useState<CapType[]>([])
  const [formattedTampinhas, setFormattedTampinhas] = useState<YearType[]>([])

  useEffect(() => {
    const unsubscribe = onValue(tampinhasRef, (snapshot) => {
      const tampinhasVal = snapshot.val()
      if(!tampinhasVal) return
      const keys = Object.keys(tampinhasVal) || []
      const values = Object.values(snapshot.val() as CapValType[]) || []

      setTotal(keys.length)

      const data: CapType[] = []
      keys?.map((key, i) => {
        data.push({
          key,
          dia: values[i].data.slice(0, 2),
          mes: values[i].data.slice(3, 5),
          ano: values[i].data.slice(6, 10),
          hora: values[i].hora,
        })
      })
      
      setTampinhas(data)

      const formattedData = formatCapByDate({caps: data})
      setFormattedTampinhas(formattedData)
    });

    return () => unsubscribe();
  }, []);

  return (
    <CapContext.Provider value={{ total, tampinhas, formattedTampinhas }}>
      {children}
    </CapContext.Provider>
  );
};
