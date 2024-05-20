"use client";
import { ref, onValue } from "firebase/database";
import { createContext, ReactNode, useEffect, useState } from "react";

import { dataRef } from '@/utils/firebaseConfig'

interface CapContextData {
  total: number;
  meta: number;
}

export const CapContext = createContext({} as CapContextData);

export const CapProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState<number>(0)
  const [meta, setMeta] = useState<number>(0)

  useEffect(() => {
    const unsubscribe = onValue(dataRef, (snapshot) => {
      setTotal(snapshot.val().total)
      setMeta(snapshot.val().meta)
    });

    return () => unsubscribe();
  }, []);

  return (
    <CapContext.Provider value={{ total, meta }}>
      {children}
    </CapContext.Provider>
  );
};
