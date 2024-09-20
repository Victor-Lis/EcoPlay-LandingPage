import { useContext } from "react"
import { HistoryContext } from "@/providers/HistoryContext"
export const useHistoryContext = () => useContext(HistoryContext)