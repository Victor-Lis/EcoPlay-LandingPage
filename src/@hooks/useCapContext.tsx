import { useContext } from "react"
import { CapContext } from "@/providers/CapContext"
export const useCapContext = () => useContext(CapContext)